"use client";
import { useState } from 'react';
import SharedLayout from '../components/SharedLayout';
import '../globals.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      source: 'contact',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
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
      <div className="bk-hero bk-hero-dark">
        <div className="bk-container">
          <h1>Discuss your survey or land management project with us.</h1>
          <p>Contact our head office in Rustenburg or our satellite office in Phatsima. We operate across the North West province and South Africa.</p>
        </div>
      </div>

      <div className="bk-container" style={{ padding: '80px 40px' }}>
        <div className="bk-contact-grid" style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%", overflowX: "hidden", boxSizing: "border-box" }}>
          <div>
            <h3>Send us a message</h3>
            {isSuccess ? (
              <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#eaf4e9', border: '1px solid #3F5A3C', borderRadius: '2px', color: '#3F5A3C' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Inquiry Sent Successfully</h4>
                <p style={{ margin: 0 }}>Thank you for reaching out to Bokamoso Geomatics. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
                {errorMsg && (
                  <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#fdf2f2', border: '1px solid #d32f2f', borderRadius: '2px', color: '#d32f2f' }}>
                    {errorMsg}
                  </div>
                )}
                <div className="bk-form-group">
                  <label htmlFor="name">Full Name</label>
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
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required disabled={isSubmitting}></textarea>
                </div>
                <button type="submit" className="bk-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : 'Send Message ↗'}
                </button>
              </form>
            )}
          </div>

          <div>
            <h3>Contact Information</h3>
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3F5A3C' }}>Head Office</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>Regus Business Park, 214 Beyers Naude Dr<br />Rustenburg, 0299</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3F5A3C' }}>Satellite Office</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>Stand 152, Phatsima Township<br />Rustenburg, 0351</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3F5A3C' }}>Telephone</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}><a href="tel:0615027201">061 502 7201</a><br /><a href="tel:0765346929">076 534 6929</a></p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3F5A3C' }}>Email</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}><a href="mailto:kerengsenna@gmail.com">kerengsenna@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
