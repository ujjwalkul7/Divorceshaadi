import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Matches.css';

const ALL_PROFILES = [
  { id: 1, name: 'Meera S.', age: 27, height: "5'4\"", religion: 'Hindu', caste: 'Brahmin', profession: 'Software Engineer', location: 'Hyderabad', education: 'B.Tech', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', verified: true, premium: false },
  { id: 2, name: 'Pooja R.', age: 25, height: "5'3\"", religion: 'Hindu', caste: 'Kshatriya', profession: 'Doctor', location: 'Pune', education: 'MBBS', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop', verified: true, premium: true },
  { id: 3, name: 'Kavya T.', age: 28, height: "5'5\"", religion: 'Hindu', caste: 'Reddy', profession: 'MBA Graduate', location: 'Chennai', education: 'MBA', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop', verified: false, premium: false },
  { id: 4, name: 'Riya M.', age: 26, height: "5'4\"", religion: 'Hindu', caste: 'Maratha', profession: 'Chartered Accountant', location: 'Kolkata', education: 'CA', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop', verified: true, premium: false },
  { id: 5, name: 'Nisha K.', age: 24, height: "5'2\"", religion: 'Hindu', caste: 'Jat', profession: 'Teacher', location: 'Delhi', education: 'M.Ed', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop', verified: true, premium: true },
  { id: 6, name: 'Divya P.', age: 29, height: "5'6\"", religion: 'Hindu', caste: 'Nair', profession: 'IAS Officer', location: 'Bangalore', education: 'UPSC', img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=300&h=300&fit=crop', verified: true, premium: true },
  { id: 7, name: 'Anjali S.', age: 27, height: "5'3\"", religion: 'Hindu', caste: 'Brahmin', profession: 'Architect', location: 'Mumbai', education: 'B.Arch', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop', verified: false, premium: false },
  { id: 8, name: 'Priya V.', age: 26, height: "5'5\"", religion: 'Hindu', caste: 'Kayastha', profession: 'Data Scientist', location: 'Noida', education: 'M.Tech', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop', verified: true, premium: false },
];

const TABS = ['All Matches', 'New Matches', 'Today\'s Matches', 'Premium', 'Nearby'];

export default function Matches() {
  const [activeTab, setActiveTab] = useState('All Matches');
  const [viewMode, setViewMode] = useState('grid');
  const [shortlisted, setShortlisted] = useState([]);
  const [interests, setInterests] = useState([]);

  const toggleShortlist = (id) => {
    setShortlisted(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const sendInterest = (id) => {
    if (!interests.includes(id)) setInterests(prev => [...prev, id]);
  };

  const filtered = activeTab === 'Premium'
    ? ALL_PROFILES.filter(p => p.premium)
    : ALL_PROFILES;

  return (
    <div className="matches-page">
      {/* Top Banner */}
      <div className="matches-banner">
        <div className="container matches-banner-inner">
          <div>
            <h1>Your Matches</h1>
            <p>Based on your preferences — {filtered.length} profiles found</p>
          </div>
          <div className="upgrade-nudge">
            <span>🔒 Upgrade to view contact details</span>
            <Link to="/upgrade" className="btn-primary">Upgrade Now</Link>
          </div>
        </div>
      </div>

      <div className="container matches-layout">
        {/* Sidebar Filter */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <h3>Filter By</h3>
            <button className="clear-btn">Clear All</button>
          </div>
          <FilterGroup title="Age Range">
            <div className="range-inputs">
              <input type="number" defaultValue={22} min={18} max={60} />
              <span>—</span>
              <input type="number" defaultValue={32} min={18} max={60} />
            </div>
          </FilterGroup>
          <FilterGroup title="Religion">
            {['Hindu','Muslim','Christian','Sikh','Jain','Buddhist'].map(r => (
              <label key={r} className="checkbox-label">
                <input type="checkbox" defaultChecked={r === 'Hindu'} /> {r}
              </label>
            ))}
          </FilterGroup>
          <FilterGroup title="Mother Tongue">
            {['Hindi','Tamil','Telugu','Bengali','Marathi','Gujarati','Punjabi'].map(l => (
              <label key={l} className="checkbox-label">
                <input type="checkbox" /> {l}
              </label>
            ))}
          </FilterGroup>
          <FilterGroup title="Education">
            {['High School','Graduate','Post Graduate','Doctorate','Professional Degree'].map(e => (
              <label key={e} className="checkbox-label">
                <input type="checkbox" /> {e}
              </label>
            ))}
          </FilterGroup>
          <FilterGroup title="Annual Income">
            {['Upto 5L','5L–10L','10L–25L','25L–50L','50L+'].map(i => (
              <label key={i} className="checkbox-label">
                <input type="checkbox" /> {i}
              </label>
            ))}
          </FilterGroup>
          <FilterGroup title="Location">
            <input type="text" className="filter-input" placeholder="Enter city or state" />
          </FilterGroup>
          <button className="btn-primary apply-filter-btn">Apply Filters</button>
        </aside>

        {/* Main Content */}
        <main className="matches-main">
          {/* Tabs */}
          <div className="matches-tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`match-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >{tab}</button>
            ))}
            <div className="view-toggles">
              <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>⊞</button>
              <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>≡</button>
            </div>
          </div>

          <div className={`profiles-list ${viewMode}`}>
            {filtered.map(p => (
              <div key={p.id} className={`match-card ${viewMode}`}>
                <div className="match-img-wrap">
                  <img src={p.img} alt={p.name} />
                  {p.verified && <span className="verified-badge">✓ Verified</span>}
                  {p.premium && <span className="premium-badge">⭐ Premium</span>}
                  <button
                    className={`shortlist-btn2 ${shortlisted.includes(p.id) ? 'active' : ''}`}
                    onClick={() => toggleShortlist(p.id)}
                  >{shortlisted.includes(p.id) ? '♥' : '♡'}</button>
                </div>
                <div className="match-info">
                  <div className="match-name-row">
                    <h3>{p.name}</h3>
                    <Link to={`/profile/${p.id}`} className="view-btn-link">View Profile →</Link>
                  </div>
                  <div className="match-details">
                    <span>{p.age} yrs</span>
                    <span>{p.height}</span>
                    <span>{p.religion} • {p.caste}</span>
                  </div>
                  <div className="match-details">
                    <span>🎓 {p.education}</span>
                    <span>💼 {p.profession}</span>
                  </div>
                  <div className="match-details">
                    <span>📍 {p.location}</span>
                  </div>
                  <div className="match-actions">
                    <button
                      className={`send-interest-btn ${interests.includes(p.id) ? 'sent' : ''}`}
                      onClick={() => sendInterest(p.id)}
                    >
                      {interests.includes(p.id) ? '✓ Interest Sent' : 'Send Interest'}
                    </button>
                    <button className="msg-btn">💬 Message</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="filter-group">
      <button className="filter-group-title" onClick={() => setOpen(o => !o)}>
        {title} <span>{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="filter-group-content">{children}</div>}
    </div>
  );
}
