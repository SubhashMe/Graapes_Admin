import React, { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Alice Cooper', email: 'alice@example.com', role: 'Admin', status: 'Active', date: '2026-08-10' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', date: '2026-08-12' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive', date: '2026-08-15' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active', date: '2026-08-20' },
  { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'Viewer', status: 'Active', date: '2026-09-01' },
];

const Users = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
      alert('User deleted successfully (mock).');
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <div>
          <h3 className="fw-bold mb-1">User Management</h3>
          <p className="text-muted mb-0">Manage your team members and their roles.</p>
        </div>
        <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2 rounded-pill px-4">
          <Plus size={18} /> Add User
        </button>
      </div>

      <div className="card border-0 shadow-sm glass-panel p-4">
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="position-relative flex-grow-1" style={{ maxWidth: '400px' }}>
            <Search size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input 
              type="text" 
              className="form-control ps-5 rounded-pill" 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 border shadow-sm">
            <Filter size={18} /> Filter
          </button>
        </div>

        {/* Mobile Cards */}
        <div className="d-flex flex-column gap-3">
          {filteredUsers.map(user => (
            <div key={user.id} className="border rounded p-3 bg-white">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{user.name}</h6>
                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-light p-1 border-0"><MoreVertical size={18} /></button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <span className="badge bg-light text-dark border">{user.role}</span>
                  <span className={`badge bg-${user.status === 'Active' ? 'success' : 'secondary'} bg-opacity-10 text-${user.status === 'Active' ? 'success' : 'secondary'} rounded-pill`}>
                    {user.status}
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-light p-2 rounded"><Edit2 size={16} className="text-muted" /></button>
                  <button className="btn btn-sm btn-light p-2 rounded" onClick={() => handleDelete(user.id)}><Trash2 size={16} className="text-danger" /></button>
                </div>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="text-center py-4 text-muted">
              <p>No users found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
