import React from 'react';

const Expenses = () => {
  const expenseData = [
    { id: 1, category: 'Marketing', amount: 2500, date: '2025-05-01' },
    { id: 2, category: 'Salaries', amount: 30000, date: '2025-05-05' },
    { id: 3, category: 'Utilities', amount: 1200, date: '2025-05-07' },
  ];

  return (
<div className="container mt-4 main-content">
<h2 className="mb-4">Expenses</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map(exp => (
            <tr key={exp.id}>
              <td>{exp.id}</td>
              <td>{exp.category}</td>
              <td>{exp.amount.toLocaleString()}</td>
              <td>{exp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-5">Add New Expense</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" placeholder="e.g. Office Supplies" />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input type="number" className="form-control" placeholder="e.g. 150" />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;
