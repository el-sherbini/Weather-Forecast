import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        suggestedMax: 120,
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      title: {
        text: (ctx) => {
          const { intersect, mode } = ctx.chart.options.interaction;
          return "Mode: " + mode + ", intersect: " + intersect;
        },
      },
      legend: {
        labels: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="w-full  bg-slate-200 p-4 rounded-lg">
      <h1 className="sm:text-2xl font-bold text-center mb-4">
        City temperature during day
      </h1>
      {chartData.labels && (
        <div className="lg:h-80 h-48">
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default BarChart;
