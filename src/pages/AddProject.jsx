import React, { useState } from 'react';
import api from '../api/axiosConfig';

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    deadline: '',
    team: '',
    budget: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects', formData);
      setStatus('✅ Project created!');
      setFormData({ name: '', status: '', deadline: '', team: '', budget: '' });
    } catch {
      setStatus('❌ Failed to add project.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Project Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select name="status" className="form-select" value={formData.status} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Deadline</label>
          <input type="date" name="deadline" className="form-control" value={formData.deadline} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Team Assigned</label>
          <input type="text" name="team" className="form-control" value={formData.team} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Budget</label>
          <input type="number" name="budget" className="form-control" value={formData.budget} onChange={handleChange} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {status && <div className="alert alert-info mt-3">{status}</div>}
    </div>
  );
};

export default AddProject;
