import React from 'react';
import { Download, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000, users: 240 },
  { name: 'Tue', revenue: 3000, users: 139 },
  { name: 'Wed', revenue: 2000, users: 980 },
  { name: 'Thu', revenue: 2780, users: 390 },
  { name: 'Fri', revenue: 1890, users: 480 },
  { name: 'Sat', revenue: 2390, users: 380 },
  { name: 'Sun', revenue: 3490, users: 430 },
];

const Reports = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Reports & Analytics</h3>
          <p className="text-muted mb-0">Detailed insights into your platform's performance.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary d-flex align-items-center gap-2 rounded-pill px-3 bg-white">
            <Calendar size={18} /> Last 7 Days
          </button>
          <button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-3">
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4 h-100">
            <h5 className="fw-bold mb-4">Weekly Revenue vs Users</h5>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--graapes-border)" />
                  <XAxis dataKey="name" stroke="var(--graapes-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" orientation="left" stroke="var(--graapes-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="var(--graapes-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--graapes-surface)', border: 'none', borderRadius: '8px', boxShadow: 'var(--graapes-shadow)' }}
                    itemStyle={{ color: 'var(--graapes-text)' }}
                    cursor={{ fill: 'rgba(124, 58, 237, 0.05)' }}
                  />
                  <Bar yAxisId="left" dataKey="revenue" fill="var(--graapes-primary)" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="users" fill="var(--graapes-accent)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4 h-100">
            <h5 className="fw-bold mb-4">Quick Stats</h5>
            <div className="d-flex flex-column gap-4">
              <div>
                <p className="text-muted small mb-1">Average Daily Revenue</p>
                <h3 className="fw-bold mb-0">$2,850</h3>
                <small className="text-success fw-medium d-flex align-items-center gap-1 mt-1"><TrendingUp size={14} /> +12.5%</small>
              </div>
              <hr className="my-1 border-secondary opacity-25" />
              <div>
                <p className="text-muted small mb-1">Average Daily Active Users</p>
                <h3 className="fw-bold mb-0">434</h3>
                <small className="text-success fw-medium d-flex align-items-center gap-1 mt-1"><TrendingUp size={14} /> +5.2%</small>
              </div>
              <hr className="my-1 border-secondary opacity-25" />
              <div>
                <p className="text-muted small mb-1">Conversion Rate</p>
                <h3 className="fw-bold mb-0">3.8%</h3>
                <small className="text-danger fw-medium d-flex align-items-center gap-1 mt-1"><TrendingUp size={14} className="transform-flip-y" style={{transform: 'scaleY(-1)'}}/> -1.1%</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
