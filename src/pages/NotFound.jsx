import React from 'react';
import { Link } from 'react-router-dom';
import { Grape, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-4" style={{ backgroundColor: 'var(--graapes-bg)' }}>
      <div className="bg-primary bg-opacity-10 text-primary p-4 rounded-circle mb-4">
        <Grape size={48} />
      </div>
      <h1 className="display-1 fw-bold mb-2" style={{ color: 'var(--graapes-text)' }}>404</h1>
      <h3 className="fw-medium mb-4" style={{ color: 'var(--graapes-text-muted)' }}>Page Not Found</h3>
      <p className="text-muted mb-5 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2">
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
