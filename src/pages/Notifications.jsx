import React, { useState } from 'react';
import { Bell, CheckCircle, Info, AlertTriangle, Trash2, Check } from 'lucide-react';

const mockNotifications = [
  { id: 1, title: 'New User Registration', message: 'Evan Wright just joined the platform.', time: '2 mins ago', type: 'info', read: false },
  { id: 2, title: 'System Update', message: 'Graapes v2.0 update has been successfully deployed.', time: '1 hour ago', type: 'success', read: false },
  { id: 3, title: 'Payment Failed', message: 'Subscription renewal failed for user ID #342.', time: '3 hours ago', type: 'warning', read: true },
  { id: 4, title: 'Weekly Report Ready', message: 'Your weekly analytics report is ready to download.', time: '1 day ago', type: 'info', read: true },
];

const getIcon = (type) => {
  switch (type) {
    case 'success': return <CheckCircle className="text-success" size={20} />;
    case 'warning': return <AlertTriangle className="text-warning" size={20} />;
    default: return <Info className="text-primary" size={20} />;
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="container-fluid p-0 max-w-4xl mx-auto">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Notifications</h3>
          <p className="text-muted mb-0">Stay updated with the latest alerts and activities.</p>
        </div>
        <button className="btn btn-outline-primary d-flex align-items-center gap-2 rounded-pill px-4 bg-white" onClick={markAllAsRead}>
          <Check size={18} /> Mark all as read
        </button>
      </div>

      <div className="card border-0 shadow-sm glass-panel p-2 p-md-4">
        {notifications.length > 0 ? (
          <div className="list-group list-group-flush rounded border-0">
            {notifications.map((notif) => (
              <div key={notif.id} className={`list-group-item list-group-item-action d-flex gap-3 py-3 px-2 px-md-3 border-0 rounded mb-2 ${notif.read ? 'bg-transparent' : 'bg-primary bg-opacity-10'}`}>
                <div className="mt-1 flex-shrink-0">
                  {getIcon(notif.type)}
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <h6 className="mb-1 fw-bold">{notif.title}</h6>
                    <p className="mb-1 text-muted small">{notif.message}</p>
                    <small className="text-muted" style={{ fontSize: '0.7rem' }}>{notif.time}</small>
                  </div>
                  <div className="d-flex flex-column align-items-end justify-content-between">
                    {!notif.read && <span className="p-1 bg-primary border border-light rounded-circle mb-2"></span>}
                    <div className="d-flex gap-1">
                      {!notif.read && (
                        <button className="btn btn-sm btn-link p-1 text-primary" onClick={() => markAsRead(notif.id)}>
                          <Check size={16} />
                        </button>
                      )}
                      <button className="btn btn-sm btn-link p-1 text-danger" onClick={() => deleteNotification(notif.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5 text-muted">
            <Bell size={48} className="mb-3 opacity-50" />
            <h5>No new notifications</h5>
            <p>You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
