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
    href: "/projects/topographic-survey-—-kanana-estate",
  },
  {
    index: "02",
    category: "cadastral" as Category,
    title: "Subdivision of Various Municipal Erven",
    summary: "Cadastral layout, boundary pegging, and statutory lodgement with the SG.",
    discipline: "Cadastral Survey",
    href: "/projects/subdivision-of-various-municipal-erven",
  },
  {
    index: "03",
    category: "cadastral" as Category,
    title: "Township Establishment: Ikageleng Township",
    summary: "General plan compilation, peg placement, and community tenure regularisation.",
    discipline: "Township Establishment",
    href: "/projects/township-establishment-ikageleng-township",
  },
  {
    index: "04",
    category: "cadastral" as Category,
    title: "Consolidation & Subdivision of Various Municipal Erven",
    summary: "Reconfiguration of urban parcels for civic infrastructure development.",
    discipline: "Cadastral Survey",
    href: "/projects/consolidation-subdivision-of-various-municipal-erven",
  },
  {
    index: "05",
    category: "topographic" as Category,
    title: "Topographic Survey & Township Establishment: Mogwase",
    summary: "Dual-phase topo base map and statutory land reform township plan.",
    discipline: "Topographic / Township Est.",
    href: "/projects/topographic-survey-township-establishment-mogwase",
  },
  {
    index: "06",
    category: "topographic" as Category,
    title: "Topographic Survey: Makouspan",
    summary: "Topographic survey and feature mapping.",
    discipline: "Topographic Survey",
    href: "/projects/topographic-survey-makouspan",
  },
  {
    index: "07",
    category: "cadastral" as Category,
    title: "Beacon Relocation Erf 20478",
    summary: "Boundary beacon relocation and cadastral verification.",
    discipline: "Cadastral Survey",
    href: "/projects/beacon-relocation-erf-20478",
  },
  {
    index: "08",
    category: "cadastral" as Category,
    title: "Subdivision of a Farm 343 IT",
    summary: "Farm subdivision and cadastral survey.",
    discipline: "Cadastral Survey",
    href: "/projects/subdivision-of-a-farm-343-it",
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
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-text-muted-dark font-mono mb-4">
                Selected Projects & Practice Portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-text-primary-dark leading-[1.15] mb-6 font-cabinet-grotesk">
                Recent survey, cadastral and spatial projects across the North West and beyond.
              </h1>
              <p className="text-base sm:text-lg text-text-muted-dark leading-relaxed max-w-3xl">
                Delivering verified spatial data, statutory approvals, and precision engineering
                surveys for local municipalities, civil engineers, developers, and private
                landowners.
              </p>
            </div>
            <div className="mt-14 pt-6 border-t border-border-light">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                <span className="text-xs text-text-muted-dark uppercase tracking-wider font-mono whitespace-nowrap">
                  Discipline:
                </span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {filters.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveFilter(f.key)}
                      className={
                        activeFilter === f.key
                          ? "text-text-primary-dark font-semibold pb-1 border-b-2 border-text-primary-dark transition-colors text-sm"
                          : "text-text-muted-dark hover:text-text-primary-dark pb-1 border-b-2 border-transparent transition-colors text-sm"
                      }
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
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
                  <h2 className="text-2xl sm:text-3xl font-normal text-text-primary-dark leading-snug mb-5 font-cabinet-grotesk">
                    Topographic Survey — Kanana Estate
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed mb-8">
                    High-accuracy ground & feature survey for municipal growth corridors.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/projects/topographic-survey-—-kanana-estate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-dark text-white text-sm font-medium hover:bg-black transition-colors"
                  >
                    View Project ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-border-light mb-8 gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-2">
                  Engagements Archive
                </p>
                <h3 className="text-2xl sm:text-3xl font-normal text-text-primary-dark font-cabinet-grotesk">
                  Selected Practice Engagements
                </h3>
              </div>
              <p className="text-xs font-mono text-text-muted-dark">
                Chronological record of verified survey appointments
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-12 gap-6 py-3 border-b border-border-light text-xs font-mono uppercase tracking-wider text-text-muted-dark">
              <div className="col-span-1">No.</div>
              <div className="col-span-7">Project Title & Scope</div>
              <div className="col-span-4">Discipline</div>
            </div>
            <div className="divide-y divide-border-light">
              {visible.map((p) => (
                <Link
                  key={p.index}
                  href={p.href}
                  className="py-5 group block hover:bg-surface transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-baseline">
                    <div className="col-span-1 text-xs font-mono text-text-muted-dark group-hover:text-text-primary-dark transition-colors">
                      {p.index}
                    </div>
                    <div className="col-span-7">
                      <h4 className="text-base font-medium text-text-primary-dark group-hover:underline">{p.title}</h4>
                      <p className="text-xs text-text-muted-dark mt-1">{p.summary}</p>
                    </div>
                    <div className="col-span-4 text-sm text-text-muted-dark">{p.discipline}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="bg-surface-light border border-border-light overflow-hidden">
                  <img
                    alt="Technical cartographic contour survey plate at 5 meter intervals"
                    className="w-full h-64 sm:h-80 object-cover"
                    src="/assets/framerusercontent.com/images/LZtra09OX6i6PmetZ1v8vgx6lw.04a08ar.jpg"
                  />
                </div>
                <p className="text-xs font-mono text-text-muted-dark">Fig. 02 — Contour interval 5 m</p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-2">
                    Practice Standard
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-normal text-text-primary-dark leading-snug font-cabinet-grotesk">
                    Uncompromising standards backed by statutory registration and geodetic
                    instrumentation.
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed">
                  Work is carried out in accordance with applicable survey standards and independently reviewed before submission to clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
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
                <div className="lg:col-span-4 flex justify-end">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-text-primary-dark text-sm font-medium hover:bg-neutral-200 transition-colors text-center"
                  >
                    Request a Quote ↗
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
