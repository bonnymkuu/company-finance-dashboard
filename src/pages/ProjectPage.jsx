import React, { useState } from 'react';

const initialProjects = [
  { id: 1, name: 'Project Alpha', description: 'Initial phase of product development', startDate: '2024-01-10', endDate: '2024-03-15', status: 'Active' },
  { id: 2, name: 'Project Beta', description: 'Market research and analysis', startDate: '2024-02-01', endDate: '2024-04-30', status: 'Completed' },
  { id: 3, name: 'Project Gamma', description: 'UI/UX redesign', startDate: '2024-03-10', endDate: '2024-06-10', status: 'Active' },
  { id: 4, name: 'Project Delta', description: 'Backend API development', startDate: '2024-01-15', endDate: '2024-05-20', status: 'Active' },
  { id: 5, name: 'Project Epsilon', description: 'Mobile app launch', startDate: '2024-04-01', endDate: '2024-07-01', status: 'Planned' },
  { id: 6, name: 'Project Zeta', description: 'Cloud infrastructure setup', startDate: '2024-05-10', endDate: '2024-08-15', status: 'Planned' },
  { id: 7, name: 'Project Eta', description: 'Performance optimization', startDate: '2024-06-01', endDate: '2024-09-01', status: 'Planned' },
  { id: 8, name: 'Project Theta', description: 'Security audit', startDate: '2024-07-15', endDate: '2024-10-15', status: 'Planned' },
  { id: 9, name: 'Project Iota', description: 'User feedback integration', startDate: '2024-08-01', endDate: '2024-11-30', status: 'Planned' },
  { id: 10, name: 'Project Kappa', description: 'Final release preparation', startDate: '2024-09-10', endDate: '2024-12-20', status: 'Planned' },
];

const ProjectPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Planned',
  });

  const openAddModal = () => {
    setEditingProject(null);
    setFormData({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      status: 'Planned',
    });
    setShowModal(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      status: project.status,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveProject = () => {
    if (!formData.name.trim()) {
      alert('Project name is required.');
      return;
    }
    if (editingProject) {
      // Edit existing project
      setProjects(prev =>
        prev.map(proj => (proj.id === editingProject.id ? { ...editingProject, ...formData } : proj))
      );
    } else {
      // Add new project
      const newProject = {
        id: Date.now(),
        ...formData,
      };
      setProjects(prev => [...prev, newProject]);
    }
    setShowModal(false);
  };

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(proj => proj.id !== id));
    }
  };

  return (
    <div className="container my-4">
      <h1>Project Management</h1>
      <button className="btn btn-primary my-3" onClick={openAddModal}>+ Add New Project</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(proj => (
            <tr key={proj.id}>
              <td>{proj.name}</td>
              <td>{proj.description}</td>
              <td>{proj.startDate}</td>
              <td>{proj.endDate}</td>
              <td>{proj.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => openEditModal(proj)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProject(proj.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingProject ? 'Edit Project' : 'Add New Project'}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Planned">Planned</option>
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                      <option value="On Hold">On Hold</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={saveProject}>
                  {editingProject ? 'Save Changes' : 'Add Project'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
