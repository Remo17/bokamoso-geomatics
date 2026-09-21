"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const infoSteps = [
  {
    index: "01",
    title: "Quotation Turnaround",
    body: "Formal fee estimates delivered within 24-48 hours upon receipt of cadastral erf / farm details and preliminary site parameters.",
  },
  {
    index: "02",
    title: "Scope Assessment",
    body: "Every project is evaluated personally by our Professional Land Surveyor against Surveyor-General records, existing SG diagrams, and topographical constraints.",
  },
  {
    index: "03",
    title: "Statutory Compliant Structure",
    body: "Fee proposals reflect standard tariffs, field mobilization, survey instrument time (GNSS RTK & Total Station), statutory SG examination fees, and digital CAD/GIS outputs.",
  },
]

const serviceOptions = [
  { value: "topographic", label: "Topographic & Contours Survey" },
  { value: "subdivision", label: "Cadastral Subdivision / Consolidation" },
  { value: "township", label: "Township Establishment" },
  { value: "boundary", label: "Beacon Relocation & Boundary Verification" },
  { value: "engineering", label: "Engineering Setting Out & Controls" },
  { value: "volumetric", label: "Mine Stockpile & Volumetric Analysis" },
  { value: "sectional", label: "Sectional Title / Lease Diagrams" },
  { value: "gis", label: "GIS Mapping & Spatial Asset Capture" },
]

const deliverables = [
  {
    title: "Cadastre",
    heading: "Surveyor-General Lodgements",
    body: "Preparation and submission of Cadastral Diagrams and General Plans directly to the SG Office.",
    note: "Includes deed verification & beacon certification.",
  },
  {
    title: "Engineering",
    heading: "Precision Coordinate Models",
    body: "Dual-frequency GNSS base-and-rover field observations referenced to Hartebeesthoek94 (Lo system).",
    note: "Millimeter-level accuracy for civil & structural layout.",
  },
  {
    title: "GIS & Mapping",
    heading: "Digital Spatial Integration",
    body: "Standard CAD/GIS formats including DWG, DXF, DTM, ESRI shapefiles, and GeoTIFFs.",
    note: "Compatible with AutoCAD Civil 3D, ArcGIS & QGIS.",
  },
]

