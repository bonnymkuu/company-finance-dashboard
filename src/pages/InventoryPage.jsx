import React, { useState, useEffect } from 'react';

const initialInventory = [
  {
    id: 1,
    name: 'Laptop Model A',
    sku: 'LAP-A-001',
    quantity: 15,
    costPrice: 700,
    sellingPrice: 900,
    category: 'Electronics',
    supplier: 'Tech Supplies Inc.',
    reorderLevel: 5,
    warehouse: 'Main Warehouse',
    description: '15-inch display, 8GB RAM, 256GB SSD',
    imageUrl: '',
    stockHistory: [
      { date: '2025-04-01', type: 'added', quantity: 15, note: 'Initial stock' },
    ],
  },
  {
    id: 2,
    name: 'Office Chair Model X',
    sku: 'CHAIR-X-002',
    quantity: 8,
    costPrice: 50,
    sellingPrice: 85,
    category: 'Furniture',
    supplier: 'Office Furnishings Ltd.',
    reorderLevel: 3,
    warehouse: 'Warehouse B',
    description: 'Ergonomic swivel chair, black color',
    imageUrl: '',
    stockHistory: [
      { date: '2025-03-15', type: 'added', quantity: 10, note: 'Initial stock' },
      { date: '2025-04-10', type: 'sold', quantity: 2, note: 'Sold to client XYZ' },
    ],
  },
  // Add more initial items here as needed...
];

const categories = ['Electronics', 'Furniture', 'Office Supplies', 'Consumables', 'Clothing'];

