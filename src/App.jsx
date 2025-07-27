import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/PAGES/HomePage";
import AddEntry from "./assets/PAGES/AddEntry";
import ViewEntries from "./assets/PAGES/ViewEntries";
import Navbar from "./NavBar/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar + Floating Buttons */}
      <Navbar />

      {/* Main content appears BELOW floating buttons */}
      <div style={{ paddingTop: "60px", padding: "20px", overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEntry />} />
          <Route path="/view" element={<ViewEntries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
