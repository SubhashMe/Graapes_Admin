import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Protected Pages
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  return (
    <div className="mobile-app-wrapper">
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
