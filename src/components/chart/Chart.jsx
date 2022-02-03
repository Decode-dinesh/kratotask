import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "20%",
    uv: 4000,
  
    amt: 2400
  },
  {
    name: "30%",
    uv: 3000,
  
    amt: 2210
  },
  {
    name: "80%",
    uv: 2000,

    amt: 2290
  },
  {
    name: "40%",
    uv: 2780,

    amt: 2000
  },
  {
    name: "20%",
    uv: 1890,
  
    amt: 2181
  },

];

export default function Chart() {
  return (
    <BarChart
      width={300}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
