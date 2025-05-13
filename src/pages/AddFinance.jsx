import React, { useState } from 'react';
import api from '../api/axiosConfig';

const AddFinance = () => {
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    category: '',
    description: '',
    date: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/finance', formData);
      setStatus('✅ Finance record added!');
      setFormData({ type: '', amount: '', category: '', description: '', date: '' });
    } catch {
      setStatus('❌ Failed to add record.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Finance Record</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select name="type" className="form-select" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input type="number" name="amount" className="form-control" value={formData.amount} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" rows="2" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
      {status && <div className="alert alert-info mt-3">{status}</div>}
    </div>
  );
};

export default AddFinance;
