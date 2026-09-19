"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bk-container bk-header">
      <div className="bk-wordmark">BOKAMOSO GEOMATICS</div>
      <nav className="bk-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link href="/expertise" className={pathname === '/expertise' ? 'active' : ''}>Expertise</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        {pathname !== '/request-a-quote' && (
          <Link href="/request-a-quote" className="bk-btn" style={{ minHeight: 'auto', padding: '8px 16px' }}>Request a Quote ↗</Link>
        )}
      </nav>
    </header>
  );
}
