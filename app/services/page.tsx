import type { Metadata } from "next"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Services | Geomatics & Land Surveying | Bokamoso Geomatics",
  description:
    "Professional geomatics services including topographic surveys, cadastral surveys, engineering surveys, GIS mapping, and land management from Rustenburg, North West.",
}

const disciplines = [
  {
    index: "01",
    title: "Topographic Surveys",
    summary:
      "Survey and mapping of existing infrastructure, contours, and natural and man-made features.",
    scope:
      "Comprehensive surface data acquisition incorporating digital elevation models, detail contours with configurable intervals (0.25m to 2m), drainage paths, overhead lines, surface services, and boundary fences.",
    deliverables:
      "AutoCAD Civil 3D DWG/DXF models, contour plots, georeferenced orthophotos, ASCII XYZ coordinate matrices, and complete survey field reports.",
    applications: [
      "Civil design and bulk earthworks",
      "Stormwater management planning",
      "Greenfield master layout baselines",
      "Industrial and mining expansions",
    ],
  },
  {
    index: "02",
    title: "Engineering Surveys",
    summary:
      "Setting out of roads and engineering structures, establishment of engineering control and benchmarks, and volumetric surveys including mine stockpiles.",
    scope:
      "Millimetre-accurate construction alignment, road centerlines, sewer and water reticulation pegging, cut-and-fill quantity calculations, and independent volumetric audit reports for bulk earthmoving and mining pits.",
    deliverables:
      "Certified volumetric calculation certificates, setting-out logs, cross-section drawings, as-built compliance plans, and primary control data.",
    applications: [
      "Roads, culverts & bridge alignment",
      "Mining stockpile reconciliations",
      "Primary control network ties",
      "Contractor payment certifications",
    ],
  },
  {
    index: "03",
    title: "Cadastral Surveys",
    summary:
      "Subdivision and consolidation, township establishment, servitudes and lease diagrams, sectional titles, beacon relocation and boundary confirmation, and property-area confirmation under the Land Survey Act (Act 8 of 1997).",
    scope:
      "Statutory property surveys performed strictly by registered Professional Land Surveyors. Managing all aspects of field demarcation, pegging, beacon replacement, and formal lodgement with the Surveyor-General.",
    deliverables:
      "Surveyor-General approved diagrams, General Plans (GP), sectional title sheets, servitude endorsements, and certified beacon verification notices.",
    applications: [
      "Property subdivisions & consolidations",
      "Formal township pegging & registration",
      "Servitude corridors & leases",
      "Boundary dispute resolution",
    ],
  },
  {
    index: "04",
    title: "Geographic Information Systems (GIS)",
    summary: "GIS data collection and capturing, GIS mapping, and data manipulation and analysis.",
    scope:
      "End-to-end spatial data engineering from high-precision mobile field collection to enterprise spatial database architectures. Integrating utility assets, infrastructure networks, land use zones, and thematic environmental data.",
    deliverables:
      "Enterprise ESRI Geodatabases, Shapefiles, GeoTIFF imagery sets, spatial suitability analytical models, and custom cartographic thematic maps.",
    applications: [
      "Municipal infrastructure asset registers",
      "Cadastral reconciliation & rates audits",
      "Environmental sensitivity analyses",
      "Utility reticulation network mapping",
    ],
  },
  {
    index: "05",
    title: "Land Management & Town Planning",
    summary:
      "Land audits, township establishments, subdivisions and consolidations, and land reform projects including tenure upgrades.",
    scope:
      "Guiding statutory spatial approvals and land tenure reform initiatives. We undertake municipal land audits, informal settlement regularisation, spatial development frameworks (SDF) alignment, and rezoning motivations.",
    deliverables:
      "Land audit registers, SPLUMA compliant application dossiers, layout design drawings, and title regularisation verification schedules.",
    applications: [
      "Informal settlement upgrading",
      "Title deed tenure regularisation",
      "Municipal land governance",
      "Township development consents",
    ],
  },
]

