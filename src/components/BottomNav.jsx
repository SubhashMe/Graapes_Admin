import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Users, Bell, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav glass-panel">
      <div className="nav-items">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} end>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <LayoutDashboard size={24} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <Users size={24} />
          <span>Users</span>
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <div className="position-relative">
            <Bell size={24} />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </div>
          <span>Alerts</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <User size={24} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
