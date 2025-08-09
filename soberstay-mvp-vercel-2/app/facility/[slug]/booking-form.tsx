
'use client';
import { useState } from 'react';

export default function BookingForm({ facilityId, facilityName, priceMonthly } : { facilityId: number, facilityName: string, priceMonthly: number }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '555-123-4567',
    dob: '1990-01-01',
    desiredMoveIn: '2025-08-25',
    emergencyName: 'Jane Doe',
    emergencyPhone: '555-987-6543',
    emergencyRelation: 'Mother',
    sobrietyDate: '2025-05-01',
    daysSober: 78,
    program: 'Currently in treatment',
    programName: 'Malibu Recovery Center',
    story: "I've been in treatment for 60 days and am ready to transition to sober living.",
    sponsorStatus: 'Yes',
    employment: 'Employed part-time'
  });

  const onChange = (k: string, v: any) => setForm(prev => ({...prev, [k]: v}));

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ ...form, facilityId })
      });
      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      alert(`Application submitted! ID: ${data.id}. Payment pre-authorized (demo).`);
    } catch (e:any) {
      alert(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="booking-form">
      <h2 className="form-title">Apply for {facilityName}</h2>
      <p style={{background: 'rgba(59,130,246,.1)', padding: '1rem', borderRadius: 8, marginBottom: '1.5rem', fontSize: '.9rem', color: 'var(--primary-dark)'}}>
        💡 <strong>Test Mode:</strong> Forms are pre-filled with sample data for easy testing.
      </p>

      <div className="progress-steps">
        {['Personal Info','Recovery Info','Payment'].map((s, i)=> (
          <div className={`progress-step ${step>=i+1?'active':''}`} key={s}>
            <div className="progress-step-number">{i+1}</div>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className="progress-bar"><div className="progress-fill" style={{width: `${(step/3)*100}%`}}/></div>

      {step===1 && (
        <div>
          <div className="form-grid">
            <div className="form-group"><label className="form-label">First Name *</label><input className="form-input" value={form.firstName} onChange={e=>onChange('firstName', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Last Name *</label><input className="form-input" value={form.lastName} onChange={e=>onChange('lastName', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Email *</label><input className="form-input" value={form.email} onChange={e=>onChange('email', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Phone *</label><input className="form-input" value={form.phone} onChange={e=>onChange('phone', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Date of Birth *</label><input type="date" className="form-input" value={form.dob} onChange={e=>onChange('dob', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Desired Move-in Date *</label><input type="date" className="form-input" value={form.desiredMoveIn} onChange={e=>onChange('desiredMoveIn', e.target.value)}/></div>
            <div className="form-group full-width"><label className="form-label">Emergency Contact Name *</label><input className="form-input" value={form.emergencyName} onChange={e=>onChange('emergencyName', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Emergency Contact Phone *</label><input className="form-input" value={form.emergencyPhone} onChange={e=>onChange('emergencyPhone', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Emergency Contact Relationship *</label><input className="form-input" value={form.emergencyRelation} onChange={e=>onChange('emergencyRelation', e.target.value)}/></div>
          </div>
          <button className="submit-btn" onClick={()=>setStep(2)}>Continue to Recovery Info →</button>
        </div>
      )}

      {step===2 && (
        <div>
          <div className="form-grid">
            <div className="form-group"><label className="form-label">Sobriety Date *</label><input type="date" className="form-input" value={form.sobrietyDate} onChange={e=>onChange('sobrietyDate', e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Days Sober *</label><input type="number" className="form-input" min={30} value={form.daysSober} onChange={e=>onChange('daysSober', Number(e.target.value))}/></div>
            <div className="form-group full-width"><label className="form-label">Current Treatment/Program *</label>
              <select className="form-select" value={form.program} onChange={e=>onChange('program', e.target.value)}>
                <option value="">Select...</option><option>Currently in treatment</option><option>Completed treatment</option><option>Outpatient program</option><option>AA/NA only</option><option>Other</option>
              </select>
            </div>
            <div className="form-group full-width"><label className="form-label">Treatment Center/Program Name</label><input className="form-input" value={form.programName || ''} onChange={e=>onChange('programName', e.target.value)}/></div>
            <div className="form-group full-width"><label className="form-label">Tell us about your recovery journey *</label><textarea className="form-textarea" value={form.story} onChange={e=>onChange('story', e.target.value)}/></div>
            <div className="form-group full-width"><label className="form-label">Do you have a sponsor? *</label>
              <select className="form-select" value={form.sponsorStatus} onChange={e=>onChange('sponsorStatus', e.target.value)}>
                <option value="">Select...</option><option>Yes</option><option>No, but actively seeking</option><option>No</option>
              </select>
            </div>
            <div className="form-group full-width"><label className="form-label">Employment Status *</label>
              <select className="form-select" value={form.employment} onChange={e=>onChange('employment', e.target.value)}>
                <option>Employed full-time</option><option>Employed part-time</option><option>Student</option><option>Seeking employment</option><option>Disabled/Receiving benefits</option>
              </select>
            </div>
          </div>
          <div style={{display:'flex', gap:'1rem'}}>
            <button className="submit-btn" style={{background: 'var(--gray-500)'}} onClick={()=>setStep(1)}>← Back</button>
            <button className="submit-btn" style={{flex:1}} onClick={()=>setStep(3)}>Continue to Payment →</button>
          </div>
        </div>
      )}

      {step===3 && (
        <div>
          <div className="payment-info">
            <h3 className="payment-info-title">Payment Summary</h3>
            <p>Your payment will be processed upon approval of your application.</p>
            <div className="payment-breakdown">
              <div className="payment-line"><span>First Month's Rent</span><span>${priceMonthly.toLocaleString()}</span></div>
              <div className="payment-line"><span>Security Deposit</span><span>$500</span></div>
              <div className="payment-line"><span>Application Fee</span><span>$50</span></div>
              <div className="payment-line total"><span>Total Due at Move-in</span><span>${(priceMonthly + 500 + 50).toLocaleString()}</span></div>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group full-width"><label className="form-label">Cardholder Name *</label><input className="form-input" defaultValue="John Doe"/></div>
            <div className="form-group full-width"><label className="form-label">Card Number *</label><input className="form-input" defaultValue="4111 1111 1111 1111"/></div>
            <div className="form-group"><label className="form-label">Expiry Date *</label><input className="form-input" defaultValue="12/25"/></div>
            <div className="form-group"><label className="form-label">CVV *</label><input className="form-input" defaultValue="123"/></div>
          </div>

          <div style={{display:'flex', gap:'1rem'}}>
            <button className="submit-btn" style={{background: 'var(--gray-500)'}} onClick={()=>setStep(2)}>← Back</button>
            <button className="submit-btn" style={{flex:1}} disabled={loading} onClick={submit}>{loading ? 'Submitting...' : 'Complete Application'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
