import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from "../Header/Header";

const Statistics = () => {
  const LoadDetails = useLoaderData();
  const chartData = LoadDetails.data;
  console.log(chartData);

  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <h2 className="m-5">Line chart for no of quizes for every topics</h2>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="total" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