const qualityPillars = [
  {
    letter: "A",
    title: "Survey standards",
    body: "Field observations and reductions are carried out in full compliance with the Land Survey Act, SGC guidelines, and SAGC code of professional conduct.",
  },
  {
    letter: "B",
    title: "Independent review",
    body: "All field closures, coordinate transformations, and draft cadastral diagrams undergo secondary recalculation by an autonomous survey technician.",
  },
  {
    letter: "C",
    title: "Skills transfer",
    body: "Institutional geodetic expertise is systematically transferred within the team through structured on-site apprenticeships and software mastery.",
  },
  {
    letter: "D",
    title: "Workshops & demonstrations",
    body: "Regular calibration clinics, peer seminars, and practical equipment demonstrations maintain our technical standard at industry forefront.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section className="border-b border-border-light bg-surface py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-text-muted-dark mb-6">
                  <span className="font-semibold text-technical-green">Geomatics</span>
                  <span>·</span>
                  <span>Land Surveying</span>
                  <span>·</span>
                  <span>Rustenburg, North West</span>
                  <span>·</span>
                  <span className="text-text-primary-dark font-medium">25.67° S · 27.24° E</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary-dark leading-[1.1] mb-6 font-cabinet-grotesk">
                  Survey, map and manage land.
                </h1>
                <p className="text-lg sm:text-xl text-text-muted-dark leading-relaxed max-w-2xl mb-10">
                  Five core disciplines covering the full cycle of land information — from field
                  measurement and cadastral definition to GIS and town planning.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center justify-center px-6 py-3 bg-surface-dark text-white text-sm font-medium hover:bg-surface-dark-elevated transition-colors"
                  >
                    Request a Quote ↗
                  </Link>
                  <a
                    href="#disciplines"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border-light bg-surface-light text-text-primary-dark text-sm font-medium hover:bg-background-stone transition-colors"
                  >
                    Explore Disciplines ↓
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-border-light bg-white p-3 shadow-sm">
                  <img
                    alt="Topographic survey contour map showing elevation lines and terrain features"
                    className="w-full h-auto object-cover aspect-[4/3] border border-border-light"
                    src="/assets/framerusercontent.com/images/E6iiXV7Tc1uMxA5pkHMmBhguw.0n0mq8z.jpg"
                  />
                  <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-text-muted-dark">
                    <span>Fig. 01 — Topographic survey and contour delineation standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background-stone border-b border-border-light" id="disciplines">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-light mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-technical-green font-semibold block mb-2">
                  Our Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-text-primary-dark font-cabinet-grotesk">
                  Five Core Disciplines
                </h2>
              </div>
              <p className="text-sm text-text-muted-dark max-w-md">
                Providing comprehensive survey, cartographic, and statutory property consultancy
                services for municipalities, developers, and mining operations.
              </p>
            </div>
            <div className="space-y-6">
              {disciplines.map((d) => (
                <div
                  key={d.index}
                  className="bg-white border border-border-light p-8 md:p-10 transition-shadow hover:shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                      <span className="text-xs uppercase tracking-widest text-technical-green font-semibold block mb-2">
                        {d.index} / Discipline
                      </span>
                      <h3 className="text-2xl font-semibold text-text-primary-dark mb-3 font-cabinet-grotesk">{d.title}</h3>
                      <p className="text-sm text-text-muted-dark leading-relaxed">{d.summary}</p>
                    </div>
                    <div className="lg:col-span-5 space-y-4">
                      <h4 className="text-xs uppercase tracking-wider text-text-primary-dark font-semibold">
                        Scope & Deliverables
                      </h4>
                      <p className="text-sm text-text-muted-dark leading-relaxed">{d.scope}</p>
                      <div className="pt-2 text-xs text-text-muted-dark">
                        <strong className="text-text-primary-dark font-medium">Deliverables:</strong>{" "}
                        {d.deliverables}
                      </div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border-light pt-6 lg:pt-0 lg:pl-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-text-primary-dark font-semibold mb-2">
                          Key Applications
                        </h4>
                        <ul className="text-xs text-text-muted-dark space-y-1.5 leading-relaxed">
                          {d.applications.map((a) => (
                            <li key={a}>• {a}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6">
                        <Link
                          href="/contact"
                          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-text-primary-dark hover:text-technical-green transition-colors"
                        >
                          Request Consultation ↗
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest text-technical-green font-semibold block mb-2">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-text-primary-dark mb-4 font-cabinet-grotesk">
                Every survey is reviewed independently before submission.
              </h2>
              <p className="text-base text-text-muted-dark leading-relaxed">
                Quality assurance at Bokamoso rests on strict adherence to national geodetic
                standards, structured skills transfer, and dual computation verification before
                client delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityPillars.map((p) => (
                <div key={p.letter} className="border-t-2 border-surface-dark pt-6">
                  <span className="text-2xl font-bold text-text-primary-dark block mb-3">{p.letter}</span>
                  <h3 className="text-base font-semibold text-text-primary-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted-dark leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="border border-border-light bg-white p-8 md:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs uppercase tracking-widest text-technical-green font-semibold block mb-2">
                    Get in Touch
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-text-primary-dark mb-4 font-cabinet-grotesk">
                    Discuss your survey or land management project with us.
                  </h2>
                  <p className="text-base text-text-muted-dark leading-relaxed mb-8 max-w-xl">
                    From individual cadastral boundary determinations to multi-hectare
                    infrastructure contours and municipal GIS registries, our registered surveyors
                    are available to consult on technical specifications, timelines, and statutory
                    requirements.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/request-a-quote"
                      className="inline-flex items-center justify-center px-6 py-3 bg-surface-dark text-white text-sm font-medium hover:bg-surface-dark-elevated transition-colors"
                    >
                      Request a Quote ↗
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border border-border-light bg-background-stone text-text-primary-dark text-sm font-medium hover:bg-border-light transition-colors"
                    >
                      Contact Us ↗
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5 bg-background-stone p-8 border border-border-light space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-muted-dark block mb-1">
                      Telephone
                    </span>
                    <div className="text-base font-semibold text-text-primary-dark space-x-2">
                      <a className="hover:text-technical-green transition-colors" href="tel:0615027201">
                        061 502 7201
                      </a>
                      <span className="text-text-muted-dark font-normal">/</span>
                      <a className="hover:text-technical-green transition-colors" href="tel:0765346929">
                        076 534 6929
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-muted-dark block mb-1">
                      Email Inquiries
                    </span>
                    <a
                      className="text-sm font-medium text-text-primary-dark hover:text-technical-green transition-colors"
                      href="mailto:kerengsenna@gmail.com"
                    >
                      kerengsenna@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-muted-dark block mb-1">
                      Head Office
                    </span>
                    <p className="text-sm text-text-primary-dark leading-relaxed">
                      Regus Business Park, 214 Beyers Naude Dr
                      <br />
                      Rustenburg, 0299, North West
                    </p>
                  </div>
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
