import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EntryPage from "./pages/EntryPage";
import ProgressPage from "./pages/ProgressPage";
import HistoryPage from "./pages/HistoryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
        <Navbar />
        <main className="pb-12">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/entry" element={<EntryPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
