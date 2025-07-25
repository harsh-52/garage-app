import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/PAGES/HomePage";
import AddEntry from "./assets/PAGES/AddEntry";
import ViewEntries from "./assets/PAGES/ViewEntries";
import Navbar from "./NavBar/Navbar"; // Import the new Navbar

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEntry />} />
            <Route path="/view" element={<ViewEntries />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
