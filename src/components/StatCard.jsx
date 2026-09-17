import React from 'react';

const StatCard = ({ title, value, percentage, trend, icon: Icon, color = 'primary' }) => {
  const isPositive = trend === 'up';
  
  return (
    <div className="card p-4 h-100 border-0 shadow-sm glass-panel">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h6 className="text-muted mb-1 fw-normal" style={{ fontSize: '0.875rem' }}>{title}</h6>
          <h3 className="mb-0 fw-bold">{value}</h3>
        </div>
        <div className={`p-2 rounded bg-${color} bg-opacity-10 text-${color}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="d-flex align-items-center mt-auto">
        <span className={`badge bg-${isPositive ? 'success' : 'danger'} bg-opacity-10 text-${isPositive ? 'success' : 'danger'} rounded-pill px-2 py-1`}>
          {isPositive ? '+' : '-'}{Math.abs(percentage)}%
        </span>
        <span className="text-muted ms-2" style={{ fontSize: '0.75rem' }}>vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
