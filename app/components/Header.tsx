"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-surface-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-sm tracking-[0.16em] uppercase text-text-primary-dark font-cabinet-grotesk">
            BOKAMOSO GEOMATICS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-technical-green font-semibold underline underline-offset-8 decoration-2 decoration-technical-green"
                    : "text-text-muted-dark hover:text-text-primary-dark transition-colors"
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-surface-dark text-white text-xs tracking-wider uppercase font-medium hover:bg-surface-dark-elevated transition-colors"
          >
            Request a Quote ↗
          </Link>
        </div>
      </div>
    </header>
  )
}
