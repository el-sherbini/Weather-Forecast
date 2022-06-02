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
    <div className="w-full lg:h-80 md:h-56 sm:h-36">
      {chartData.labels && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default BarChart;
