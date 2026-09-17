import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Bell, FileText, Settings, LogOut, X, Grape } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`sidebar ${isOpen ? 'open' : ''} glass-panel border-0 border-end rounded-0 d-flex flex-column`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center p-4">
          <div className="brand d-flex align-items-center gap-2">
            <div className="brand-icon d-flex justify-content-center align-items-center bg-primary text-white rounded p-2">
              <Grape size={24} />
            </div>
            <h4 className="m-0 fw-bold" style={{ color: 'var(--graapes-primary)' }}>Graapes</h4>
          </div>
          <button className="btn btn-link text-body p-0" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-nav flex-grow-1 px-3 overflow-auto">
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => `nav-link sidebar-link ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className={({ isActive }) => `nav-link sidebar-link ${isActive ? 'active' : ''}`}>
                <Users size={20} />
                <span>Users</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/notifications" className={({ isActive }) => `nav-link sidebar-link ${isActive ? 'active' : ''}`}>
                <Bell size={20} />
                <span>Notifications</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reports" className={({ isActive }) => `nav-link sidebar-link ${isActive ? 'active' : ''}`}>
                <FileText size={20} />
                <span>Reports</span>
              </NavLink>
            </li>
            <li className="nav-item mt-4">
              <h6 className="sidebar-heading px-3 text-uppercase text-muted fw-bold" style={{ fontSize: '0.75rem' }}>Preferences</h6>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className={({ isActive }) => `nav-link sidebar-link ${isActive ? 'active' : ''}`}>
                <Settings size={20} />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer p-3 mt-auto">
          <button onClick={logout} className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
