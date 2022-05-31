import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full lg:h-80 md:h-56 sm:h-36">
      {chartData.labels && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default BarChart;
