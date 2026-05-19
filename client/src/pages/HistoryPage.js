import SearchBar from "../components/SearchBar";
import HistoryTable from "../components/HistoryTable";

function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Entry History</h1>
          <p className="text-slate-500 mt-1">Review your past health entries.</p>
        </div>
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>
      </div>

      <div className="glass rounded-2xl shadow-sm border border-slate-200 bg-white overflow-hidden">
        <HistoryTable />
      </div>
    </div>
  );
}

export default HistoryPage;