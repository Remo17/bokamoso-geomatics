import SharedLayout from '../components/SharedLayout';
import '../globals.css';

export default function RequestQuote() {
  return (
    <SharedLayout>
      <div className="bk-hero" style={{ backgroundColor: '#fff' }}>
        <div className="bk-container">
          <h1>Request a Quote</h1>
          <p>Provide details about your project, and our team will get back to you with a comprehensive quote and timeline.</p>
        </div>
      </div>

      <div className="bk-container" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <form action="#" method="POST">
          <div className="bk-form-group">
            <label htmlFor="name">Full Name / Company</label>
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
            <label htmlFor="survey-type">Survey Type</label>
            <select id="survey-type" name="survey-type" required>
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
            <input type="text" id="location" name="location" required />
          </div>
          <div className="bk-form-group">
            <label htmlFor="details">Project Details</label>
            <textarea id="details" name="details" required></textarea>
          </div>
          <button type="submit" className="bk-btn" style={{ width: '100%' }}>Submit Request ↗</button>
        </form>
      </div>
    </SharedLayout>
  );
}
