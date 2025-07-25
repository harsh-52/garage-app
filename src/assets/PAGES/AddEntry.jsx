import { useState } from 'react';
import { addEntry } from '../../dataService';

function AddEntry() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    vehicle: '',
    service: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    alert('Entry added!');
    setFormData({ name: '', mobile: '', vehicle: '', service: '', date: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Customer Name" value={formData.name} onChange={handleChange} required />
        <input className="form-control mb-2" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <input className="form-control mb-2" name="vehicle" placeholder="Vehicle Number" value={formData.vehicle} onChange={handleChange} required />
        <input className="form-control mb-2" name="service" placeholder="Service Type" value={formData.service} onChange={handleChange} required />
        <input className="form-control mb-3" type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default AddEntry;
