import SearchBar from "../components/SearchBar";
import HistoryTable from "../components/HistoryTable";

function HistoryPage() {
  return (
    <div>
      <h1>History</h1>

      <SearchBar />

      <HistoryTable />
    </div>
  );
}

export default HistoryPage;