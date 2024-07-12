import React from "react";
import { ResponsiveContainer } from "recharts";

const ChartCard = ({ title, chartData, children }) => {
  return (
    <div>
      <h2 className="chart-title">{title}</h2>
      <div className="chart-container">
        {chartData.length === 0 ? (
          <div className="no-data">No data available</div>
        ) : (
          <ResponsiveContainer width="100%" height={500}>
            {children}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ChartCard;
