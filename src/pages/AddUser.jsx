import React, { useState } from 'react';
import api from '../api/axiosConfig';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', formData);
      setStatus('✅ User added!');
      setFormData({ name: '', email: '', role: '', password: '' });
    } catch {
      setStatus('❌ Failed to add user.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select name="role" className="form-select" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Staff</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary">Create User</button>
      </form>
      {status && <div className="alert alert-info mt-3">{status}</div>}
    </div>
  );
};

export default AddUser;
