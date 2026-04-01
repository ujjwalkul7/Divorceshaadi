import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.identifier || !form.password) {
      setError('Please fill all fields.');
      return;
    }
    navigate('/matches');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <Link to="/" className="auth-logo">
            <span>shaadi</span><span className="dot">.com</span>
          </Link>
          <h2>Welcome Back!</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 28 }}>
            Login to access your matches, messages, and more.
          </p>
          <ul className="auth-benefits">
            <li>✓ View New Matches Daily</li>
            <li>✓ Chat with Interests</li>
            <li>✓ Share Horoscopes</li>
            <li>✓ Manage Your Profile</li>
          </ul>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Login to Shaadi.com</h2>
          <p className="auth-subtitle">Enter your credentials to continue</p>

          {error && <div className="error-banner">{error}</div>}

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-field">
              <label>Email / Mobile / Profile ID</label>
              <input
                type="text"
                placeholder="Enter email, mobile or profile ID"
                value={form.identifier}
                onChange={e => setForm(p => ({ ...p, identifier: e.target.value }))}
              />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              />
            </div>
            <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: 15 }}>
              Login
            </button>
          </form>

          <div className="divider">or login with</div>
          <div className="social-login">
            <button className="social-btn">🌐 Google</button>
            <button className="social-btn">📘 Facebook</button>
          </div>

          <p className="auth-switch">
            New to Shaadi.com? <Link to="/register">Register Free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
