import React from 'react';

const Marketing = () => {
  const campaigns = [
    { name: 'Google Ads', spend: 1200, reach: 30000, date: '2025-05-03' },
    { name: 'Facebook Ads', spend: 800, reach: 15000, date: '2025-05-06' },
  ];

  return (
<div className="container mt-4 main-content">
<h2 className="mb-4">Marketing Performance</h2>

      <table className="table table-striped">
        <thead className="table-info">
          <tr>
            <th>Campaign</th>
            <th>Spend ($)</th>
            <th>Reach</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.spend}</td>
              <td>{c.reach.toLocaleString()}</td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-5">Add New Campaign</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Campaign Name</label>
          <input type="text" className="form-control" placeholder="e.g. Instagram Boost" />
        </div>
        <div className="mb-3">
          <label className="form-label">Budget</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Reach (Estimated)</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" />
        </div>
        <button className="btn btn-info text-white">Add Campaign</button>
      </form>
    </div>
  );
};

export default Marketing;
