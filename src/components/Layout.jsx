import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import '../styles/global.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/';

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="d-flex w-100 min-vh-100" style={{ backgroundColor: 'var(--graapes-bg)' }}>
      {/* Sidebar for Desktop */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-grow-1 p-3 p-md-4 mobile-safe-bottom">
          <Outlet />
        </main>
      </div>

      {/* Bottom Nav for Mobile */}
      <BottomNav />
    </div>
  );
};

export default Layout;
