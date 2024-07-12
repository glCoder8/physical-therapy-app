import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Filters from "../components/Filters";
import ChartCard from "../components/ChartCard";
import { fetchDataAndParse, processSignOffData } from "../utils/dataUtils";

const TimeToSignOff = () => {
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
      const processedData = processSignOffData(filteredData);
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
      <ChartCard
        title="Typical Time of Day for Note Sign Off"
        chartData={chartData}
      >
        <LineChart data={chartData}>
          <XAxis dataKey="hourOfDay" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="numEncounters" stroke="#8884d8" />
        </LineChart>
      </ChartCard>
    </div>
  );
};

export default TimeToSignOff;
