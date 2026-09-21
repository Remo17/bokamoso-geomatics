"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const footerNavLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
  { href: "/request-a-quote", label: "Request a Quote ↗" },
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-surface-dark text-white border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <span className="font-bold text-sm tracking-[0.16em] uppercase text-white block mb-4 font-cabinet-grotesk">
              BOKAMOSO GEOMATICS
            </span>
            <p className="text-xs text-text-muted-light leading-relaxed mb-4">
              Professional geomatics and land surveying services — cadastral, engineering and
              topographic surveys, GIS, land management and town planning.
            </p>
            <span className="text-xs text-[#716E67]">25.67° S · 27.24° E</span>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted-light font-semibold mb-3">
              Head Office
            </h4>
            <p className="text-xs text-white leading-relaxed">
              Regus Business Park
              <br />
              214 Beyers Naude Dr
              <br />
              Rustenburg, 0299
              <br />
              North West, South Africa
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted-light font-semibold mb-3">
              Satellite Office
            </h4>
            <p className="text-xs text-white leading-relaxed">
              Stand 152
              <br />
              Phatsima Township
              <br />
              Rustenburg, 0351
              <br />
              North West, South Africa
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted-light font-semibold mb-3">
              Contact Channels
            </h4>
            <div className="text-xs space-y-1.5 text-white">
              <div>
                <a className="hover:text-white text-text-muted-light transition-colors" href="tel:0615027201">
                  061 502 7201
                </a>{" "}
                /{" "}
                <a className="hover:text-white text-text-muted-light transition-colors" href="tel:0765346929">
                  076 534 6929
                </a>
              </div>
              <div>
                <a
                  className="text-text-muted-light hover:text-white transition-colors"
                  href="mailto:kerengsenna@gmail.com"
                >
                  kerengsenna@gmail.com
                </a>
              </div>
              <div className="text-[#716E67] pt-1">Mon – Fri · 07:30 – 17:00 SAST</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted-light">
          <nav className="flex flex-wrap items-center gap-6">
            {footerNavLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "text-white font-medium" : "hover:text-white transition-colors"}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div>© Bokamoso Geomatics · Rustenburg, North West, South Africa</div>
        </div>
      </div>
    </footer>
  )
}
