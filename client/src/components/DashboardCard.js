function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="glass hover:-translate-y-1 transition-transform duration-300 rounded-2xl p-6 flex items-center space-x-4 cursor-pointer group">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
        {icon || "✨"}
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default DashboardCard;