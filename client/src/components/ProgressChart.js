import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const data = [
  { day: "Mon", water: 2 },
  { day: "Tue", water: 3 },
  { day: "Wed", water: 4 },
  { day: "Thu", water: 3 },
  { day: "Fri", water: 5 },
  { day: "Sat", water: 6 },
  { day: "Sun", water: 4 },
];

function ProgressChart() {
  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-semibold text-slate-700 mb-6">Water Intake History (Liters)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
          />
          <Area type="monotone" dataKey="water" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorWater)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;