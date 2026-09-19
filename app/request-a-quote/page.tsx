"use client";
import { useState } from 'react';
import SharedLayout from '../components/SharedLayout';
import '../globals.css';

export default function RequestQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      source: 'quote',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      surveyType: formData.get('survey-type'),
      location: formData.get('location'),
      details: formData.get('details'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SharedLayout>
      <div className="bk-hero" style={{ backgroundColor: '#fff' }}>
        <div className="bk-container">
          <h1>Request a Quote</h1>
          <p>Provide details about your project, and our team will get back to you with a comprehensive quote and timeline.</p>
        </div>
      </div>

      <div className="bk-container" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
        {isSuccess ? (
          <div style={{ padding: '32px', backgroundColor: '#eaf4e9', border: '1px solid #3F5A3C', borderRadius: '2px', color: '#3F5A3C', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 16px 0', fontFamily: 'Cabinet Grotesk Variable, sans-serif' }}>Quote Request Sent Successfully</h3>
            <p style={{ margin: 0, fontSize: '16px' }}>Thank you for requesting a quote. Our team will review your project details and get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMsg && (
              <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#fdf2f2', border: '1px solid #d32f2f', borderRadius: '2px', color: '#d32f2f' }}>
                {errorMsg}
              </div>
            )}
            <div className="bk-form-group">
              <label htmlFor="name">Full Name / Company</label>
              <input type="text" id="name" name="name" required disabled={isSubmitting} />
            </div>
            <div className="bk-form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required disabled={isSubmitting} />
            </div>
            <div className="bk-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required disabled={isSubmitting} />
            </div>
            <div className="bk-form-group">
              <label htmlFor="survey-type">Survey Type</label>
              <select id="survey-type" name="survey-type" required disabled={isSubmitting}>
                <option value="">Select a survey type</option>
                <option value="topographic">Topographic Survey</option>
                <option value="cadastral">Cadastral Survey</option>
                <option value="engineering">Engineering Survey</option>
                <option value="gis">GIS</option>
                <option value="town-planning">Town Planning</option>
              </select>
            </div>
            <div className="bk-form-group">
              <label htmlFor="location">Project Location (Address or Coordinates)</label>
              <input type="text" id="location" name="location" required disabled={isSubmitting} />
            </div>
            <div className="bk-form-group">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" name="details" required disabled={isSubmitting}></textarea>
            </div>
            <button type="submit" className="bk-btn" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request ↗'}
            </button>
          </form>
        )}
      </div>
    </SharedLayout>
  );
}
