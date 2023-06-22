import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = ({ listLabel, listData }) => {
  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Line
      options={options}
      data={{ labels: listLabel, datasets: listData }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
export default LineChart;
