import SharedLayout from '../components/SharedLayout';
import '../globals.css';

export default function Contact() {
  return (
    <SharedLayout>
      <div className="bk-hero bk-hero-dark">
        <div className="bk-container">
          <h1>Discuss your survey or land management project with us.</h1>
          <p>Contact our head office in Rustenburg or our satellite office in Phatsima. We operate across the North West province and South Africa.</p>
        </div>
      </div>

      <div className="bk-container" style={{ padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h3>Send us a message</h3>
            <form action="#" method="POST" style={{ marginTop: '32px' }}>
              <div className="bk-form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="bk-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="bk-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="bk-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="bk-btn">Send Message ↗</button>
            </form>
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
