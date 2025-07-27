import { useEffect, useState } from "react";
import { getEntries } from "../../dataService";
import "../css/ViewEntries.css"; // Import the custom CSS file

function ViewEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <div className="container mt-4 view-entries-container">
      <h2 className="text-center mb-4">Service Entries</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Vehicle</th>
              <th>Service</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.mobile}</td>
                <td>{entry.vehicle}</td>
                <td>{entry.service}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewEntries;
