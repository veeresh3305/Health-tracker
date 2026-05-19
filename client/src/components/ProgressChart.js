import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SingleChart({ title, dataKey, color, data }) {
  const chartData = data.map((item) => ({
    date: item.date,
    value: Number(item[dataKey]) || 0,
  }));

  return (
    <div className="w-full h-80 mb-10">
      <h3 className="text-lg font-semibold text-slate-700 mb-4">
        {title}
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function ProgressChart({ data = [] }) {
  return (
    <div>
      <SingleChart title="Water Intake (Liters)" dataKey="water" color="#3b82f6" data={data} />
      <SingleChart title="Calories Burned" dataKey="calories" color="#f97316" data={data} />
      <SingleChart title="Sleep (Hours)" dataKey="sleep" color="#8b5cf6" data={data} />
      <SingleChart title="Exercise (Minutes)" dataKey="exercise" color="#10b981" data={data} />
    </div>
  );
}

export default ProgressChart;