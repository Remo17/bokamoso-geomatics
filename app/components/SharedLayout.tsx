import React from 'react';
import Link from 'next/link';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bk-wrapper">
      <header className="bk-container bk-header">
        <div className="bk-wordmark">BOKAMOSO GEOMATICS</div>
        <nav className="bk-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/request-a-quote" className="bk-btn" style={{ minHeight: 'auto', padding: '8px 16px' }}>Request a Quote ↗</Link>
        </nav>
      </header>

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
          <h4 style={{ marginBottom: '16px' }}>Contact</h4>
          <p><a href="tel:0615027201">061 502 7201</a></p>
          <p><a href="tel:0765346929">076 534 6929</a></p>
          <p><a href="mailto:kerengsenna@gmail.com">kerengsenna@gmail.com</a></p>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px' }}>Head Office</h4>
          <p>Regus Business Park</p>
          <p>214 Beyers Naude Dr</p>
          <p>Rustenburg, 0299</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px' }}>Satellite Office</h4>
          <p>Stand 152</p>
          <p>Phatsima Township</p>
          <p>Rustenburg, 0351</p>
        </div>
      </footer>
    </div>
  );
}
