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
    <div className="w-full rounded-lg bg-slate-200 p-4 dark:bg-slate-800">
      <h1 className="mb-4 text-center font-bold sm:text-2xl">
        City average temperature during year
      </h1>
      {chartData.labels && (
        <div className="sm:h-64 md:h-56 lg:h-72">
          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
}

export default LineChart;
