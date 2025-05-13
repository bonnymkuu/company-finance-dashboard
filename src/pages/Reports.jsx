import React from 'react';
import jsPDF from 'jspdf';

const Reports = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Monthly Financial Report - May 2025', 20, 20);

    doc.setFontSize(12);
    doc.text('Summary:', 20, 35);
    doc.text('- Total Revenue: $125,000', 30, 45);
    doc.text('- Total Expenses: $85,000', 30, 55);
    doc.text('- Net Profit: $40,000', 30, 65);

    doc.text('Detailed Notes:', 20, 85);
    doc.text('- Salaries paid: $30,000', 30, 95);
    doc.text('- Marketing campaigns: $2,500', 30, 105);
    doc.text('- Utilities: $1,200', 30, 115);
    doc.text('- Remaining balance used for equipment upgrades.', 30, 125);

    doc.save('Monthly_Financial_Report_May_2025.pdf');
  };

  return (
<div className="container mt-4 main-content">
<h2 className="mb-4">Reports & Downloads</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Monthly Financial Report</h5>
          <p className="card-text">Summary of income, expenses, and profits for May 2025.</p>
          <button className="btn btn-primary" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Expense Breakdown</h5>
          <p className="card-text">Detailed expense categorization by department and function.</p>
          <button className="btn btn-secondary" disabled>
            Coming Soon
          </button>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <strong>Note:</strong> Upload and export features for your own reports will be added later.
      </div>
    </div>
  );
};

export default Reports;
