import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", water: 2 },
  { day: "Tue", water: 3 },
  { day: "Wed", water: 4 },
  { day: "Thu", water: 3 },
  { day: "Fri", water: 5 },
];

function ProgressChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />

      <XAxis dataKey="day" />

      <YAxis />

      <Tooltip />

      <Line type="monotone" dataKey="water" stroke="#8884d8" />
    </LineChart>
  );
}

export default ProgressChart;