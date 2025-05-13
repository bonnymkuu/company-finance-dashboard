import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const IncomePage = () => {
  const pieData = {
    labels: ['Sales', 'Marketing', 'R&D', 'Others'],
    datasets: [
      {
        data: [50, 20, 15, 15],
        backgroundColor: ['#0d6efd', '#dc3545', '#ffc107', '#28a745'],
      },
    ],
  };

  const barLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue (Bar)',
        data: [50000, 70000, 80000, 100000, 120000],
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
        borderWidth: 1,
        type: 'bar',
      },
      {
        label: 'Expenses (Line)',
        data: [30000, 40000, 35000, 50000, 60000],
        fill: false,
        borderColor: '#dc3545',
        tension: 0.4,
        type: 'line',
      },
    ],
  };

  const incomeDetails = [
    { id: 1, source: 'Sales', amount: '$50,000' },
    { id: 2, source: 'Investment Income', amount: '$15,000' },
    { id: 3, source: 'Interest', amount: '$2,000' },
    { id: 4, source: 'Refunds', amount: '$1,500' },
    { id: 5, source: 'Grants', amount: '$5,000' },
    { id: 6, source: 'Other Income', amount: '$3,500' },
    { id: 7, source: 'Licensing', amount: '$10,000' },
    { id: 8, source: 'Consulting', amount: '$8,000' },
    { id: 9, source: 'Donations', amount: '$2,500' },
    { id: 10, source: 'Miscellaneous', amount: '$1,000' },
  ];

  return (
    <div className="container mt-4 ">
      <h2 className="mb-4">Income Overview</h2>

      <h4 className="mt-5 mb-3">Income Breakdown</h4>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h6>Income Distribution (Pie)</h6>
            <Pie data={pieData} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h6>Revenue and Expenses (Bar + Line)</h6>
            <Bar data={barLineData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      <h4 className="mt-5 mb-3">Income Details</h4>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Income Source</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeDetails.map((income) => (
            <tr key={income.id}>
              <td>{income.id}</td>
              <td>{income.source}</td>
              <td>{income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-5 mb-3">Summary</h4>
      <p>
        The income sources for the company have been broken down into various categories such as sales,
        investment income, grants, and more. The pie chart gives a clear overview of the distribution of
        income, while the bar and line chart shows a comparison of revenue and expenses over the last few
        months.
      </p>
    </div>
  );
};

export default IncomePage;
