import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];

const options = {
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "pH",
      data: [32, 42, 51, 60, 51, 95, 45, 23],
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
    },
    {
      label: "DO",
      data: [37, 42, 41, 37, 31, 44],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
    {
      label: "EC",
      data: [96, 88, 25, 35, 17, 69],
      backgroundColor: "#FF00FF",
      borderColor: "#FF00FF",
    },
    {
      label: "Temp",
      data: [60, 54, 54, 28, 27, 49],
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
  ],
};

const ChartContainer = () => {
  return (
    <div style={{ width: 700, height: 400 }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartContainer;