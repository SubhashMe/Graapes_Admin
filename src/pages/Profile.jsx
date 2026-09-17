import React, { useState } from 'react';
import { User, Mail, Shield, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, send API request here
  };

  return (
    <div className="container-fluid p-0 max-w-4xl mx-auto">
      <div className="mb-4">
        <h3 className="fw-bold">My Profile</h3>
        <p className="text-muted">Manage your account information and preferences.</p>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel text-center p-4">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold mx-auto mb-3" style={{ width: '100px', height: '100px', fontSize: '2rem' }}>
              {user?.username?.charAt(0) || 'A'}
            </div>
            <h5 className="fw-bold mb-1">{user?.username}</h5>
            <p className="text-muted small mb-3">{user?.role}</p>
            <div className="d-flex align-items-center justify-content-center gap-2 text-success small fw-medium bg-success bg-opacity-10 py-1 px-3 rounded-pill mx-auto mb-3" style={{ width: 'fit-content' }}>
              <CheckCircle size={14} /> Active Account
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold m-0">Personal Information</h5>
              {!isEditing && (
                <button className="btn btn-outline-primary btn-sm rounded-pill px-3" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-medium">Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted small fw-medium">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setIsEditing(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary rounded-pill px-4">Save Changes</button>
                </div>
              </form>
            ) : (
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded bg-light text-muted"><User size={18} /></div>
                  <div>
                    <p className="text-muted small mb-0">Username</p>
                    <p className="fw-medium mb-0">{user?.username}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded bg-light text-muted"><Mail size={18} /></div>
                  <div>
                    <p className="text-muted small mb-0">Email Address</p>
                    <p className="fw-medium mb-0">{user?.email}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded bg-light text-muted"><Shield size={18} /></div>
                  <div>
                    <p className="text-muted small mb-0">Role</p>
                    <p className="fw-medium mb-0">{user?.role}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded bg-light text-muted"><Clock size={18} /></div>
                  <div>
                    <p className="text-muted small mb-0">Member Since</p>
                    <p className="fw-medium mb-0">Sep 17, 2026</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
