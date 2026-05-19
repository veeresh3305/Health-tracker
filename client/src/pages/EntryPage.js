import HealthForm from "../components/HealthForm";

function EntryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Daily Health Entry</h1>
        <p className="text-slate-500 mt-1">Track your vitals to maintain a healthy lifestyle.</p>
      </div>

      <div className="glass rounded-2xl shadow-sm border border-slate-200 bg-white">
        <HealthForm />
      </div>
    </div>
  );
}

export default EntryPage;