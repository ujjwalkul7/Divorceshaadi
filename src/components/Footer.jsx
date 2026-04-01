import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">shaadi</span>
              <span className="logo-dot">.com</span>
            </div>
            <p className="footer-tagline">India's Most Trusted Matrimonial Service</p>
            <p className="footer-desc">
              Shaadi.com is part of People Group. We connect millions of people
              looking for life partners with our trusted platform.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon fb">f</a>
              <a href="#" className="social-icon tw">𝕏</a>
              <a href="#" className="social-icon yt">▶</a>
              <a href="#" className="social-icon ig">◎</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Matches</h4>
            <ul>
              <li><Link to="/matches/new">New Matches</Link></li>
              <li><Link to="/matches/today">Today's Matches</Link></li>
              <li><Link to="/matches/nearby">Nearby Matches</Link></li>
              <li><Link to="/matches/premium">Premium Matches</Link></li>
              <li><Link to="/search">Advanced Search</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Membership</h4>
            <ul>
              <li><Link to="/upgrade/gold">Gold Membership</Link></li>
              <li><Link to="/upgrade/platinum">Platinum Membership</Link></li>
              <li><Link to="/upgrade/elite">Elite Membership</Link></li>
              <li><Link to="/upgrade">Compare Plans</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help & Support</h4>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/safety">Safety Tips</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/report">Report Abuse</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <p className="footer-community-label">Community Sites</p>
          <div className="community-links">
            {['Hindu Matrimony','Muslim Matrimony','Christian Matrimony','Sikh Matrimony','Tamil Matrimony','Telugu Matrimony','Bengali Matrimony','Gujarati Matrimony','Marathi Matrimony','Punjabi Matrimony'].map(c => (
              <Link key={c} to="#">{c}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2024 Shaadi.com — A People Group Company. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
