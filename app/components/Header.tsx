"use client"

import { useState } from "react"
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
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-surface-light">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-cabinet-grotesk text-sm font-bold uppercase tracking-[0.16em] text-text-primary-dark">
            BOKAMOSO GEOMATICS
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-semibold text-technical-green underline decoration-2 decoration-technical-green underline-offset-8"
                  : "text-text-muted-dark transition-colors hover:text-text-primary-dark"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center bg-surface-dark px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-surface-dark-elevated"
          >
            Request a Quote ↗
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-border-light text-surface-dark transition-colors hover:bg-surface-dim md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>

          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-px w-full bg-surface-dark transition-transform ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-surface-dark transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-surface-dark transition-transform ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border-light bg-surface-light md:hidden"
        >
          <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive(link.href)
                      ? "border-b border-border-light py-4 text-sm font-semibold text-technical-green"
                      : "border-b border-border-light py-4 text-sm text-text-primary-dark transition-colors hover:text-technical-green"
                  }
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/request-a-quote"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-surface-dark px-5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-surface-dark-elevated"
              >
                Request a Quote ↗
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
