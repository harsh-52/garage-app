import { useEffect, useState } from 'react';
import { getEntries } from '../../dataService';

function ViewEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <div className="container mt-4">
      <h2>Service Entries</h2>
      <table className="table table-bordered">
        <thead>
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
  );
}

export default ViewEntries;
