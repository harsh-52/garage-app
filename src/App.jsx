import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/PAGES/HomePage';
import AddEntry from './assets/PAGES/AddEntry';
import ViewEntries from './assets/PAGES/ViewEntries';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Garage App</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/add">Add Entry</Link>
          <Link className="nav-link" to="/view">View Entries</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEntry />} />
        <Route path="/view" element={<ViewEntries />} />
      </Routes>
    </Router>
  );
}

export default App;
