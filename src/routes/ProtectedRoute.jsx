import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;
