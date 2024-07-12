import Papa from "papaparse";

export const fetchDataAndParse = (url, callback) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((text) => {
      Papa.parse(text, {
        header: true,
        complete: (result) => {
          callback(result.data);
        },
      });
    })
    .catch((error) => console.error("Fetch error:", error));
};

export const processGeographicData = (data) => {
  const stateCount = data.reduce((acc, curr) => {
    acc[curr.clinicState] = (acc[curr.clinicState] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(stateCount).map((state) => ({
    clinicState: state,
    num: stateCount[state],
  }));
};

export const processSignOffData = (data) => {
  const hourCount = data.reduce((acc, curr) => {
    const hour = new Date(curr.encounterSignOffTimeFirst).getHours();
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(hourCount).map((hour) => ({
    hourOfDay: hour,
    numEncounters: hourCount[hour],
  }));
};
