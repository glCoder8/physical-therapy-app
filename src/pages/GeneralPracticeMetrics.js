import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Filters from "../components/Filters";
import ChartCard from "../components/ChartCard";
import { fetchDataAndParse, processGeographicData } from "../utils/dataUtils";

const GeneralPracticeMetrics = () => {
  const [chartData, setChartData] = useState([]);
  const [clinic, setClinic] = useState(localStorage.getItem("clinic") || "");
  const [provider, setProvider] = useState(
    localStorage.getItem("provider") || ""
  );

  useEffect(() => {
    fetchDataAndParse("/data.csv", (data) => {
      const filteredData = data.filter(
        (row) =>
          (clinic ? row.clinicName === clinic : true) &&
          (provider ? row.providerFullName === provider : true)
      );
      const processedData = processGeographicData(filteredData);
      setChartData(processedData);
    });
  }, [clinic, provider]);

  const handleClinicChange = (event) => {
    setClinic(event.target.value);
    localStorage.setItem("clinic", event.target.value);
  };

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
    localStorage.setItem("provider", event.target.value);
  };

  return (
    <div>
      <Filters
        clinic={clinic}
        provider={provider}
        onClinicChange={handleClinicChange}
        onProviderChange={handleProviderChange}
      />
      <ChartCard title="Geographic Breakdown of Cases" chartData={chartData}>
        <BarChart data={chartData}>
          <XAxis dataKey="clinicState" />
          <YAxis domain={[0, 1000]} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar
            dataKey="num"
            fill="#8884d8"
            barSize={chartData.length === 1 ? 50 : 30}
          />
        </BarChart>
      </ChartCard>
    </div>
  );
};

export default GeneralPracticeMetrics;
