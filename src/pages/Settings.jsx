import React from 'react';
import { Bell, Shield, Smartphone, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="container-fluid p-0 max-w-4xl mx-auto">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Settings</h3>
        <p className="text-muted mb-0">Manage your app preferences and configurations.</p>
      </div>

      <div className="row g-4">

        {/* Notifications Settings */}
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4">
            <div className="d-flex align-items-center gap-3 mb-4 border-bottom pb-3">
              <div className="p-2 bg-primary bg-opacity-10 text-primary rounded"><Bell size={20} /></div>
              <h5 className="fw-bold m-0">Notifications</h5>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">Push Notifications</p>
                  <p className="text-muted small mb-0">Receive alerts on your device.</p>
                </div>
                <div className="form-check form-switch fs-4 m-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">Email Summaries</p>
                  <p className="text-muted small mb-0">Weekly activity reports sent to your email.</p>
                </div>
                <div className="form-check form-switch fs-4 m-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="col-12">
          <div className="card border-0 shadow-sm glass-panel p-4">
            <div className="d-flex align-items-center gap-3 mb-4 border-bottom pb-3">
              <div className="p-2 bg-primary bg-opacity-10 text-primary rounded"><Shield size={20} /></div>
              <h5 className="fw-bold m-0">Privacy & Security</h5>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-medium mb-1">Profile Visibility</p>
                  <p className="text-muted small mb-0">Make your profile visible to other team members.</p>
                </div>
                <div className="form-check form-switch fs-4 m-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
