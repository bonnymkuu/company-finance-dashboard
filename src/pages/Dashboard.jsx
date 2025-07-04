import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import myImage from '../../public/my-image.png';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const cards = [
    { icon: 'bi-cash-stack', title: 'Total Revenue', value: '$125,000', color: 'primary' },
    { icon: 'bi-currency-exchange', title: 'Expenses', value: '$85,000', color: 'danger' },
    { icon: 'bi-graph-up-arrow', title: 'Net Profit', value: '$40,000', color: 'success' },
    { icon: 'bi-people', title: 'Employees', value: '52', color: 'info' },
    { icon: 'bi-person-lines-fill', title: 'Clients', value: '37', color: 'warning' },
    { icon: 'bi-box', title: 'Projects', value: '12 Active', color: 'dark' },
    { icon: 'bi-bar-chart-steps', title: 'Marketing Spend', value: '$15,000', color: 'secondary' },
    { icon: 'bi-pie-chart-fill', title: 'Departmental Budget', value: '$60,000', color: 'dark text-dark' },
  ];

  const recentMessages = [
    { from: 'John Smith', message: 'Submitted new project report.', time: '2h ago' },
    { from: 'Lisa White', message: 'Requested budget approval.', time: '5h ago' },
    { from: 'Karen Mills', message: 'Sent HR files.', time: 'Yesterday' },
  ];

  const profile = {
    name: 'Boniface M.',
    position: 'Developer',
    image: myImage,
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{ label: 'Revenue', data: [10000, 15000, 18000, 20000, 25000], backgroundColor: '#0d6efd' }],
  };

  const pieData = {
    labels: ['Marketing', 'R&D', 'HR', 'IT'],
    datasets: [{ data: [30, 25, 20, 25], backgroundColor: ['#0d6efd', '#dc3545', '#ffc107', '#198754'] }],
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ label: 'Site Visitors', data: [200, 300, 250, 400, 450], fill: false, borderColor: '#198754' }],
  };

  const doughnutData = {
    labels: ['Salaries', 'Tools', 'Utilities'],
    datasets: [{ data: [50000, 15000, 5000], backgroundColor: ['#6610f2', '#6f42c1', '#d63384'] }],
  };

  const employees = [
    { id: 1, name: 'Alice Johnson', department: 'HR', position: 'Manager' },
    { id: 2, name: 'Mark Lee', department: 'IT', position: 'Developer' },
    { id: 3, name: 'Jane Doe', department: 'Marketing', position: 'Coordinator' },
  ];

  const projects = [
    { id: 1, name: 'Mobile App Dev', status: 'Active' },
    { id: 2, name: 'Web Redesign', status: 'Completed' },
  ];

  const departments = [
    { id: 1, name: 'HR', budget: '$20,000' },
    { id: 2, name: 'IT', budget: '$25,000' },
    { id: 3, name: 'Marketing', budget: '$15,000' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard Overview</h2>
      <div className="row">
        {/* Left Column: Main Dashboard */}
        <div className="col-lg-9">
          <div className="row">
            {cards.map((card, i) => (
              <div className="col-md-6 col-xl-3 mb-4" key={i}>
                <div className={`card text-white bg-${card.color} h-100`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.value}</p>
                      </div>
                      <i className={`bi ${card.icon} fs-1`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mt-5 mb-3">Analytics</h4>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <h6>Revenue Over Months (Bar)</h6>
                <Bar data={barData} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <h6>Department Budget (Pie)</h6>
                <Pie data={pieData} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <h6>Site Traffic (Line)</h6>
                <Line data={lineData} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card p-3">
                <h6>Expense Categories (Doughnut)</h6>
                <Doughnut data={doughnutData} />
              </div>
            </div>
          </div>

          <h4 className="mt-5 mb-3">Employees</h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr><th>#</th><th>Name</th><th>Department</th><th>Position</th></tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td><td>{emp.name}</td><td>{emp.department}</td><td>{emp.position}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="mt-5 mb-3">Projects</h4>
          <table className="table table-striped">
            <thead className="table-info">
              <tr><th>#</th><th>Project Name</th><th>Status</th></tr>
            </thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td><td>{p.name}</td><td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="mt-5 mb-3">Departments</h4>
          <table className="table table-striped">
            <thead className="table-secondary">
              <tr><th>#</th><th>Department</th><th>Budget</th></tr>
            </thead>
            <tbody>
              {departments.map(dep => (
                <tr key={dep.id}>
                  <td>{dep.id}</td><td>{dep.name}</td><td>{dep.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column: Sidebar */}
        <div className="col-lg-3">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img src={profile.image} alt="Profile" className="rounded-circle mb-2" width="80" />
              <h5 className="card-title mb-0">{profile.name}</h5>
              <small className="text-muted">{profile.position}</small>
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-primary text-white">
              Recent Messages
            </div>
            <ul className="list-group list-group-flush">
              {recentMessages.map((msg, i) => (
                <li className="list-group-item" key={i}>
                  <strong>{msg.from}</strong><br />
                  <small>{msg.message}</small><br />
                  <span className="text-muted small">{msg.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
