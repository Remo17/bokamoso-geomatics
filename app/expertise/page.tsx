import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

const qualifications = [
  {
    title: "BSc in Land Surveying",
    org: "University of KwaZulu-Natal (UKZN)",
    tag: "DEGREE / GEO-SCIENCES",
  },
  {
    title: "National Diploma in Land Surveying",
    org: "Polytechnic of Namibia",
    tag: "GEODETIC ENGINEERING",
  },
  {
    title: "Surveyor General's Office Practice",
    org: "Cadastral examination, records processing, and statutory approval systems",
    tag: "STATUTORY EXAMINATIONS",
  },
  {
    title: "Articles & Practical Specializations",
    org: "Cadastral surveying, town and regional planning integration, aerial surveying, and photogrammetry",
    tag: "PROFESSIONAL ARTICLES",
  },
]

const disciplines = [
  {
    index: "01",
    title: "Cadastral Surveying & Land Law",
    body: "Statutory boundary demarcation, compliance with the Land Survey Act (Act No. 8 of 1997), Deeds Registries processing, servitudes, lease diagrams, and missing beacon relocations with legal admissibility.",
    tag: "Act 8 / 1997",
  },
  {
    index: "02",
    title: "Sectional Titles & Strata Plans",
    body: "Measurement and drafting of Sectional Title Plans under the Sectional Titles Act 95 of 1986. Architectural unit boundaries, common property delineations, and exclusive use areas.",
    tag: "Act 95 / 1986",
  },
  {
    index: "03",
    title: "Engineering & As-Built Surveys",
    body: "Sub-millimeter control networks, precision setting out for civil infrastructure and heavy industrial plants, road alignments, bridge abutments, structural deformation monitoring, and as-built asset verification.",
    tag: "High Precision",
  },
  {
    index: "04",
    title: "Volumetric & Mine Stockpile Surveys",
    body: "Certified stockpile volume determinations, Digital Elevation Models (DEM), pit cross-sections, cut/fill earthwork computations, and reconciliation logs for mining operations across the Bushveld Complex.",
    tag: "DEM / Volumes",
  },
  {
    index: "05",
    title: "Photogrammetry & Remote Sensing",
    body: "Aerial mapping missions, calibrated ground control networks, high-density point clouds, orthophotography generation, and LiDAR point ground classification for wide-area topographies.",
    tag: "UAV / LiDAR",
  },
  {
    index: "06",
    title: "Geographic Information Systems (GIS)",
    body: "Spatial database integration, municipal cadastral asset registries, coordinate transformations between WGS84, Hartebeesthoek94, and South African Gauss Conform (Lo) coordinate zones with attribute management.",
    tag: "Hartebeesthoek94",
  },
  {
    index: "07",
    title: "Town & Regional Planning",
    body: "Seamless transition from planning scheme conception to approved cadastral records: township establishments, consolidation applications, tenure regularization in communal lands, and municipal land audits.",
    tag: "SPLUMA Aligned",
  },
]

