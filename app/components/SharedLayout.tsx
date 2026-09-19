import React from 'react';
import Header from './Header';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bk-wrapper">
      <Header />

      <main>
        {children}
      </main>

      <footer className="bk-container bk-footer">
        <div>
          <div className="bk-wordmark" style={{ marginBottom: '16px' }}>BOKAMOSO GEOMATICS</div>
          <p style={{ opacity: 0.7, maxWidth: '300px' }}>
            Professional geomatics and land surveying services — cadastral, engineering and topographic surveys, GIS, land management and town planning.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px', color: '#16181A' }}>Contact</h4>
          <p><a href="tel:0615027201">061 502 7201</a></p>
          <p><a href="tel:0765346929">076 534 6929</a></p>
          <p><a href="mailto:kerengsenna@gmail.com">kerengsenna@gmail.com</a></p>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px', color: '#16181A' }}>Head Office</h4>
          <p>Regus Business Park</p>
          <p>214 Beyers Naude Dr</p>
          <p>Rustenburg, 0299</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px', color: '#16181A' }}>Satellite Office</h4>
          <p>Stand 152</p>
          <p>Phatsima Township</p>
          <p>Rustenburg, 0351</p>
        </div>
      </footer>
    </div>
  );
}
