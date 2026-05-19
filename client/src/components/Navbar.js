import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/entry", label: "Add Entry" },
    { path: "/progress", label: "Progress" },
    { path: "/history", label: "History" },
  ];

  // Don't show navbar on login page
  if (location.pathname === "/") return null;

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
          VitalityTracker
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-indigo-600 ${
                location.pathname === link.path ? "text-indigo-600 border-b-2 border-indigo-600 pb-1" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 font-semibold rounded-lg transition-colors border border-red-100"
          >
            Logout
          </button>
        </div>
        {/* Mobile Menu Button could go here */}
      </div>
    </nav>
  );
}

export default Navbar;
