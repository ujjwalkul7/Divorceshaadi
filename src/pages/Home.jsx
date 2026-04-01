import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const STATS = [
  { num: '35M+', label: 'Profiles' },
  { num: '4M+', label: 'Success Stories' },
  { num: '20+', label: 'Years of Trust' },
  { num: '15+', label: 'Countries' },
];

const SUCCESS_STORIES = [
  {
    id: 1, names: 'Priya & Rahul', location: 'Mumbai',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=300&fit=crop',
    quote: 'We found each other on Shaadi.com and it was love at first message. Our families approved and we got married within 6 months!',
    date: 'Married Jan 2024',
  },
  {
    id: 2, names: 'Ananya & Vikram', location: 'Delhi',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop',
    quote: 'Shaadi.com helped us find our perfect match. The compatibility filters made it so easy to connect with the right person.',
    date: 'Married Mar 2024',
  },
  {
    id: 3, names: 'Sneha & Arjun', location: 'Bangalore',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop',
    quote: 'We were both skeptical about online matrimony, but Shaadi.com proved us wrong. Best decision of our lives!',
    date: 'Married May 2024',
  },
];

const PROFILES = [
  { id: 1, name: 'Meera S.', age: 27, height: "5'4\"", religion: 'Hindu', profession: 'Software Engineer', location: 'Hyderabad', education: 'B.Tech', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&face' },
  { id: 2, name: 'Pooja R.', age: 25, height: "5'3\"", religion: 'Hindu', profession: 'Doctor', location: 'Pune', education: 'MBBS', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
  { id: 3, name: 'Kavya T.', age: 28, height: "5'5\"", religion: 'Hindu', profession: 'MBA', location: 'Chennai', education: 'MBA', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop' },
  { id: 4, name: 'Riya M.', age: 26, height: "5'4\"", religion: 'Hindu', profession: 'CA', location: 'Kolkata', education: 'CA', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop' },
];

const MEMBERSHIP_PLANS = [
  {
    name: 'Basic', price: 'Free', period: '',
    color: '#888',
    features: ['Create Profile', 'View Matches', 'Limited Interests', 'Basic Search'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Gold', price: '₹4,499', period: '/3 months',
    color: '#d4a017',
    features: ['Send Unlimited Interests', 'View Contact Numbers', 'Advanced Search', 'Priority Listing', 'Chat & Message'],
    cta: 'Choose Gold',
    popular: true,
  },
  {
    name: 'Platinum', price: '₹7,999', period: '/6 months',
    color: '#aaa',
    features: ['Everything in Gold', 'Dedicated Relationship Manager', 'Profile Highlighting', 'Verified Profiles Only', 'Video Profiles'],
    cta: 'Choose Platinum',
    popular: false,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [lookingFor, setLookingFor] = useState('Bride');
  const [religion, setReligion] = useState('Hindu');
  const [ageFrom, setAgeFrom] = useState('21');
  const [ageTo, setAgeTo] = useState('28');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?lookingFor=${lookingFor}&religion=${religion}&ageFrom=${ageFrom}&ageTo=${ageTo}`);
  };

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-badge">India's #1 Matrimonial Service</p>
            <h1>Find Your Perfect<br />Life Partner</h1>
            <p className="hero-subtitle">
              Join millions of happy couples who found their soulmates on Shaadi.com.
              Trusted by families for over 20 years.
            </p>
          </div>
          <div className="hero-form-card">
            <h3>Begin Your Search</h3>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <label>I'm looking for a</label>
                <div className="toggle-group">
                  {['Bride', 'Groom'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`toggle-btn ${lookingFor === opt ? 'active' : ''}`}
                      onClick={() => setLookingFor(opt)}
                    >{opt}</button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Religion</label>
                <select value={religion} onChange={e => setReligion(e.target.value)}>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Sikh</option>
                  <option>Jain</option>
                  <option>Buddhist</option>
                  <option>Any</option>
                </select>
              </div>
              <div className="form-group">
                <label>Age</label>
                <div className="age-range">
                  <select value={ageFrom} onChange={e => setAgeFrom(e.target.value)}>
                    {Array.from({length: 30}, (_,i) => i+18).map(a => <option key={a}>{a}</option>)}
                  </select>
                  <span>to</span>
                  <select value={ageTo} onChange={e => setAgeTo(e.target.value)}>
                    {Array.from({length: 30}, (_,i) => i+18).map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary search-btn">
                Search Profiles
              </button>
            </form>
            <p className="form-footer">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Shaadi.com Works</h2>
            <p className="section-subtitle">Find your perfect match in 3 simple steps</p>
          </div>
          <div className="steps-grid">
            {[
              { step: '01', title: 'Create Profile', desc: 'Register for free and create your detailed profile with photos and preferences.', icon: '👤' },
              { step: '02', title: 'Discover Matches', desc: 'Browse thousands of verified profiles and get curated matches based on your preferences.', icon: '🔍' },
              { step: '03', title: 'Connect & Meet', desc: 'Express interest, chat, and connect with your matches to find your perfect life partner.', icon: '💍' },
            ].map(item => (
              <div key={item.step} className="step-card">
                <div className="step-icon">{item.icon}</div>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="featured-profiles">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Today's Featured Profiles</h2>
              <p className="section-subtitle">Explore some of our handpicked matches for you</p>
            </div>
            <Link to="/matches" className="btn-outline">View All Matches</Link>
          </div>
          <div className="profiles-grid">
            {PROFILES.map(p => (
              <div key={p.id} className="profile-card">
                <div className="profile-img-wrap">
                  <img src={p.img} alt={p.name} />
                  <div className="profile-badge">New</div>
                  <div className="profile-overlay">
                    <Link to={`/profile/${p.id}`} className="view-profile-btn">View Profile</Link>
                  </div>
                </div>
                <div className="profile-info">
                  <h4>{p.name}</h4>
                  <p className="profile-meta">{p.age} yrs • {p.height} • {p.religion}</p>
                  <p className="profile-detail">{p.profession} • {p.education}</p>
                  <p className="profile-location">📍 {p.location}</p>
                  <div className="profile-actions">
                    <button className="interest-btn">Send Interest</button>
                    <button className="shortlist-btn">♡</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="membership-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Membership</h2>
            <p className="section-subtitle">Upgrade to connect with your perfect match faster</p>
          </div>
          <div className="plans-grid">
            {MEMBERSHIP_PLANS.map(plan => (
              <div key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header" style={{ borderTopColor: plan.color }}>
                  <h3 style={{ color: plan.color }}>{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
                <Link
                  to={plan.name === 'Basic' ? '/register' : `/upgrade/${plan.name.toLowerCase()}`}
                  className={plan.popular ? 'btn-primary plan-btn' : 'btn-outline plan-btn'}
                  style={plan.popular ? {} : { borderColor: plan.color, color: plan.color }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real Love Stories</h2>
            <p className="section-subtitle">Over 4 million couples have found happiness through Shaadi.com</p>
          </div>
          <div className="stories-grid">
            {SUCCESS_STORIES.map(s => (
              <div key={s.id} className="story-card">
                <div className="story-img">
                  <img src={s.img} alt={s.names} />
                  <div className="story-names-overlay">
                    <h4>{s.names}</h4>
                    <p>{s.location}</p>
                  </div>
                </div>
                <div className="story-content">
                  <p className="story-quote">"{s.quote}"</p>
                  <span className="story-date">{s.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="stories-cta">
            <Link to="/success-stories" className="btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* App Banner */}
      <section className="app-banner">
        <div className="container app-banner-inner">
          <div className="app-text">
            <h2>Download the Shaadi.com App</h2>
            <p>Find your perfect match anytime, anywhere. Available on iOS and Android.</p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <span className="app-icon">🍎</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="app-store-btn">
                <span className="app-icon">▶</span>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="app-mockup">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview-header">shaadi.com</div>
                <div className="app-preview-card"></div>
                <div className="app-preview-card small"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
