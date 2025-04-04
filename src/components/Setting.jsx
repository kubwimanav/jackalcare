import "../styles/Setting.css";

export default function SettingsPage() {
  return (
    <div className="settings-container">
      {/* Profile Card */}
      <div className="profile-card">
        <img src="/placeholder-profile.jpg" alt="Profile" className="avatar" />
        <div className="profile-content">
          <h2>John Doe</h2>
          <p className="text-muted">Welcome to your settings</p>
          <div className="button-group">
            <button className="outline-button">Verify</button>
            <button className="primary-button">Go Premium</button>
          </div>
        </div>
      </div>

      {/* Personal Information Card */}
      <div className="info-card">
        <h3>Personal Information</h3>
        <label>Name</label>
        <input type="text" placeholder="John Doe" className="input-field" />
        <label>Email</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="input-field"
        />
        <label>Phone</label>
        <input type="tel" placeholder="+1234567890" className="input-field" />
      </div>

      {/* Security Settings Card */}
      <div className="security-card">
        <h3>Security Settings</h3>
        <label>Password</label>
        <input type="password" placeholder="********" className="input-field" />
        <label>Two-Factor Authentication</label>
        <input type="checkbox" className="switch" />
      </div>

      {/* Notification Preferences Card */}
      <div className="notification-card">
        <h3>Notification Preferences</h3>
        <div className="notification-item">
          <span>Email Notifications</span>
          <input type="checkbox" className="switch" />
        </div>
        <div className="notification-item">
          <span>SMS Notifications</span>
          <input type="checkbox" className="switch" />
        </div>
        <div className="notification-item">
          <span>Marketing Communication</span>
          <input type="checkbox" className="switch" />
        </div>
      </div>
    </div>
  );
}
