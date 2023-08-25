import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { HistoricalData } from "../types/types";

interface LineGraphProps {
  casesData: HistoricalData;
  deathsData: HistoricalData;
  recoveredData: HistoricalData;
}

const LineGraph: React.FC<LineGraphProps> = ({
  casesData,
  deathsData,
  recoveredData,
}) => {
  const dates = Object.keys(casesData);

  const chartData = dates.map((date) => ({
    date,
    cases: casesData[date],
    deaths: deathsData[date],
    recovered: recoveredData[date],
  }));
  return (
    <div className="mt-5 ml-5">
      <LineChart
        width={400}
        height={250}
        data={chartData}
        margin={{ top: 5, right: 30, left: 25, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        <Line type="monotone" dataKey="recovered" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default LineGraph;
