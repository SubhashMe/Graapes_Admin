import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grape, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const result = login(username, password, rememberMe);
      setIsLoading(false);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    }, 800); // Simulate network request
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4" style={{ backgroundColor: 'var(--graapes-bg)' }}>
      <div className="card glass-panel w-100 p-4 p-md-5" style={{ maxWidth: '450px' }}>
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded p-3 mb-3 shadow-sm">
            <Grape size={32} />
          </div>
          <h2 className="fw-bold" style={{ color: 'var(--graapes-primary)' }}>Graapes</h2>
          <p className="text-muted">Welcome back! Please login to your account.</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 d-flex align-items-center mb-4" role="alert">
            <small>{error}</small>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted fw-medium small">Username</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label text-muted fw-medium small mb-0">Password</label>
              <a href="#" className="small text-decoration-none" style={{ color: 'var(--graapes-primary)' }}>Forgot Password?</a>
            </div>
            <div className="position-relative mt-2">
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="form-control" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted p-0 px-3 text-decoration-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-4 form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="rememberMe" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label small text-muted" htmlFor="rememberMe">Remember Me</label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="text-muted">Don't have an account? <a href="#" className="fw-bold">Sign up</a></small>
        </div>
        
        {/* Demo hints */}
        <div className="mt-4 p-3 bg-light rounded border text-center" style={{ backgroundColor: 'var(--graapes-bg)' }}>
          <small className="text-muted d-block mb-1">Demo Credentials</small>
          <small className="fw-bold d-block">Username: Admin</small>
          <small className="fw-bold d-block">Password: admin@123</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
