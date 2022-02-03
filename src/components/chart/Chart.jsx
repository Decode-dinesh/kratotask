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
    uv: 8,
  
    amt: 50
  },
  {
    name: "30%",
    uv: 30,
  
    amt: 40
  },
  {
    name: "80%",
    uv: 45,

    amt: 20
  },
  {
    name: "40%",
    uv: 15,

    amt: 20
  },
  {
    name: "20%",
    uv: 8,
  
    amt: 10
  },

];

export default function Chart() {
  return (
    <BarChart
      width={250}
      height={250}
      data={data}
      margin={{
        top: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
