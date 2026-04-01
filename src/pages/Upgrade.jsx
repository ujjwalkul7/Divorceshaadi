import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Upgrade.css';

const PLANS = [
  {
    name: 'Gold', price: 4499, period: '3 months', pricePerMonth: '1,500/mo',
    color: '#d4a017',
    gradient: 'linear-gradient(135deg, #d4a017, #f0c040)',
    features: [
      { text: 'Send Unlimited Interests', included: true },
      { text: 'View Contact Numbers', included: true },
      { text: 'Advanced Search Filters', included: true },
      { text: 'Priority Profile Listing', included: true },
      { text: 'Chat & Messaging', included: true },
      { text: 'Dedicated Relationship Manager', included: false },
      { text: 'Video Profile', included: false },
      { text: 'Highlighted Profile', included: false },
      { text: 'Exclusive Events Access', included: false },
    ],
    popular: true,
  },
  {
    name: 'Platinum', price: 7999, period: '6 months', pricePerMonth: '1,333/mo',
    color: '#888',
    gradient: 'linear-gradient(135deg, #888, #bbb)',
    features: [
      { text: 'Send Unlimited Interests', included: true },
      { text: 'View Contact Numbers', included: true },
      { text: 'Advanced Search Filters', included: true },
      { text: 'Priority Profile Listing', included: true },
      { text: 'Chat & Messaging', included: true },
      { text: 'Dedicated Relationship Manager', included: true },
      { text: 'Video Profile', included: true },
      { text: 'Highlighted Profile', included: false },
      { text: 'Exclusive Events Access', included: false },
    ],
    popular: false,
  },
  {
    name: 'Elite', price: 14999, period: '12 months', pricePerMonth: '1,250/mo',
    color: '#cc0000',
    gradient: 'linear-gradient(135deg, #cc0000, #ff6600)',
    features: [
      { text: 'Send Unlimited Interests', included: true },
      { text: 'View Contact Numbers', included: true },
      { text: 'Advanced Search Filters', included: true },
      { text: 'Priority Profile Listing', included: true },
      { text: 'Chat & Messaging', included: true },
      { text: 'Dedicated Relationship Manager', included: true },
      { text: 'Video Profile', included: true },
      { text: 'Highlighted Profile', included: true },
      { text: 'Exclusive Events Access', included: true },
    ],
    popular: false,
  },
];

const TESTIMONIALS = [
  { name: 'Rajesh K.', plan: 'Gold Member', text: 'The Gold plan helped me find my wife within 2 months. Worth every rupee!', location: 'Mumbai' },
  { name: 'Sunita M.', plan: 'Platinum Member', text: 'My relationship manager helped me filter profiles that truly matched my preferences.', location: 'Delhi' },
  { name: 'Arjun B.', plan: 'Elite Member', text: 'The Elite plan\'s features are outstanding. I was highlighted on top and got 5x more views!', location: 'Bangalore' },
];

export default function Upgrade() {
  const [billing, setBilling] = useState('monthly');
  const [selected, setSelected] = useState('Gold');

  return (
    <div className="upgrade-page">
      {/* Header */}
      <div className="upgrade-hero">
        <div className="container upgrade-hero-content">
          <h1>Upgrade Your Membership</h1>
          <p>Find your perfect match faster with premium features</p>
        </div>
      </div>

      {/* Why Upgrade */}
      <section className="why-upgrade">
        <div className="container">
          <div className="why-grid">
            {[
              { icon: '📞', title: 'View Contact Numbers', desc: 'Connect directly with matches without waiting' },
              { icon: '💬', title: 'Unlimited Messaging', desc: 'Chat freely with all your matches' },
              { icon: '🔍', title: 'Advanced Filters', desc: 'Narrow down to the most compatible profiles' },
              { icon: '⭐', title: 'Priority Listing', desc: 'Appear at the top in search results' },
            ].map(item => (
              <div key={item.title} className="why-item">
                <span className="why-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Choose Your Plan</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>All plans include a 100% money-back guarantee within 7 days</p>

          <div className="upgrade-plans-grid">
            {PLANS.map(plan => (
              <div
                key={plan.name}
                className={`upgrade-plan-card ${plan.popular ? 'popular' : ''} ${selected === plan.name ? 'selected' : ''}`}
                onClick={() => setSelected(plan.name)}
              >
                {plan.popular && <div className="upgrade-popular-badge">Most Popular</div>}
                <div className="upgrade-plan-header" style={{ background: plan.gradient }}>
                  <h3>{plan.name}</h3>
                  <div className="upgrade-price">
                    <span className="upgrade-currency">₹</span>
                    <span className="upgrade-amount">{plan.price.toLocaleString()}</span>
                  </div>
                  <p className="upgrade-period">for {plan.period} (₹{plan.pricePerMonth})</p>
                </div>
                <div className="upgrade-features">
                  {plan.features.map(f => (
                    <div key={f.text} className={`upgrade-feature ${f.included ? 'yes' : 'no'}`}>
                      <span className="feature-icon">{f.included ? '✓' : '✗'}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`upgrade-cta ${selected === plan.name ? 'selected-btn' : ''}`}
                  style={selected === plan.name ? { background: plan.color } : {}}
                >
                  {selected === plan.name ? `✓ Selected — Buy ${plan.name}` : `Choose ${plan.name}`}
                </button>
              </div>
            ))}
          </div>

          {selected && (
            <div className="payment-box">
              <h3>Complete Your Purchase</h3>
              <p>You selected the <strong>{selected}</strong> plan. Proceed to payment below.</p>
              <div className="payment-methods">
                <div className="payment-row">
                  <label className="payment-option active">
                    <input type="radio" name="payment" defaultChecked />
                    <span>💳 Credit / Debit Card</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" />
                    <span>🏦 Net Banking</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" />
                    <span>📱 UPI</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" />
                    <span>💰 EMI</span>
                  </label>
                </div>
                <button className="btn-primary pay-btn">
                  Pay ₹{PLANS.find(p => p.name === selected)?.price.toLocaleString()} Securely →
                </button>
                <p className="secure-note">🔒 100% Secure Payment • SSL Encrypted • PCI Compliant</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="upgrade-testimonials">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>What Our Premium Members Say</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>Thousands of satisfied members found their match with us</p>
          <div className="testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <p className="author-name">{t.name}</p>
                    <p className="author-plan">{t.plan} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="upgrade-faq">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 32 }}>Frequently Asked Questions</h2>
          {[
            { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can upgrade at any time. Downgrading takes effect at the end of your billing period.' },
            { q: 'Is there a refund policy?', a: 'We offer a 7-day money-back guarantee if you are not satisfied with our service.' },
            { q: 'What payment methods are accepted?', a: 'We accept all major credit/debit cards, net banking, UPI, and EMI options.' },
            { q: 'How do I view contact details?', a: 'Gold and above members can view contact numbers directly on any profile page.' },
          ].map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        {q}
        <span>{open ? '▲' : '▼'}</span>
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}
