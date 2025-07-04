import React, { useState } from 'react';

const SalesPage = () => {
  // Initial sales and campaigns data
  const [sales, setSales] = useState([
    { id: 1, customer: 'Acme Corp', product: 'Premium Subscription', amount: 1200, date: '2025-05-01', status: 'Completed' },
    { id: 2, customer: 'Beta LLC', product: 'Basic Plan', amount: 300, date: '2025-05-03', status: 'Pending' },
    { id: 3, customer: 'Gamma Inc', product: 'Enterprise Package', amount: 5500, date: '2025-05-07', status: 'Completed' },
  ]);
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Spring Sale', budget: 5000, roi: 1.5, status: 'Active' },
    { id: 2, name: 'New Product Launch', budget: 8000, roi: 0.9, status: 'Paused' },
  ]);

  // Modal state
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showCampaignModal, setShowCampaignModal] = useState(false);

  // Track if editing or creating, and which item is selected
  const [editingSale, setEditingSale] = useState(null);
  const [editingCampaign, setEditingCampaign] = useState(null);

  // Sale form state
  const [saleForm, setSaleForm] = useState({
    customer: '',
    product: '',
    amount: '',
    date: '',
    status: 'Pending',
  });

  // Campaign form state
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    budget: '',
    roi: '',
    status: 'Active',
  });

  // Summary calculations
  const totalSales = sales.reduce((sum, s) => sum + Number(s.amount), 0);
  const completedSales = sales.filter(s => s.status === 'Completed').length;
  const conversionRate = sales.length ? ((completedSales / sales.length) * 100).toFixed(2) : 0;
  const totalLeads = 100; // Placeholder

  // --- Handlers for Sale Modal ---

  const openNewSaleModal = () => {
    setSaleForm({ customer: '', product: '', amount: '', date: '', status: 'Pending' });
    setEditingSale(null);
    setShowSaleModal(true);
  };

  const openEditSaleModal = (sale) => {
    setSaleForm({ ...sale });
    setEditingSale(sale.id);
    setShowSaleModal(true);
  };

  const handleSaleChange = e => {
    const { name, value } = e.target;
    setSaleForm(prev => ({ ...prev, [name]: value }));
  };

  const saveSale = () => {
    // Basic validation
    if (!saleForm.customer || !saleForm.product || !saleForm.amount || !saleForm.date) {
      alert('Please fill all required fields for sale.');
      return;
    }

    if (editingSale) {
      // Update existing sale
      setSales(prev => prev.map(s => (s.id === editingSale ? { ...saleForm, amount: Number(saleForm.amount), id: editingSale } : s)));
    } else {
      // Add new sale
      const newSale = {
        ...saleForm,
        id: Date.now(),
        amount: Number(saleForm.amount),
      };
      setSales(prev => [...prev, newSale]);
    }
    setShowSaleModal(false);
  };

  const deleteSale = (id) => {
    if (window.confirm('Are you sure you want to delete this sale?')) {
      setSales(prev => prev.filter(s => s.id !== id));
      if (editingSale === id) setShowSaleModal(false);
    }
  };

  // --- Handlers for Campaign Modal ---

  const openNewCampaignModal = () => {
    setCampaignForm({ name: '', budget: '', roi: '', status: 'Active' });
    setEditingCampaign(null);
    setShowCampaignModal(true);
  };

  const openEditCampaignModal = (camp) => {
    setCampaignForm({ ...camp, budget: String(camp.budget), roi: String(camp.roi) });
    setEditingCampaign(camp.id);
    setShowCampaignModal(true);
  };

  const handleCampaignChange = e => {
    const { name, value } = e.target;
    setCampaignForm(prev => ({ ...prev, [name]: value }));
  };

  const saveCampaign = () => {
    if (!campaignForm.name || !campaignForm.budget || !campaignForm.roi) {
      alert('Please fill all required fields for campaign.');
      return;
    }

    if (editingCampaign) {
      setCampaigns(prev => prev.map(c => (c.id === editingCampaign ? { ...campaignForm, budget: Number(campaignForm.budget), roi: Number(campaignForm.roi), id: editingCampaign } : c)));
    } else {
      const newCamp = {
        ...campaignForm,
        id: Date.now(),
        budget: Number(campaignForm.budget),
        roi: Number(campaignForm.roi),
      };
      setCampaigns(prev => [...prev, newCamp]);
    }
    setShowCampaignModal(false);
  };

  const deleteCampaign = (id) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      setCampaigns(prev => prev.filter(c => c.id !== id));
      if (editingCampaign === id) setShowCampaignModal(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>📈 Sales and Marketing Dashboard</h1>

      {/* Summary cards */}
      <div className="row my-4">
        <div className="col-md-3 mb-3">
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text fs-3">${totalSales.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">Completed Sales</h5>
              <p className="card-text fs-3">{completedSales}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Leads Generated</h5>
              <p className="card-text fs-3">{totalLeads}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-white bg-info h-100">
            <div className="card-body">
              <h5 className="card-title">Conversion Rate</h5>
              <p className="card-text fs-3">{conversionRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Recent Sales</h3>
        <button className="btn btn-primary" onClick={openNewSaleModal}>+ Add Sale</button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, idx) => (
            <tr key={sale.id}>
              <td>{idx + 1}</td>
              <td>{sale.customer}</td>
              <td>{sale.product}</td>
              <td>${sale.amount.toLocaleString()}</td>
              <td>{sale.date}</td>
              <td>
                <span className={`badge bg-${sale.status === 'Completed' ? 'success' : sale.status === 'Pending' ? 'warning' : 'secondary'}`}>
                  {sale.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-info me-2" onClick={() => openEditSaleModal(sale)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteSale(sale.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Marketing Campaigns Section */}
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <h3>Marketing Campaigns</h3>
        <button className="btn btn-primary" onClick={openNewCampaignModal}>+ Add Campaign</button>
      </div>

      <table className="table table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>Campaign Name</th>
            <th>Budget</th>
            <th>ROI</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(camp => (
            <tr key={camp.id}>
              <td>{camp.name}</td>
              <td>${camp.budget.toLocaleString()}</td>
              <td>{camp.roi}</td>
              <td>
                <span className={`badge bg-${camp.status === 'Active' ? 'primary' : 'secondary'}`}>
                  {camp.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-info me-2" onClick={() => openEditCampaignModal(camp)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteCampaign(camp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sale Modal */}
      {showSaleModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingSale ? 'Edit Sale' : 'Add New Sale'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowSaleModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Customer</label>
                    <input
                      type="text"
                      name="customer"
                      className="form-control"
                      value={saleForm.customer}
                      onChange={handleSaleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product</label>
                    <input
                      type="text"
                      name="product"
                      className="form-control"
                      value={saleForm.product}
                      onChange={handleSaleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      className="form-control"
                      value={saleForm.amount}
                      onChange={handleSaleChange}
                      min="0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={saleForm.date}
                      onChange={handleSaleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={saleForm.status}
                      onChange={handleSaleChange}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowSaleModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={saveSale}>{editingSale ? 'Save Changes' : 'Add Sale'}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Campaign Modal */}
      {showCampaignModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingCampaign ? 'Edit Campaign' : 'Add New Campaign'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowCampaignModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Campaign Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={campaignForm.name}
                      onChange={handleCampaignChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Budget ($)</label>
                    <input
                      type="number"
                      name="budget"
                      className="form-control"
                      value={campaignForm.budget}
                      onChange={handleCampaignChange}
                      min="0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ROI</label>
                    <input
                      type="number"
                      step="0.01"
                      name="roi"
                      className="form-control"
                      value={campaignForm.roi}
                      onChange={handleCampaignChange}
                      min="0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={campaignForm.status}
                      onChange={handleCampaignChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Paused">Paused</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowCampaignModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={saveCampaign}>{editingCampaign ? 'Save Changes' : 'Add Campaign'}</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default SalesPage;
