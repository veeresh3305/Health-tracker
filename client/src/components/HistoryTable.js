import API from "../services/api";

function HistoryTable({ data = [], refresh }) {

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/health/${id}`);
      refresh(); // reload data after delete
    } catch (err) {
      console.log(err);
    }
  };

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
            <tr key={row._id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 font-medium">
                {new Date(row.date).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {row.water} L
                </span>
              </td>

              <td className="px-6 py-4">{row.calories}</td>
              <td className="px-6 py-4">{row.exercise} min</td>
              <td className="px-6 py-4">{row.sleep} hr</td>
              <td className="px-6 py-4">{row.weight} kg</td>

              <td className="px-6 py-4 text-right space-x-3">
                <button
                  className="text-indigo-600 hover:text-indigo-900 font-medium text-sm"
                  onClick={() => alert("Edit feature coming soon")}
                >
                  Edit
                </button>

                <button
                  className="text-red-600 hover:text-red-900 font-medium text-sm"
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;