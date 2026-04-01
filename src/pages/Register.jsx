import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const STEPS = ['Profile For', 'Basic Details', 'Contact Info'];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    profileFor: 'Myself',
    gender: 'Female',
    name: '',
    dob: '',
    religion: 'Hindu',
    caste: '',
    motherTongue: 'Hindi',
    email: '',
    phone: '',
    password: '',
    city: '',
    state: '',
  });

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else navigate('/matches');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <Link to="/" className="auth-logo">
            <span>shaadi</span><span className="dot">.com</span>
          </Link>
          <h2>India's Most Trusted<br />Matrimonial Service</h2>
          <ul className="auth-benefits">
            <li>✓ 35 Million+ Profiles</li>
            <li>✓ Verified Members</li>
            <li>✓ 4M+ Success Stories</li>
            <li>✓ Privacy Protected</li>
          </ul>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Register Free</h2>
          <p className="auth-subtitle">Create your profile in 3 simple steps</p>

          {/* Stepper */}
          <div className="stepper">
            {STEPS.map((s, i) => (
              <div key={s} className={`step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                <div className="step-circle">{i < step ? '✓' : i + 1}</div>
                <span>{s}</span>
                {i < STEPS.length - 1 && <div className={`step-line ${i < step ? 'done' : ''}`}></div>}
              </div>
            ))}
          </div>

          {/* Step 0 */}
          {step === 0 && (
            <div className="form-step">
              <div className="form-field">
                <label>Profile created for</label>
                <div className="radio-grid">
                  {['Myself','Son','Daughter','Brother','Sister','Friend'].map(opt => (
                    <label key={opt} className={`radio-card ${form.profileFor === opt ? 'active' : ''}`}>
                      <input type="radio" name="profileFor" value={opt} checked={form.profileFor === opt} onChange={e => update('profileFor', e.target.value)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-field">
                <label>I am a</label>
                <div className="toggle-group2">
                  {['Male','Female'].map(g => (
                    <button key={g} type="button" className={`toggle2 ${form.gender === g ? 'active' : ''}`} onClick={() => update('gender', g)}>{g}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="form-step">
              <div className="form-row">
                <div className="form-field">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Enter your full name" value={form.name} onChange={e => update('name', e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Date of Birth *</label>
                  <input type="date" value={form.dob} onChange={e => update('dob', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Religion *</label>
                  <select value={form.religion} onChange={e => update('religion', e.target.value)}>
                    {['Hindu','Muslim','Christian','Sikh','Jain','Buddhist','Parsi','Jewish','Any'].map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Caste</label>
                  <input type="text" placeholder="Enter caste" value={form.caste} onChange={e => update('caste', e.target.value)} />
                </div>
              </div>
              <div className="form-field">
                <label>Mother Tongue</label>
                <select value={form.motherTongue} onChange={e => update('motherTongue', e.target.value)}>
                  {['Hindi','Tamil','Telugu','Bengali','Marathi','Gujarati','Kannada','Malayalam','Punjabi','Urdu','Odia','Other'].map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="form-step">
              <div className="form-field">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div className="form-field">
                <label>Mobile Number *</label>
                <div className="phone-input">
                  <span className="country-code">🇮🇳 +91</span>
                  <input type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>City *</label>
                  <input type="text" placeholder="Your city" value={form.city} onChange={e => update('city', e.target.value)} />
                </div>
                <div className="form-field">
                  <label>State *</label>
                  <select value={form.state} onChange={e => update('state', e.target.value)}>
                    <option value="">Select State</option>
                    {['Maharashtra','Delhi','Karnataka','Tamil Nadu','Telangana','Gujarat','Rajasthan','West Bengal','Uttar Pradesh','Punjab','Kerala','Andhra Pradesh','Madhya Pradesh','Bihar','Other'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label>Password *</label>
                <input type="password" placeholder="Create a strong password" value={form.password} onChange={e => update('password', e.target.value)} />
              </div>
              <p className="terms-text">
                By registering, you agree to our <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          )}

          <div className="form-actions">
            {step > 0 && (
              <button className="btn-outline" onClick={() => setStep(s => s - 1)}>Back</button>
            )}
            <button className="btn-primary step-btn" onClick={handleNext}>
              {step < STEPS.length - 1 ? 'Continue' : 'Register Free'}
            </button>
          </div>

          <p className="auth-switch">
            Already registered? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
