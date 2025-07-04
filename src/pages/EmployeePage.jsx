import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  const dummyEmployees = [
    { _id: '1', name: 'Alice Johnson', department: 'HR', position: 'Manager' },
    { _id: '2', name: 'Bob Smith', department: 'IT', position: 'Developer' },
    { _id: '3', name: 'Catherine Lee', department: 'Marketing', position: 'Coordinator' },
    { _id: '4', name: 'David Kim', department: 'Finance', position: 'Analyst' },
    { _id: '5', name: 'Ella Brown', department: 'IT', position: 'UX Designer' },
    { _id: '6', name: 'Frank Miller', department: 'HR', position: 'Recruiter' },
    { _id: '7', name: 'Grace Turner', department: 'Marketing', position: 'Content Strategist' },
    { _id: '8', name: 'Henry Walker', department: 'Finance', position: 'Accountant' },
    { _id: '9', name: 'Ivy Chen', department: 'IT', position: 'Backend Developer' },
    { _id: '10', name: 'Jake Wilson', department: 'Operations', position: 'Supervisor' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employees from API</h2>
      <div className="table-responsive mb-5">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th><th>Name</th><th>Department</th><th>Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mb-3">Dummy Employee Data</h2>
      <div className="table-responsive mb-5">
        <table className="table table-striped table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>#</th><th>Name</th><th>Department</th><th>Position</th>
            </tr>
          </thead>
          <tbody>
            {dummyEmployees.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
