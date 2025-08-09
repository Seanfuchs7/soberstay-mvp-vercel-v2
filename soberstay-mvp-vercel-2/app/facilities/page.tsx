
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

type Facility = {
  id: number;
  slug: string;
  name: string;
  city: string;
  state: string;
  priceMonthly: number;
  gender: string;
  level: string;
  bedsTotal: number;
  bedsAvailable: number;
  rating: number;
  imageUrl?: string | null;
  verified: boolean;
};

async function getFacilities(): Promise<Facility[]> {
  const res = await fetch('/api/facilities', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load facilities');
  return res.json();
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <>
      <Navbar/>
      <section className="facilities" style={{display:'block'}}>
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Available Sober Living Homes</h2>
            <p className="section-subtitle">{facilities.length} facilities found in Los Angeles, CA area</p>
          </div>

          <div className="filters">
            <div className="filters-row">
              <div className="filter-group">
                <div className="filter-label">Price Range</div>
                <select className="filter-select"><option>Any Price</option><option>Under $2,000/mo</option><option>$2,000 - $3,000/mo</option><option>$3,000 - $4,000/mo</option><option>Over $4,000/mo</option></select>
              </div>
              <div className="filter-group">
                <div className="filter-label">Gender</div>
                <select className="filter-select"><option>All</option><option>Men's Only</option><option>Women's Only</option><option>Co-ed</option></select>
              </div>
              <div className="filter-group">
                <div className="filter-label">Level of Care</div>
                <select className="filter-select"><option>All Levels</option><option>Level I</option><option>Level II</option><option>Level III</option><option>Level IV</option></select>
              </div>
            </div>
            <div className="filter-tags" style={{marginTop:'1rem'}}>
              {['Near Treatment','Pet Friendly','Employment Support','Private Rooms','Gym Access'].map(t=>(
                <div className="filter-tag" key={t}>{t}</div>
              ))}
            </div>
          </div>

          <div className="facilities-grid">
            {facilities.map(f => (
              <Link key={f.id} href={`/facility/${f.slug}`} className="facility-card">
                <div className="facility-image">
                  <Image src={f.imageUrl || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop'} alt={f.name} width={1200} height={600}/>
                  <div className={`facility-badge ${f.verified ? 'verified' : ''}`}>{f.verified ? '✓ Verified' : 'Unverified'}</div>
                  <div className="facility-price">${f.priceMonthly.toLocaleString()}/mo</div>
                </div>
                <div className="facility-info">
                  <div className="facility-header">
                    <div>
                      <h3 className="facility-name">{f.name}</h3>
                      <p className="facility-location">📍 {f.city}, {f.state}</p>
                    </div>
                    <div className="facility-rating">
                      <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                      <span className="rating-text">{f.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="facility-features">
                    <span className="facility-feature">🛏️ {f.bedsTotal} beds</span>
                    <span className="facility-feature">👥 {f.gender}</span>
                    <span className="facility-feature">📋 {f.level}</span>
                  </div>
                  <div className="facility-availability">
                    <span className="availability-text">✓ {f.bedsAvailable} bed(s) available</span>
                    <span className="view-btn">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
