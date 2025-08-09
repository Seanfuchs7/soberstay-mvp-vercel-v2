
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <div className="logo-icon">🏠</div>
          SoberStay
        </Link>
        <div className="nav-links">
          <Link href="/facilities" className="nav-link">Browse Facilities</Link>
          <a className="nav-link" href="#how">How It Works</a>
          <Link href="/operators" className="nav-link">For Operators</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/facilities" className="nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
