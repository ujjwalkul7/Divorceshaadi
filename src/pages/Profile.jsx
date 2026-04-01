import { useParams, Link } from 'react-router-dom';
import './Profile.css';

const PROFILES_DATA = {
  1: { id: 1, name: 'Meera Sharma', age: 27, height: "5'4\"", weight: '56 kg', religion: 'Hindu', caste: 'Brahmin', subCaste: 'Iyer', motherTongue: 'Tamil', maritalStatus: 'Never Married', profileFor: 'Self', profession: 'Software Engineer', company: 'Infosys', education: 'B.Tech (Computer Science)', college: 'IIT Madras', income: '12 LPA', city: 'Hyderabad', state: 'Telangana', country: 'India', diet: 'Vegetarian', smoke: 'Non-Smoker', drink: 'Non-Drinker', about: 'I am a software engineer working at Infosys for the past 3 years. I enjoy reading, cooking, and traveling. Looking for a well-educated, family-oriented partner who values both tradition and modernity. My family is loving and supportive. I\'m close to my parents and younger brother.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop', verified: true, premium: false, memberSince: 'Jan 2024', lastSeen: '2 hours ago', zodiac: 'Taurus', birthPlace: 'Chennai', hobbies: ['Reading', 'Cooking', 'Traveling', 'Yoga', 'Photography'], fatherOccupation: 'Retired Govt Employee', motherOccupation: 'Homemaker', siblings: '1 Brother', familyType: 'Nuclear', familyStatus: 'Middle Class' },
  2: { id: 2, name: 'Pooja Rao', age: 25, height: "5'3\"", weight: '52 kg', religion: 'Hindu', caste: 'Kshatriya', subCaste: 'Rajput', motherTongue: 'Hindi', maritalStatus: 'Never Married', profileFor: 'Self', profession: 'Doctor (MBBS)', company: 'AIIMS Delhi', education: 'MBBS', college: 'AIIMS Delhi', income: '15 LPA', city: 'Pune', state: 'Maharashtra', country: 'India', diet: 'Vegetarian', smoke: 'Non-Smoker', drink: 'Non-Drinker', about: 'I am a doctor currently doing my residency at AIIMS. Passionate about my work and dedicated to helping others. Love spending time with family, reading medical literature, and occasionally painting. Seeking a supportive, educated partner who understands the demands of a medical career.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop', verified: true, premium: true, memberSince: 'Nov 2023', lastSeen: 'Today', zodiac: 'Virgo', birthPlace: 'Jaipur', hobbies: ['Painting', 'Reading', 'Cooking', 'Badminton'], fatherOccupation: 'Businessman', motherOccupation: 'Doctor', siblings: 'None (Only Child)', familyType: 'Nuclear', familyStatus: 'Upper Middle Class' },
};

const DEFAULT = PROFILES_DATA[1];

export default function Profile() {
  const { id } = useParams();
  const profile = PROFILES_DATA[id] || DEFAULT;

  return (
    <div className="profile-page">
      <div className="profile-breadcrumb">
        <div className="container">
          <Link to="/matches">Matches</Link> &rsaquo; {profile.name}
        </div>
      </div>

      <div className="container profile-layout">
        {/* Left Col */}
        <aside className="profile-sidebar">
          <div className="profile-img-card">
            <img src={profile.img} alt={profile.name} />
            {profile.verified && <div className="verified-ribbon">✓ Verified</div>}
            <div className="online-status">🟢 {profile.lastSeen}</div>
          </div>
          <div className="quick-actions">
            <button className="qa-btn primary">💌 Send Interest</button>
            <button className="qa-btn">💬 Send Message</button>
            <button className="qa-btn">♡ Shortlist</button>
            <button className="qa-btn">📞 View Contact</button>
          </div>
          <div className="profile-meta-card">
            <div className="meta-item">
              <span className="meta-key">Profile ID</span>
              <span className="meta-val">SH{String(profile.id).padStart(8, '0')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-key">Member Since</span>
              <span className="meta-val">{profile.memberSince}</span>
            </div>
            <div className="meta-item">
              <span className="meta-key">Last Active</span>
              <span className="meta-val">{profile.lastSeen}</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="profile-main">
          {/* Header */}
          <div className="profile-header-card">
            <div className="profile-title">
              <div>
                <h1>{profile.name}
                  {profile.verified && <span className="v-badge">✓</span>}
                  {profile.premium && <span className="p-badge">⭐ Premium</span>}
                </h1>
                <p className="profile-subtitle">
                  {profile.age} yrs • {profile.height} • {profile.maritalStatus} • {profile.religion}
                </p>
                <p className="profile-subtitle">📍 {profile.city}, {profile.state}</p>
              </div>
              <div className="compat-score">
                <div className="score-circle">86%</div>
                <span>Match</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="profile-section-card">
            <h2>About Me</h2>
            <p className="about-text">{profile.about}</p>
            <div className="hobbies-row">
              {profile.hobbies.map(h => <span key={h} className="hobby-chip">{h}</span>)}
            </div>
          </div>

          {/* Basic Details */}
          <div className="profile-section-card">
            <h2>Basic Details</h2>
            <div className="details-grid">
              <DetailRow label="Age" value={`${profile.age} Years`} />
              <DetailRow label="Height" value={profile.height} />
              <DetailRow label="Weight" value={profile.weight} />
              <DetailRow label="Mother Tongue" value={profile.motherTongue} />
              <DetailRow label="Marital Status" value={profile.maritalStatus} />
              <DetailRow label="Religion" value={profile.religion} />
              <DetailRow label="Caste" value={profile.caste} />
              <DetailRow label="Sub Caste" value={profile.subCaste} />
              <DetailRow label="Zodiac Sign" value={profile.zodiac} />
              <DetailRow label="Birth Place" value={profile.birthPlace} />
              <DetailRow label="Diet" value={profile.diet} />
              <DetailRow label="Smoke" value={profile.smoke} />
              <DetailRow label="Drink" value={profile.drink} />
            </div>
          </div>

          {/* Education & Career */}
          <div className="profile-section-card">
            <h2>Education & Career</h2>
            <div className="details-grid">
              <DetailRow label="Education" value={profile.education} />
              <DetailRow label="College" value={profile.college} />
              <DetailRow label="Profession" value={profile.profession} />
              <DetailRow label="Company" value={profile.company} />
              <DetailRow label="Annual Income" value={profile.income} />
            </div>
          </div>

          {/* Family */}
          <div className="profile-section-card">
            <h2>Family Details</h2>
            <div className="details-grid">
              <DetailRow label="Father's Occupation" value={profile.fatherOccupation} />
              <DetailRow label="Mother's Occupation" value={profile.motherOccupation} />
              <DetailRow label="Siblings" value={profile.siblings} />
              <DetailRow label="Family Type" value={profile.familyType} />
              <DetailRow label="Family Status" value={profile.familyStatus} />
            </div>
          </div>

          {/* Location */}
          <div className="profile-section-card">
            <h2>Location</h2>
            <div className="details-grid">
              <DetailRow label="City" value={profile.city} />
              <DetailRow label="State" value={profile.state} />
              <DetailRow label="Country" value={profile.country} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <span className="detail-key">{label}</span>
      <span className="detail-val">{value}</span>
    </div>
  );
}
