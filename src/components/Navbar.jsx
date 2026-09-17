import React, { useState } from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="px-3 px-md-4 py-3 d-flex justify-content-between align-items-center bg-transparent">
      <div className="d-flex align-items-center gap-3">
        {/* Mobile menu toggle */}
        <button 
          className="btn btn-light p-2 border-0 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
          onClick={toggleSidebar}
        >
          <Menu size={20} />
        </button>

        {/* Desktop Search */}
        <div className="d-flex flex-grow-1 align-items-center bg-white rounded-pill px-3 py-2 shadow-sm border ms-2" style={{ backgroundColor: 'var(--graapes-surface)' }}>
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search Graapes..." 
            className="border-0 bg-transparent ms-2 flex-grow-1 text-body"
            style={{ outline: 'none' }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 gap-md-3">
        <button onClick={toggleTheme} className="btn btn-light rounded-circle p-2 border-0 shadow-sm d-flex align-items-center justify-content-center">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="btn btn-light rounded-circle p-2 border-0 shadow-sm d-none align-items-center justify-content-center position-relative">
          <Bell size={20} />
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </button>

        <div className="d-flex align-items-center gap-2 ms-1">
          <div className="d-none flex-column text-end">
            <span className="fw-bold" style={{ fontSize: '0.875rem' }}>{user?.username}</span>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>{user?.role}</span>
          </div>
          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '40px', height: '40px' }}>
            {user?.username?.charAt(0) || 'A'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
