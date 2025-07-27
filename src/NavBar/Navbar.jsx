import { Link } from "react-router-dom";
import { Home, PlusCircle, List } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Nav Bar */}
      <nav className="topbar bg-dark text-white d-flex justify-content-between align-items-center p-3">
        <h2 className="brand text-white m-0">Krishna Auto Mobiles</h2>
      </nav>

      {/* Floating Action Buttons */}
      <div className="floating-nav d-flex gap-3">
        <Link className="floating-btn" to="/">
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link className="floating-btn" to="/add">
          <PlusCircle size={20} />
          <span>Add</span>
        </Link>

        <Link className="floating-btn" to="/view">
          <List size={20} />
          <span>View</span>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
