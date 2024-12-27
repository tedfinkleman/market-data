
import React from "react";
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BuildingChartComponent = ({ data }) => {
  return (
    <div>
      <h2>Building Data Visualization</h2>
      
      {/* Line Chart for Average Prices */}
      <LineChart width={600} height={300} data={data.lineChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" name="Average Price" />
      </LineChart>

      {/* Bar Chart for Sales Volume */}
      <BarChart width={600} height={300} data={data.barChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" name="Sales Volume" />
      </BarChart>
    </div>
  );
};

export default BuildingChartComponent;
