"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

type Category = "all" | "topographic" | "cadastral" | "engineering"

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "topographic", label: "Topographic & Infrastructure" },
  { key: "cadastral", label: "Cadastral & Townships" },
  { key: "engineering", label: "Engineering & Mining" },
]

const projects = [
  {
    index: "01",
    category: "topographic" as Category,
    title: "Topographic Survey — Kanana Estate",
    summary: "High-accuracy ground & feature survey for municipal growth corridors.",
    discipline: "Topographic Survey",
    client: "Kanana Estate",
    year: "2019",
  },
  {
    index: "02",
    category: "cadastral" as Category,
    title: "Subdivision of Various Municipal Erven",
    summary: "Cadastral layout, boundary pegging, and statutory lodgement with the SG.",
    discipline: "Cadastral Survey",
    client: "JB Marks Local Municipality",
    year: "2019–2020",
  },
  {
    index: "03",
    category: "cadastral" as Category,
    title: "Township Establishment: Ikageleng Township",
    summary: "General plan compilation, peg placement, and community tenure regularisation.",
    discipline: "Township Establishment",
    client: "Zeerust, Ramotshere Moiloa",
    year: "2019/2020",
  },
  {
    index: "04",
    category: "cadastral" as Category,
    title: "Consolidation & Subdivision of Various Municipal Erven",
    summary: "Reconfiguration of urban parcels for civic infrastructure development.",
    discipline: "Cadastral Survey",
    client: "North West",
    year: "2019",
  },
  {
    index: "05",
    category: "topographic" as Category,
    title: "Topographic Survey & Township Establishment: Mogwase",
    summary: "Dual-phase topo base map and statutory land reform township plan.",
    discipline: "Topographic / Township Est.",
    client: "Mogwase, Bojanala District",
    year: "2019/2020",
  },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")
  const visible = projects.filter((p) => activeFilter === "all" || p.category === activeFilter)

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="w-full bg-surface border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-text-muted-dark font-mono mb-4">
                Selected Projects & Practice Portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-text-primary-dark leading-[1.15] mb-6">
                Recent survey, cadastral and spatial projects across the North West and beyond.
              </h1>
              <p className="text-base sm:text-lg text-text-muted-dark leading-relaxed max-w-3xl">
                Delivering verified spatial data, statutory approvals, and precision engineering
                surveys for local municipalities, civil engineers, developers, and private
                landowners.
              </p>
            </div>
            <div className="mt-14 pt-6 border-t border-border-light flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <span className="text-xs text-text-muted-dark uppercase tracking-wider font-mono mr-2">
                Discipline:
              </span>
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActiveFilter(f.key)}
                  className={
                    activeFilter === f.key
                      ? "text-text-primary-dark font-semibold pb-1 border-b-2 border-text-primary-dark transition-colors"
                      : "text-text-muted-dark hover:text-text-primary-dark pb-1 border-b-2 border-transparent transition-colors"
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <div className="flex items-center justify-between pb-6 border-b border-border-light mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted-dark">
                Featured Project Case Study
              </span>
              <span className="text-xs font-mono text-text-muted-dark">Kanana Estate, North West</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="bg-surface-light border border-border-light overflow-hidden">
                  <img
                    alt="High-resolution aerial topographic orthomosaic of terrain at Kanana Estate"
                    className="w-full h-auto max-h-[540px] object-cover"
                    src="/assets/framerusercontent.com/images/E6iiXV7Tc1uMxA5pkHMmBhguw.0n0mq8z.jpg"
                  />
                </div>
                <p className="text-xs font-mono text-text-muted-dark">
                  Fig. 03 — Kanana Estate survey boundary and terrain capture
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-technical-green mb-3">
                    Topographic & Infrastructure
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-normal text-text-primary-dark leading-snug mb-5">
                    Topographic Survey — Kanana Estate
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed mb-8">
                    Comprehensive 250-hectare boundary establishment, precision contour generation
                    at 1.0-meter intervals, and full spatial asset picking supporting planned
                    township expansion and municipal infrastructure rollout.
                  </p>
                  <div className="divide-y divide-border-light border-y border-border-light text-sm mb-8">
                    <div className="py-3 flex justify-between items-center">
                      <span className="text-text-muted-dark">Client</span>
                      <span className="font-medium text-text-primary-dark">Local Municipality / Developer</span>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span className="text-text-muted-dark">Location</span>
                      <span className="font-medium text-text-primary-dark">Kanana Estate, North West</span>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span className="text-text-muted-dark">Scope & Extent</span>
                      <span className="font-medium text-text-primary-dark">250 Hectares (1m Contours)</span>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span className="text-text-muted-dark">Project Status</span>
                      <span className="font-medium text-technical-green">Completed & Handed Over</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-dark text-white text-sm font-medium hover:bg-black transition-colors"
                  >
                    Request Similar Scope ↗
                  </Link>
                  <span className="text-xs font-mono text-text-muted-dark">Completed 2019</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-border-light mb-8 gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-2">
                  Engagements Archive
                </p>
                <h3 className="text-2xl sm:text-3xl font-normal text-text-primary-dark">
                  Selected Practice Engagements
                </h3>
              </div>
              <p className="text-xs font-mono text-text-muted-dark">
                Chronological record of verified survey appointments
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-12 gap-6 py-3 border-b border-border-light text-xs font-mono uppercase tracking-wider text-text-muted-dark">
              <div className="col-span-1">No.</div>
              <div className="col-span-5">Project Title & Scope</div>
              <div className="col-span-3">Discipline</div>
              <div className="col-span-2">Client / Jurisdiction</div>
              <div className="col-span-1 text-right">Year</div>
            </div>
            <div className="divide-y divide-border-light">
              {visible.map((p) => (
                <div key={p.index} className="py-5 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-baseline">
                    <div className="col-span-1 text-xs font-mono text-text-muted-dark group-hover:text-text-primary-dark transition-colors">
                      {p.index}
                    </div>
                    <div className="col-span-5">
                      <h4 className="text-base font-medium text-text-primary-dark">{p.title}</h4>
                      <p className="text-xs text-text-muted-dark mt-1">{p.summary}</p>
                    </div>
                    <div className="col-span-3 text-sm text-text-muted-dark">{p.discipline}</div>
                    <div className="col-span-2 text-sm text-text-primary-dark">{p.client}</div>
                    <div className="col-span-1 text-xs font-mono text-text-muted-dark lg:text-right">{p.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="bg-surface-light border border-border-light overflow-hidden">
                  <img
                    alt="Technical cartographic contour survey plate at 5 meter intervals"
                    className="w-full h-80 sm:h-96 object-cover"
                    src="/assets/framerusercontent.com/images/LZtra09OX6i6PmetZ1v8vgx6lw.04a08ar.jpg"
                  />
                </div>
                <p className="text-xs font-mono text-text-muted-dark">Fig. 02 — Contour interval 5 m</p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-2">
                    Practice Standard
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-normal text-text-primary-dark leading-snug">
                    Uncompromising standards backed by statutory registration and geodetic
                    instrumentation.
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border-light">
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-normal text-text-primary-dark tracking-tight">15,000+</span>
                    <span className="text-xs font-mono uppercase text-technical-green tracking-wider mt-1 mb-2">Hectares Surveyed</span>
                    <p className="text-xs text-text-muted-dark leading-relaxed">
                      Delivered across municipal jurisdictions and rural land reform areas in the North West.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-normal text-text-primary-dark tracking-tight">100%</span>
                    <span className="text-xs font-mono uppercase text-technical-green tracking-wider mt-1 mb-2">SG Compliance</span>
                    <p className="text-xs text-text-muted-dark leading-relaxed">
                      Unbroken track record of statutory acceptance with the Surveyor-General's Office.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-normal text-text-primary-dark tracking-tight">15+</span>
                    <span className="text-xs font-mono uppercase text-technical-green tracking-wider mt-1 mb-2">Years Practice</span>
                    <p className="text-xs text-text-muted-dark leading-relaxed">
                      Continuous delivery across cadastral, civil infrastructure, and mining sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="bg-surface-dark text-white p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-text-muted-light">
                    Engage Professional Surveyors
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                    Have a survey or development project in mind?
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted-light leading-relaxed max-w-2xl mt-1">
                    From initial cadastral search and topographical site verification to formal
                    statutory lodgement, our registered team provides rigorous spatial consultation.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-text-primary-dark text-sm font-medium hover:bg-neutral-200 transition-colors text-center"
                  >
                    Request a Quote ↗
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-surface-dark-elevated text-white border border-[#383b40] text-sm font-medium hover:bg-neutral-800 transition-colors text-center"
                  >
                    Contact Us ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
