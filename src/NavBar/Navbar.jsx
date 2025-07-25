import { Link } from "react-router-dom";
import { Home, PlusCircle, List } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="sidebar bg-dark text-white d-flex flex-column vh-100 p-3">
      <h2 className="brand text-white mb-4">Krishna Auto Mobiles</h2>

      <Link className="nav-item" to="/">
        <Home size={20} />
        <span className="label">Home</span>
      </Link>

      <Link className="nav-item" to="/add">
        <PlusCircle size={20} />
        <span className="label">Add Entry</span>
      </Link>

      <Link className="nav-item" to="/view">
        <List size={20} />
        <span className="label">View Entries</span>
      </Link>
    </nav>
  );
}

export default Navbar;
