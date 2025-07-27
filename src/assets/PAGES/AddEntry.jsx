import { useState } from "react";
import { addEntry } from "../../dataService";

function AddEntry() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    vehicle: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    alert("Entry added!");
    setFormData({ name: "", mobile: "", vehicle: "", service: "", date: "" });
  };

  return (
    <div
      style={{
        marginTop: "30px", // Leaves space for fixed navbar
        width: "100%",
        minHeight: "calc(100vh - 130px)",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Top align
        padding: "1rem",
      }}
    >
      <div
        className="card shadow-sm p-3 p-md-4 rounded-4 w-100"
        style={{
          maxWidth: "500px",
        }}
      >
        <h2 className="text-center mb-4">Add New Entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Customer Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              className="form-control"
              name="mobile"
              placeholder="e.g. 9876543210"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Vehicle Number</label>
            <input
              className="form-control"
              name="vehicle"
              placeholder="e.g. MH12AB1234"
              value={formData.vehicle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Service Type</label>
            <input
              className="form-control"
              name="service"
              placeholder="e.g. Oil Change"
              value={formData.service}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Service Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Add Entry
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEntry;
