
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import BookingForm from './booking-form';

async function getFacility(slug: string) {
  const res = await fetch(`/api/facilities/${slug}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load facility');
  return res.json();
}

export default async function FacilityPage({ params }: { params: { slug: string }}) {
  const facility = await getFacility(params.slug);

  return (
    <>
      <Navbar/>
      <div className="modal-content" style={{maxWidth: '1000px', margin:'6rem auto'}}>
        <div className="modal-header" style={{position:'relative', height:'400px', overflow:'hidden'}}>
          <Image src={facility.imageUrl} alt={facility.name} width={1200} height={600} style={{objectFit:'cover'}}/>
        </div>
        <div className="modal-body">
          <div className="facility-detail-header">
            <div>
              <h2 className="facility-detail-title">{facility.name}</h2>
              <div className="facility-detail-meta">
                <span>📍 {facility.city}, {facility.state}</span>
                <span>⭐ {facility.rating.toFixed(1)} (demo)</span>
                <span>{facility.verified ? '✓ NARR Certified Level ' + facility.level.replace('Level ', '') : 'Unverified'}</span>
              </div>
            </div>
            <div className="facility-detail-price">
              <div className="price-label">Monthly Rent</div>
              <div className="price-amount">${facility.priceMonthly.toLocaleString()}</div>
            </div>
          </div>

          <div className="facility-tabs">
            <div className="facility-tab active">Overview</div>
            <div className="facility-tab">Amenities</div>
            <div className="facility-tab">Requirements</div>
            <div className="facility-tab">Reviews</div>
          </div>

          <p style={{lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: '2rem'}}>
            {facility.name} offers a structured, supportive environment in {facility.city}. Daily meetings, peer community, and 24/7 house management.
          </p>

          <BookingForm facilityId={facility.id} facilityName={facility.name} priceMonthly={facility.priceMonthly}/>
        </div>
      </div>
    </>
  )
}
