import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useCars from "../../../hooks/useCars";
import "./Chart.css";

const Chart = () => {
  const [cars] = useCars();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="section-title mb-5 fw-bold text-center">
            <span className="d-inline-block border-bottom border-danger border-2">
              CAR DEALER DASHBOARD
            </span>
          </h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={cars}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="quantity" />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
              <Bar dataKey="quantity" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
