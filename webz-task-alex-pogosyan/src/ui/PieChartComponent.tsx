"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartComponent({ data }: any) {
  data = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        label: "Sentiment",
        data: data,
        backgroundColor: ["#41D77D", "#EE4C4C"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  let options = {
    responsive: true,
    legend: {
      position: "bottom",
    },
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
}
