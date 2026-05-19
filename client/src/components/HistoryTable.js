function HistoryTable() {
  const data = [
    { id: 1, date: "2026-05-13", water: "3L", calories: "2200", exercise: "45 min", sleep: "8 hr", weight: "72 kg" },
    { id: 2, date: "2026-05-12", water: "2.5L", calories: "2400", exercise: "30 min", sleep: "7 hr", weight: "72.2 kg" },
    { id: 3, date: "2026-05-11", water: "4L", calories: "1900", exercise: "60 min", sleep: "7.5 hr", weight: "72.5 kg" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Water</th>
            <th className="px-6 py-4 font-semibold">Calories</th>
            <th className="px-6 py-4 font-semibold">Exercise</th>
            <th className="px-6 py-4 font-semibold">Sleep</th>
            <th className="px-6 py-4 font-semibold">Weight</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 font-medium">{row.date}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {row.water}
                </span>
              </td>
              <td className="px-6 py-4">{row.calories}</td>
              <td className="px-6 py-4">{row.exercise}</td>
              <td className="px-6 py-4">{row.sleep}</td>
              <td className="px-6 py-4">{row.weight}</td>
              <td className="px-6 py-4 text-right space-x-3">
                <button className="text-indigo-600 hover:text-indigo-900 font-medium text-sm transition-colors">Edit</button>
                <button className="text-red-600 hover:text-red-900 font-medium text-sm transition-colors">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;