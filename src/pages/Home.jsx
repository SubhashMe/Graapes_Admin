import React from 'react';
import { Link } from 'react-router-dom';
import { Grape, ArrowRight, ShieldCheck, Zap, BarChart3, Smartphone, Layout, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--graapes-bg)' }}>
      {/* Header */}
      <header className="py-3 px-4 d-flex justify-content-between align-items-center glass-panel sticky-top border-top-0 border-start-0 border-end-0 rounded-0">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-primary text-white p-2 rounded d-flex align-items-center justify-content-center">
            <Grape size={24} />
          </div>
          <h4 className="m-0 fw-bold" style={{ color: 'var(--graapes-primary)' }}>Graapes</h4>
        </div>
        <div className="d-flex gap-2">
          <Link to="/login" className="btn btn-primary px-4 rounded-pill">Get Started</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container text-center">
          <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-4 fw-medium">
            ✨ Built by humans, for humans
          </div>
          <h1 className="display-3 fw-bold mb-4" style={{ letterSpacing: '-1px', color: 'var(--graapes-text)' }}>
            Tools that feel right. — <br />
            <span style={{ color: 'var(--graapes-primary)' }}>Not just another dashboard.</span>
          </h1>
          <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
            We got tired of clunky, lifeless software. So we built Graapes. Manage your team, track your data, and actually enjoy the process with a handcrafted, mobile-first design.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <Link to="/login" className="btn btn-primary btn-lg rounded-pill px-5 d-flex align-items-center justify-content-center gap-2">
              Start for free <ArrowRight size={20} />
            </Link>
            <a href="#features" className="btn btn-light btn-lg rounded-pill px-5 border shadow-sm">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5" style={{ backgroundColor: 'var(--graapes-surface)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Everything you need to scale</h2>
            <p className="text-muted">Powerful features wrapped in an intuitive, beautiful interface.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: Layout, title: 'Smart Dashboard', desc: 'Get a bird\'s-eye view of your business with customizable widgets and real-time data.' },
              { icon: ShieldCheck, title: 'Secure Authentication', desc: 'Enterprise-grade security ensuring your data and users are always protected.' },
              { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Make informed decisions with powerful charting and reporting tools.' },
              { icon: Users, title: 'User Management', desc: 'Easily manage roles, permissions, and profiles in a centralized hub.' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance ensuring zero lag and seamless transitions.' },
              { icon: Smartphone, title: 'Mobile Optimized', desc: 'A flawless experience across all devices, prioritizing mobile workflows.' },
            ].map((f, i) => (
              <div key={i} className="col-12">
                <div className="card h-100 p-4 border-0 shadow-sm glass-panel text-center align-items-center">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle mb-3">
                    <f.icon size={28} />
                  </div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-muted small mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="row g-4 text-center">
            <div className="col-6">
              <h2 className="fw-bold display-5 mb-1">10k+</h2>
              <p className="opacity-75 mb-0">Active Users</p>
            </div>
            <div className="col-6">
              <h2 className="fw-bold display-5 mb-1">50M</h2>
              <p className="opacity-75 mb-0">Total Activity</p>
            </div>
            <div className="col-6">
              <h2 className="fw-bold display-5 mb-1">99.9%</h2>
              <p className="opacity-75 mb-0">Success Rate</p>
            </div>
            <div className="col-6">
              <h2 className="fw-bold display-5 mb-1">&lt;1s</h2>
              <p className="opacity-75 mb-0">Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top" style={{ backgroundColor: 'var(--graapes-surface)' }}>
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <div className="bg-primary text-white p-1 rounded">
              <Grape size={20} />
            </div>
            <span className="fw-bold" style={{ color: 'var(--graapes-primary)' }}>Graapes</span>
          </div>
          <p className="text-muted small mb-0">© 2026 Graapes Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