const InventoryPage = () => {
  // Inventory state
  const [inventory, setInventory] = useState(initialInventory);

  // Search/filter/sort states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStockStatus, setFilterStockStatus] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  // Modal form state for Add/Edit
  const [modalOpen, setModalOpen] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    quantity: '',
    costPrice: '',
    sellingPrice: '',
    category: '',
    supplier: '',
    reorderLevel: '',
    warehouse: '',
    description: '',
    imageUrl: '',
  });

  // Stock alert state (items below reorder)
  const [stockAlerts, setStockAlerts] = useState([]);

  // Stock history view state
  const [historyViewId, setHistoryViewId] = useState(null);

  // Handle search/filter/sort logic
  const filteredInventory = inventory
    .filter(item => {
      // Search filter by name or sku
      const lowerSearch = searchTerm.toLowerCase();
      if (
        !item.name.toLowerCase().includes(lowerSearch) &&
        !item.sku.toLowerCase().includes(lowerSearch)
      ) return false;

      // Category filter
      if (filterCategory && item.category !== filterCategory) return false;

      // Stock status filter
      if (filterStockStatus === 'in-stock' && item.quantity <= 0) return false;
      if (filterStockStatus === 'out-of-stock' && item.quantity > 0) return false;

      return true;
    })
    .sort((a, b) => {
      if (!sortKey) return 0;
      let valA = a[sortKey];
      let valB = b[sortKey];

      // Handle string comparison case-insensitive
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return sortOrderAsc ? -1 : 1;
      if (valA > valB) return sortOrderAsc ? 1 : -1;
      return 0;
    });

  // Check stock alerts on inventory update
  useEffect(() => {
    const alerts = inventory.filter(item => item.quantity <= item.reorderLevel);
    setStockAlerts(alerts);
  }, [inventory]);

  // Handle form field changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Open modal for new item
  const openAddModal = () => {
    setEditItemId(null);
    setFormData({
      name: '',
      sku: '',
      quantity: '',
      costPrice: '',
      sellingPrice: '',
      category: '',
      supplier: '',
      reorderLevel: '',
      warehouse: '',
      description: '',
      imageUrl: '',
    });
    setModalOpen(true);
  };

  // Open modal for editing an item
  const openEditModal = item => {
    setEditItemId(item.id);
    setFormData({
      name: item.name,
      sku: item.sku,
      quantity: item.quantity,
      costPrice: item.costPrice,
      sellingPrice: item.sellingPrice,
      category: item.category,
      supplier: item.supplier,
      reorderLevel: item.reorderLevel,
      warehouse: item.warehouse,
      description: item.description,
      imageUrl: item.imageUrl,
    });
    setModalOpen(true);
  };

  // Add or update inventory item
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: editItemId ?? Date.now(),
      name: formData.name,
      sku: formData.sku,
      quantity: Number(formData.quantity),
      costPrice: Number(formData.costPrice),
      sellingPrice: Number(formData.sellingPrice),
      category: formData.category,
      supplier: formData.supplier,
      reorderLevel: Number(formData.reorderLevel),
      warehouse: formData.warehouse,
      description: formData.description,
      imageUrl: formData.imageUrl,
      stockHistory: editItemId
        ? inventory.find(i => i.id === editItemId).stockHistory
        : [],
    };

    if (editItemId) {
      // Update existing
      setInventory(prev =>
        prev.map(item => (item.id === editItemId ? newItem : item))
      );
    } else {
      // Add new
      setInventory(prev => [...prev, newItem]);
    }
    setModalOpen(false);
  };

  // Delete item with confirmation
  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setInventory(prev => prev.filter(item => item.id !== id));
      if (historyViewId === id) setHistoryViewId(null);
    }
  };

  // Add stock movement to item’s history (simplified for demo)
  const addStockMovement = (id, type, qty, note) => {
    setInventory(prev =>
      prev.map(item => {
        if (item.id === id) {
          const updatedQuantity = type === 'added' ? item.quantity + qty : item.quantity - qty;
          const newHistory = [
            ...item.stockHistory,
            { date: new Date().toISOString().slice(0, 10), type, quantity: qty, note },
          ];
          return { ...item, quantity: updatedQuantity, stockHistory: newHistory };
        }
        return item;
      })
    );
  };

  // Reset form modal state
  const closeModal = () => {
    setModalOpen(false);
    setEditItemId(null);
  };

  return (
    <div className="container my-4">
      <h1>Inventory Management</h1>

      {/* Stock alerts */}
      {stockAlerts.length > 0 && (
        <div className="alert alert-warning">
          <strong>Stock Alert:</strong> The following items are below reorder level:
          <ul>
            {stockAlerts.map(item => (
              <li key={item.id}>
                {item.name} (Qty: {item.quantity}, Reorder Level: {item.reorderLevel})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Controls */}
      <div className="d-flex flex-wrap gap-3 align-items-center mb-3">
        <button className="btn btn-primary" onClick={openAddModal}>
          + Add New Item
        </button>

        <input
          type="text"
          placeholder="Search by name or SKU"
          className="form-control"
          style={{ maxWidth: 300 }}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="form-select"
          value={filterStockStatus}
          onChange={e => setFilterStockStatus(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">All Stock Status</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <select
          className="form-select"
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="costPrice">Cost Price</option>
          <option value="sellingPrice">Selling Price</option>
          <option value="category">Category</option>
        </select>

        <button
          className="btn btn-outline-secondary"
          onClick={() => setSortOrderAsc(prev => !prev)}
          title="Toggle Sort Order"
        >
          {sortOrderAsc ? 'Asc' : 'Desc'}
        </button>
      </div>

      {/* Inventory Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Supplier</th>
            <th>Warehouse</th>
            <th>Reorder Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length === 0 && (
            <tr>
              <td colSpan="10" className="text-center">
                No items found.
              </td>
            </tr>
          )}
          {filteredInventory.map(item => (
            <tr
              key={item.id}
              className={item.quantity <= item.reorderLevel ? 'table-warning' : ''}
            >
              <td>{item.sku}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>${item.costPrice.toFixed(2)}</td>
              <td>${item.sellingPrice.toFixed(2)}</td>
              <td>{item.supplier}</td>
              <td>{item.warehouse}</td>
              <td>{item.reorderLevel}</td>
              <td>
                <button
                  className="btn btn-sm btn-info me-1"
                  onClick={() => openEditModal(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger me-1"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() =>
                    setHistoryViewId(historyViewId === item.id ? null : item.id)
                  }
                >
                  {historyViewId === item.id ? 'Hide History' : 'View History'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Stock History */}
      {historyViewId && (
        <div className="card my-4">
          <div className="card-header">
            Stock Movement History for{' '}
            {inventory.find(i => i.id === historyViewId)?.name || ''}
          </div>
          <ul className="list-group list-group-flush">
            {inventory
              .find(i => i.id === historyViewId)
              ?.stockHistory.map((h, idx) => (
                <li key={idx} className="list-group-item">
                  <strong>{h.date}</strong>: {h.type} {h.quantity} units - {h.note}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-lg"
            role="document"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editItemId ? 'Edit Item' : 'Add New Item'}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">SKU</label>
                      <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="form-control"
                        min="0"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Cost Price ($)</label>
                      <input
                        type="number"
                        name="costPrice"
                        value={formData.costPrice}
                        onChange={handleChange}
                        className="form-control"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Selling Price ($)</label>
                      <input
                        type="number"
                        name="sellingPrice"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                        className="form-control"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Supplier</label>
                      <input
                        type="text"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Reorder Level</label>
                      <input
                        type="number"
                        name="reorderLevel"
                        value={formData.reorderLevel}
                        onChange={handleChange}
                        className="form-control"
                        min="0"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Warehouse</label>
                      <input
                        type="text"
                        name="warehouse"
                        value={formData.warehouse}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    {editItemId ? 'Update Item' : 'Add Item'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for Bulk Import/Export and Reports */}
      <div className="my-5">
        <h3>Bulk Import / Export</h3>
        <p>Feature coming soon: Upload CSV/Excel files to bulk import inventory or export current inventory data.</p>

        <h3 className="mt-4">Reports</h3>
        <p>Feature coming soon: Generate reports on inventory value, sales, reorder needs, and supplier performance.</p>
      </div>
    </div>
  );
};

export default InventoryPage;
