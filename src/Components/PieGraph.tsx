import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

interface PieChartProps {
  data: {
    cases: number;
    deaths: number;
    recovered: number;
  };
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"]; // Colors for cases, deaths, and recovered

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const pieData = [
    { name: "Cases", value: data.cases },
    { name: "Deaths", value: data.deaths },
    { name: "Recovered", value: data.recovered },
  ];

  return (
    <div className="mt-5 ml-10">
      <h2 className="text-center">COVID-19 Data Distribution</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
