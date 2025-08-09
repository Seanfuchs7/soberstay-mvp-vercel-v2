
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <section className="hero" id="heroSection">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Find Your <span className="highlight">Safe Haven</span> for Recovery</h1>
            <p>Connect with verified sober living homes that support your journey to lasting sobriety. Browse facilities, check availability, and apply online - all in one place.</p>

            <div className="search-box">
              <form className="search-form" action="/facilities">
                <div className="search-input-group">
                  <label>Location</label>
                  <input name="q" type="text" className="search-input" placeholder="City, State or ZIP"/>
                </div>
                <div className="search-input-group">
                  <label>Move-in Date</label>
                  <input name="date" type="date" className="search-input"/>
                </div>
                <button className="search-btn"><span>🔍</span> Search Facilities</button>
              </form>
            </div>

            <div className="trust-badges">
              <div className="trust-badge"><span className="trust-badge-icon">✓</span><span>500+ Verified Facilities</span></div>
              <div className="trust-badge"><span className="trust-badge-icon">✓</span><span>Instant Booking</span></div>
              <div className="trust-badge"><span className="trust-badge-icon">✓</span><span>Secure Payments</span></div>
            </div>
          </div>

          <div className="hero-image">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" alt="Sober Living Home" width={800} height={600}/>
            <div className="floating-card card-1">
              <div className="floating-card-icon">🏠</div>
              <div className="floating-card-title">83% Occupancy</div>
              <div className="floating-card-text">High-demand area</div>
            </div>
            <div className="floating-card card-2">
              <div className="floating-card-icon">⭐</div>
              <div className="floating-card-title">4.8/5 Rating</div>
              <div className="floating-card-text">From 200+ residents</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="featuresSection">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose SoberStay?</h2>
            <p className="section-subtitle">We make finding the right sober living home simple, safe, and supportive</p>
          </div>

          <div className="features-grid">
            {[
              ["🔍","Verified Facilities","All homes are vetted to ensure recovery-focused standards"],
              ["💳","Secure Payments","Pay deposits and rent online with bank-level security"],
              ["🏃","Quick Approval","Get responses within 24 hours"],
              ["🤝","Recovery Support","Homes offering meetings, counseling, and peer support"],
              ["📱","24/7 Access","Browse, check availability, and apply anytime"],
              ["🛡️","Privacy Protected","We do not store health/medical data"]
            ].map(([icon,title,text]) => (
              <div className="feature-card" key={title as string}>
                <div className="feature-icon">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>SoberStay</h4>
            <p style={{color: 'var(--gray-400)', marginTop: '.5rem'}}>Connecting people in recovery with quality sober living homes nationwide.</p>
          </div>
          <div className="footer-section">
            <h4>For Residents</h4>
            <div className="footer-links">
              <Link href="/facilities">Browse Facilities</Link>
              <a href="#how">How It Works</a>
              <a href="#">Success Stories</a>
              <a href="/resources">Resources</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>For Operators</h4>
            <div className="footer-links">
              <Link href="/operators">List Your Facility</Link>
              <a href="/operators">Operator Dashboard</a>
              <a href="/operators#pricing">Pricing</a>
              <a href="/resources#narr">NARR Certification</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQs</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 SoberStay. All rights reserved. | 📞 1-800-SOBER-55</p>
        </div>
      </footer>
    </>
  )
}
