import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <table className="table table-striped">
        <thead>
          <tr><th>#</th><th>Name</th><th>Department</th><th>Position</th></tr>
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
  );
};

export default EmployeePage;