export default function RequestAQuotePage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-wider text-technical-green font-medium mb-2">
                Professional Survey Proposal
              </p>
              <h1 className="text-3xl md:text-5xl font-normal tracking-tight text-text-primary-dark leading-tight font-cabinet-grotesk">
                Request a Quote for Your Geomatics or Land Project.
              </h1>
              <p className="text-lg text-text-muted-dark mt-4 leading-relaxed">
                Provide your project specifications, property identifiers, and required survey
                deliverables. We prepare transparent, detailed fee proposals aligned with
                statutory survey standards.
              </p>
              <div className="mt-6 pt-4 border-t border-border-light flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-text-muted-dark">
                <span className="text-text-primary-dark font-medium">Turnaround: 24-48 Hours</span>
                <span className="text-border-light">·</span>
                <span>SAGC Registered Practice</span>
                <span className="text-border-light">·</span>
                <span>Rustenburg & North West Jurisdiction</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white p-6 border border-border-light">
                  <h2 className="text-xl font-medium text-text-primary-dark mb-4">What to Expect</h2>
                  <div className="space-y-4">
                    {infoSteps.map((s, i) => (
                      <div key={s.index}>
                        <div className="flex gap-4 items-start">
                          <span className="text-xs font-mono text-technical-green font-medium pt-0.5">{s.index}</span>
                          <div>
                            <h3 className="font-semibold text-text-primary-dark">{s.title}</h3>
                            <p className="text-text-muted-dark mt-1">{s.body}</p>
                          </div>
                        </div>
                        {i < infoSteps.length - 1 && <div className="h-px bg-border-light w-full mt-4" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-border-light p-6">
                  <h3 className="text-lg font-medium text-text-primary-dark">
                    Have an urgent boundary dispute or municipal tender?
                  </h3>
                  <p className="text-text-muted-dark mt-1 mb-4">
                    For expedited surveys, mining reconciliations, or urgent court boundary
                    matters, contact our field offices directly:
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between py-1 border-b border-border-light">
                      <span className="text-text-muted-dark">Principal Surveyor (Cell 1)</span>
                      <a className="font-medium text-text-primary-dark hover:text-technical-green transition-colors" href="tel:0615027201">
                        061 502 7201
                      </a>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border-light">
                      <span className="text-text-muted-dark">Field Operations (Cell 2)</span>
                      <a className="font-medium text-text-primary-dark hover:text-technical-green transition-colors" href="tel:0765346929">
                        076 534 6929
                      </a>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-text-muted-dark">Official Enquiries</span>
                      <a className="font-medium text-text-primary-dark hover:text-technical-green transition-colors" href="mailto:kerengsenna@gmail.com">
                        kerengsenna@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border border-border-light bg-white overflow-hidden">
                  <img
                    alt="Cadastral triangulation and terrain contour plan"
                    className="w-full h-56 object-cover"
                    src="/assets/framerusercontent.com/images/JB88BIQ07eV7owBXKANXwfPEeio.1gjfbmc.jpg"
                  />
                  <div className="p-3 border-t border-border-light">
                    <span className="text-xs font-mono text-text-muted-dark">
                      Fig. 01 — Cadastral triangulation and terrain standard
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white p-6 md:p-10 border border-border-light shadow-sm">
                  <div className="mb-6 pb-4 border-b border-border-light">
                    <h2 className="text-2xl font-normal text-text-primary-dark">
                      Survey Specification & Quotation Details
                    </h2>
                    <p className="text-text-muted-dark mt-2 leading-relaxed">
                      Complete the fields below with all available cadastral identifiers. All
                      data is handled under strict professional confidentiality.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-4 bg-background-stone border border-technical-green">
                      <div className="font-semibold text-sm mb-1">Quote Request Received</div>
                      <p className="text-text-muted-dark">
                        Thank you. Your project requirements have been transmitted to Kereng
                        Senna, Professional Land Surveyor. We will review the cadastral details
                        and contact you with a formal fee schedule within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      className="space-y-8"
                      onSubmit={(e) => {
                        e.preventDefault()
                        setSubmitted(true)
                      }}
                    >
                      <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary-dark">
                          Section 1: Client & Contact Particulars
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="client-name">
                              Representative / Contact Name *
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="client-name"
                              placeholder="e.g. Tshepo Molefe"
                              required
                              type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="company-name">
                              Company / Organization / Municipality
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="company-name"
                              placeholder="e.g. Bakwena Mining / Private Owner"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="email">
                              Official Email Address *
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="email"
                              placeholder="name@organization.co.za"
                              required
                              type="email"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="phone">
                              Direct Telephone Number *
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="phone"
                              placeholder="e.g. 082 000 0000"
                              required
                              type="tel"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border-light">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary-dark">
                          Section 2: Property & Location Georeference
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="municipality">
                              Municipality / District *
                            </label>
                            <select
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="municipality"
                              required
                              defaultValue=""
                            >
                              <option value="">Select Municipality...</option>
                              <option value="rustenburg">Rustenburg Local Municipality</option>
                              <option value="bojanala">Bojanala Platinum District</option>
                              <option value="jb-marks">JB Marks Local Municipality</option>
                              <option value="zeerust">Zeerust / Ramotshere Moiloa</option>
                              <option value="other-nw">Other North West</option>
                              <option value="sadc">SADC / Cross-Border</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="cadastral-id">
                              Erf No. / Farm Name & Portion No. *
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="cadastral-id"
                              placeholder="e.g. Portion 4 of Farm Paardekraal 279 JQ"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="extent">
                              Estimated Site Extent / Area
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="extent"
                              placeholder="e.g. 1 500 m² or 45 Hectares"
                              type="text"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="known-coords">
                              GPS / Lat-Long Coordinates (Optional)
                            </label>
                            <input
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="known-coords"
                              placeholder="e.g. -25.6712, 27.2421"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border-light">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary-dark">
                            Section 3: Survey Discipline & Requirements
                          </h3>
                          <p className="text-text-muted-dark mt-1">Select all required services:</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {serviceOptions.map((s) => (
                            <label
                              key={s.value}
                              className="flex items-center gap-3 p-3 bg-[#f6f3f2] border border-border-light hover:border-surface-dark transition-colors cursor-pointer"
                            >
                              <input className="h-4 w-4 border-border-light text-surface-dark" name="services" type="checkbox" value={s.value} />
                              <span className="text-text-primary-dark">{s.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border-light">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary-dark">
                          Section 4: Project Scope & Specifics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="deliverable-format">
                              Required Deliverables Format
                            </label>
                            <select
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="deliverable-format"
                              defaultValue="cad"
                            >
                              <option value="cad">AutoCAD (.DWG / .DXF) + PDF Maps</option>
                              <option value="gis">ESRI Shapefiles / Geodatabase</option>
                              <option value="dtm">DTM / Contours</option>
                              <option value="sg">Surveyor-General Lodgement Diagrams</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="timeline">
                              Target Project Commencement
                            </label>
                            <select
                              className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                              id="timeline"
                              defaultValue="immediate"
                            >
                              <option value="immediate">Immediate (Within 7 Days)</option>
                              <option value="2-4weeks">2-4 Weeks</option>
                              <option value="tender">Tender / Budgeting Stage</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-text-muted-dark uppercase mb-1.5" htmlFor="project-description">
                            Project Scope Details *
                          </label>
                          <textarea
                            className="w-full p-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:outline-none focus:border-surface-dark transition-colors"
                            id="project-description"
                            placeholder="Describe the purpose of survey, site access, any previous SG diagram numbers, or timeline requirements."
                            required
                            rows={4}
                          ></textarea>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border-light flex flex-col items-start gap-4">
                        <button
                          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-surface-dark text-white font-medium hover:bg-surface-dark-elevated transition-colors border border-surface-dark cursor-pointer"
                          type="submit"
                        >
                          Submit Quote Request ↗
                        </button>
                        <p className="text-xs text-text-muted-dark leading-relaxed">
                          All submissions are reviewed directly by registered Professional Land
                          Surveyor Kereng Senna (Pr. L.S.). Strict professional confidentiality
                          maintained.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 border-t border-border-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-normal text-text-primary-dark">Standard Deliverables & Protocols</h2>
              <p className="text-text-muted-dark mt-1">
                Conforming with the Geomatics Profession Act 19 of 2013 and Surveyor-General regulations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((d) => (
                <div key={d.title} className="p-6 bg-[#f6f3f2] border border-border-light flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-text-primary-dark mb-2">{d.title}</h3>
                    <h4 className="font-semibold text-text-primary-dark mb-2">{d.heading}</h4>
                    <p className="text-text-muted-dark">{d.body}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-border-light text-xs text-text-muted-dark">{d.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
