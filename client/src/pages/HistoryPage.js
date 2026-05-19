import { useEffect, useState } from "react";
import API from "../services/api";
import SearchBar from "../components/SearchBar";
import HistoryTable from "../components/HistoryTable";

function HistoryPage() {
  const [entries, setEntries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/api/health");
      setEntries(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // SEARCH FUNCTION
  const handleSearch = (query) => {
    const q = query.toLowerCase();

    const filteredData = entries.filter((item) =>
      item.date.toLowerCase().includes(q)
    );

    setFiltered(filteredData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <HistoryTable data={filtered} refresh={fetchData} />
    </div>
  );
}

export default HistoryPage;