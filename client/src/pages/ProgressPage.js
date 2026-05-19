import { useEffect, useState } from "react";
import API from "../services/api";
import ProgressChart from "../components/ProgressChart";

function ProgressPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/health");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Your Progress</h1>

      <div className="glass p-6 mt-6">
        <ProgressChart data={data} />
      </div>
    </div>
  );
}

export default ProgressPage;