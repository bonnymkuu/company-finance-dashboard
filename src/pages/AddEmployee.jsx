import React, { useState } from 'react';
import api from '../api/axiosConfig';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    position: '',
    email: '',
    hireDate: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/employees', formData);
      setStatus(`✅ Employee "${res.data.name}" added successfully!`);
      setFormData({ name: '', department: '', position: '', email: '', hireDate: '' });
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to add employee.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Employee</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" value={formData.name}
                 onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <select name="department" value={formData.department}
                  onChange={handleChange} className="form-select" required>
            <option value="">Select Department</option>
            <option>HR</option>
            <option>IT</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Operations</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Position</label>
          <input type="text" name="position" value={formData.position}
                 onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email}
                 onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Hire Date</label>
          <input type="date" name="hireDate" value={formData.hireDate}
                 onChange={handleChange} className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>

      {status && <div className="mt-3 alert alert-info">{status}</div>}
    </div>
  );
};

export default AddEmployee;
