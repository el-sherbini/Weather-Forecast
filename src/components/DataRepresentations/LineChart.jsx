import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
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
    <div className="w-full lg:h-72 md:h-56 sm:h-64 bg-slate-200 p-4 rounded-lg">
      {chartData.labels && <Line data={chartData} options={options} />}
    </div>
  );
}

export default LineChart;
