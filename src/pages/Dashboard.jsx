import React from 'react';
import { Users, CreditCard, Activity, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import StatCard from '../components/StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
  { name: 'Jul', users: 3490, revenue: 4300 },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold">Welcome back, {user?.username} 👋</h3>
        <p className="text-muted">Here’s an overview of your Graapes activity.</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12">
          <StatCard title="Total Users" value="12,345" percentage={12.5} trend="up" icon={Users} color="primary" />
        </div>
        <div className="col-12">
          <StatCard title="Active Users" value="8,234" percentage={5.2} trend="up" icon={Activity} color="success" />
        </div>
        <div className="col-12">
          <StatCard title="Total Revenue" value="$45,678" percentage={2.4} trend="down" icon={CreditCard} color="warning" />
        </div>
        <div className="col-12">
          <StatCard title="Growth" value="+24%" percentage={8.1} trend="up" icon={TrendingUp} color="info" />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4">
            <h5 className="fw-bold mb-4">Performance Overview</h5>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--graapes-primary)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="var(--graapes-primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--graapes-border)" />
                  <XAxis dataKey="name" stroke="var(--graapes-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--graapes-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--graapes-surface)', border: 'none', borderRadius: '8px', boxShadow: 'var(--graapes-shadow)' }}
                    itemStyle={{ color: 'var(--graapes-text)' }}
                  />
                  <Area type="monotone" dataKey="users" stroke="var(--graapes-primary)" fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4 h-100">
            <h5 className="fw-bold mb-4">Recent Activity</h5>
            <div className="d-flex flex-column gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="d-flex align-items-center gap-3 p-2 rounded hover-bg">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-2">
                    <Activity size={16} />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium" style={{ fontSize: '0.875rem' }}>New user registered</p>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
