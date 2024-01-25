import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const options = {
    scales: {
      x: {
        type: "category", // Use linear scale instead of category
        position: "bottom",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="lg:w-[40rem] w-[20rem] h-[90%] overflow-x-scroll">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