export default function ExpertisePage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section className="w-full bg-surface-dark text-white border-b border-border-dark">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xs font-mono tracking-[0.14em] uppercase text-text-muted-light">
                Professional Expertise & Credentials
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                  Led by a registered Professional Land Surveyor.
                </h1>
                <p className="text-lg sm:text-xl text-text-muted-light max-w-3xl">
                  Built on rigorous geomatics science, statutory knowledge, and field experience.
                  Combining regulatory insight and high-precision instrumentation to guarantee
                  spatial certainty across every survey tier.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2 p-4 bg-surface-dark-elevated border border-border-dark mt-4 lg:mt-0">
                <div className="text-xs font-mono text-technical-green uppercase tracking-wider">
                  Statutory Registration
                </div>
                <div className="text-xl font-medium text-white">SAGC Accredited</div>
                <p className="text-sm text-text-muted-light">
                  South African Geomatics Council statutory compliance under the Geomatics
                  Profession Act (Act 19 of 2013) and Land Survey Act (Act 8 of 1997).
                </p>
                <div className="text-xs font-mono text-text-muted-dark pt-2 border-t border-border-dark">
                  25.67° S · 27.24° E · Rustenburg, North West
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
            <div className="flex items-center justify-between pb-4 border-b border-border-light mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted-dark">
                Principal Leadership & Qualifications
              </span>
              <div className="text-xs font-mono text-text-muted-dark hidden md:block">
                PR. L.S. REGISTRATION · NORTH WEST JURISDICTION
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-mono uppercase text-technical-green font-medium tracking-wide">
                    Principal Geomatics Practitioner
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-normal text-text-primary-dark mt-1">
                    Kereng Senna, Pr. L.S.
                  </h2>
                  <p className="text-text-muted-dark mt-2 leading-relaxed">
                    Kereng Senna is a Professional Land Surveyor registered with the South African
                    Geomatics Council (SAGC). Bringing extensive technical expertise rooted in
                    formal geodetic scholarship and high-level regulatory experience, his career
                    bridges rigorous institutional governance within the Surveyor General's Office
                    with complex on-the-ground engineering, mining, and communal tenure
                    demarcation throughout South Africa and the wider SADC region.
                  </p>
                </div>
                <div className="flex flex-col border border-border-light bg-[#f6f3f2]">
                  <div className="px-4 py-2 bg-[#e5e2e1] border-b border-border-light flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-primary-dark font-medium">
                      Accreditation & Academic Chronology
                    </span>
                    <span className="text-xs font-mono text-text-muted-dark">SAGC VERIFIED</span>
                  </div>
                  <div className="divide-y divide-border-light">
                    {qualifications.map((q) => (
                      <div
                        key={q.title}
                        className="p-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                      >
                        <div>
                          <div className="text-[15px] text-text-primary-dark font-medium">{q.title}</div>
                          <div className="text-sm text-text-muted-dark">{q.org}</div>
                        </div>
                        <div className="text-xs font-mono text-technical-green font-medium">{q.tag}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full h-64 sm:h-72 border border-border-light overflow-hidden">
                  <img
                    alt="Cadastral boundary and geodetic reference standard map"
                    className="w-full h-full object-cover grayscale contrast-125"
                    src="/assets/framerusercontent.com/images/LZtra09OX6i6PmetZ1v8vgx6lw.04a08ar.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-surface-dark/90 px-4 py-1.5 border-t border-border-dark flex items-center justify-between">
                    <span className="text-xs font-mono text-white">
                      Fig. 02 — Cadastral boundary and geodetic reference standard
                    </span>
                    <span className="text-xs font-mono text-technical-green">SCALE 1:500</span>
                  </div>
                </div>
                <div className="p-6 bg-background-stone border border-border-light flex flex-col gap-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-primary-dark font-medium">
                    Land Stewardship & Professional Philosophy
                  </div>
                  <p className="text-text-muted-dark italic">
                    "Precision in land surveying is an ethical commitment to property rights,
                    statutory clarity, and the enduring integrity of public cadastral records. We
                    maintain rigorous standards so that every beacon placed and plan lodged stands
                    unchallenged."
                  </p>
                  <div className="pt-2 border-t border-border-light flex flex-col gap-1">
                    <div className="text-sm font-medium text-text-primary-dark">Kereng Senna, Pr. L.S.</div>
                    <div className="text-xs font-mono text-text-muted-dark">Principal Land Surveyor · Bokamoso Geomatics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-border-light pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted-dark">
                  Technical Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-text-primary-dark mt-1">
                  Core Disciplines of Practice
                </h2>
              </div>
              <p className="text-sm text-text-muted-dark max-w-md">
                Executing under South African statutory frameworks and verified survey procedures
                from initial geodetic network control to final Surveyor General approvals.
              </p>
            </div>
            <div className="flex flex-col border-t border-border-light divide-y divide-border-light bg-surface-light">
              {disciplines.map((d) => (
                <div
                  key={d.index}
                  className="p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-[#f6f3f2] transition-colors"
                >
                  <div className="flex items-baseline gap-4 lg:w-1/3">
                    <span className="text-xs font-mono text-technical-green font-medium">{d.index}</span>
                    <h3 className="text-xl font-medium text-text-primary-dark">{d.title}</h3>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-text-muted-dark">{d.body}</p>
                  </div>
                  <div className="lg:w-1/6 flex justify-end">
                    <span className="text-xs font-mono px-2 py-1 bg-[#e5e2e1] border border-border-light text-text-muted-dark uppercase">
                      {d.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted-dark">
              Professional Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-text-primary-dark mb-10 mt-1">
              Quality Assurance & Peer Review Protocol
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 flex flex-col border border-border-light bg-white">
                <div className="bg-surface-dark text-white p-4 flex items-center justify-between border-b border-border-dark">
                  <span className="text-xs font-mono uppercase tracking-wider text-technical-green">
                    Survey Rigor & Equipment Calibrations
                  </span>
                  <span className="text-xs font-mono text-text-muted-dark">SANAS TRACEABLE</span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-text-muted-dark leading-relaxed">
                    Our practice operates in full adherence to national land surveying standards
                    and statutory provisions. Every piece of optical and satellite
                    equipment—including dual-frequency GNSS receivers and high-precision robotic
                    total stations—undergoes regular calibration against certified baseline
                    pillars.
                  </p>
                  <p className="text-text-muted-dark leading-relaxed">
                    Structured internal skills transfer and regular technical workshops maintain
                    an uncompromising culture of precision across all survey technicians and
                    drafting personnel.
                  </p>
                  <div className="pt-2 border-t border-border-light grid grid-cols-2 gap-2 text-xs font-mono text-text-muted-dark">
                    <div>FIELDWORK TOLERANCE: CLASS A</div>
                    <div>DATUM: HARTEBEESTHOEK94</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col border border-border-light bg-[#f6f3f2]">
                <div className="bg-[#e5e2e1] text-text-primary-dark p-4 flex items-center justify-between border-b border-border-light">
                  <span className="text-xs font-mono uppercase tracking-wider text-technical-green font-medium">
                    Independent Peer Review Protocol
                  </span>
                  <span className="text-xs font-mono text-text-muted-dark">VERIFICATION AUDIT</span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-text-muted-dark leading-relaxed">
                    Before any survey plan, diagram, or compilation is submitted for client
                    delivery or lodged with the Surveyor General's Office, it must pass through
                    our multi-step verification protocol:
                  </p>
                  <ul className="flex flex-col gap-3 text-text-muted-dark">
                    <li className="flex items-start gap-3">
                      <span className="text-xs font-mono text-technical-green font-medium mt-0.5">01</span>
                      <span>Independent verification of all raw field observations, dual-setup checks, and GNSS baseline vectors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xs font-mono text-technical-green font-medium mt-0.5">02</span>
                      <span>Rigorous mathematical closure checks, angular misclosure computations, and least-squares coordinate adjustments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xs font-mono text-technical-green font-medium mt-0.5">03</span>
                      <span>Peer technical review conducted by senior personnel independent of the initial project field team.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xs font-mono text-technical-green font-medium mt-0.5">04</span>
                      <span>Pre-submission audit against statutory regulation templates and Deeds Registry requirements.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border-dark">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted-light">
                  Project Engagement
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-white mb-2 mt-1">
                  Consult our registered geomatics team for your project.
                </h2>
                <p className="text-text-muted-light">
                  Whether demanding statutory cadastral lodgements, extensive topographic surveys,
                  or construction control, our practice ensures certified accuracy from inception.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                <Link
                  href="/request-a-quote"
                  className="px-6 py-2.5 bg-white text-text-primary-dark font-medium hover:bg-[#e5e2e1] transition-colors border border-white whitespace-nowrap"
                >
                  Request a Quote ↗
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-transparent text-white font-medium hover:bg-surface-dark-elevated transition-colors border border-border-dark whitespace-nowrap"
                >
                  Contact Us ↗
                </Link>
              </div>
            </div>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-text-muted-light text-xs font-mono">
              <div>TELEPHONE: 061 502 7201 / 076 534 6929</div>
              <div>DIRECT EMAIL: kerengsenna@gmail.com</div>
              <div className="sm:text-right">REGUS BUSINESS PARK, RUSTENBURG, 0299</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
