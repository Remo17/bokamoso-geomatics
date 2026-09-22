"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="w-full bg-surface-light border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-12">
            <div className="flex flex-col">
              <div className="text-[11px] text-text-muted-dark uppercase tracking-[0.12em] mb-3 font-mono">
                Rustenburg, North West · 25.67° S · 27.24° E
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-tight lg:leading-[1.18] font-normal text-text-primary-dark max-w-4xl tracking-tight font-cabinet-grotesk">
                Discuss your survey or land management project with us.
              </h1>
              <p className="text-base sm:text-lg text-text-muted-dark max-w-3xl mt-4 leading-relaxed">
                Connect with our registered surveyors in Rustenburg for consultations, fee
                estimates, boundary questions, or municipal project tenders.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border-light text-sm">
              <div>
                <span className="text-[11px] font-mono text-text-muted-dark uppercase tracking-wider block">Response Window</span>
                <span className="font-medium text-text-primary-dark mt-1 block">Within 24 Hours</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted-dark uppercase tracking-wider block">Operating Baseline</span>
                <span className="font-medium text-text-primary-dark mt-1 block">Mon–Fri · 07:30–17:00</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted-dark uppercase tracking-wider block">Principal Surveyor</span>
                <span className="font-medium text-text-primary-dark mt-1 block">Kereng Senna (PrL)</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-muted-dark uppercase tracking-wider block">Primary Location</span>
                <span className="font-medium text-text-primary-dark mt-1 block">Rustenburg, North West</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-stone py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white border border-border-light p-6 md:p-7">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted-dark mb-2">Head Office</div>
                  <h3 className="text-lg font-semibold text-text-primary-dark mb-1">Regus Business Park</h3>
                  <p className="text-sm text-text-muted-dark leading-relaxed mb-4">
                    214 Beyers Naude Dr
                    <br />
                    Rustenburg, 0299
                    <br />
                    North West Province, South Africa
                  </p>
                  <div className="text-xs font-mono text-text-muted-dark pt-3 border-t border-border-light">
                    Coordinates: 25.67° S · 27.24° E
                  </div>
                </div>

                <div className="bg-white border border-border-light p-6 md:p-7">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted-dark mb-2">Satellite Office</div>
                  <h3 className="text-lg font-semibold text-text-primary-dark mb-1">Phatsima Township Station</h3>
                  <p className="text-sm text-text-muted-dark leading-relaxed mb-4">
                    Stand 152, Phatsima Township
                    <br />
                    Rustenburg, 0351
                    <br />
                    North West Province, South Africa
                  </p>
                  <div className="text-xs font-mono text-text-muted-dark pt-3 border-t border-border-light">
                    Field Geodetic Staging Base
                  </div>
                </div>

                <div className="bg-white border border-border-light p-6 md:p-7">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted-dark mb-4">Direct Directory</div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-xs text-text-muted-dark block mb-0.5">Telephone Channels</span>
                      <div className="flex flex-col gap-1">
                        <a className="text-text-primary-dark hover:text-technical-green transition-colors font-medium" href="tel:0615027201">
                          061 502 7201 <span className="text-xs font-normal text-text-muted-dark">(Principal Land Surveyor)</span>
                        </a>
                        <a className="text-text-primary-dark hover:text-technical-green transition-colors font-medium" href="tel:0765346929">
                          076 534 6929 <span className="text-xs font-normal text-text-muted-dark">(Field Operations)</span>
                        </a>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border-light">
                      <span className="text-xs text-text-muted-dark block mb-0.5">Email</span>
                      <a className="text-text-primary-dark hover:text-technical-green transition-colors font-medium" href="mailto:kerengsenna@gmail.com">
                        kerengsenna@gmail.com
                      </a>
                    </div>
                    <div className="pt-3 border-t border-border-light">
                      <span className="text-xs text-text-muted-dark block mb-1">Operating Hours</span>
                      <div className="text-xs text-text-muted-dark space-y-1">
                        <div className="flex justify-between">
                          <span>Monday – Friday</span>
                          <span className="font-medium text-text-primary-dark">07:30 – 17:00 SAST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday & Field Deployments</span>
                          <span className="font-medium text-text-primary-dark">By Prior Arrangement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-border-light p-5">
                  <p className="text-sm text-text-muted-dark leading-normal">
                    Need detailed Erf subdivision or cadastral tariff calculation?
                  </p>
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-text-primary-dark mt-2 hover:text-technical-green transition-colors"
                  >
                    Go to Request a Quote ↗
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-border-light p-7 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-normal text-text-primary-dark tracking-tight">Send an Inquiry</h2>
                  <p className="text-sm text-text-muted-dark mt-1.5 leading-relaxed">
                    Complete the form below and our registered surveying team will respond within 24 hours.
                  </p>
                </div>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setStatus("sending")
                    const form = e.currentTarget
                    const data = new FormData(form)
                    try {
                      const res = await fetch("https://formsubmit.co/ajax/tjiaremo@gmail.com", {
                        method: "POST",
                        headers: { Accept: "application/json" },
                        body: data,
                      })
                      if (res.ok) {
                        setStatus("sent")
                        form.reset()
                      } else {
                        setStatus("error")
                      }
                    } catch {
                      setStatus("error")
                    }
                  }}
                >
                  <input type="hidden" name="_subject" value="New Contact Inquiry — Bokamoso Geomatics" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-primary-dark" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                        id="fullName"
                        name="fullName"
                        placeholder="Adv. Thabo Mokoena"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-primary-dark" htmlFor="orgName">
                        Organization / Company (Optional)
                      </label>
                      <input
                        className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                        id="orgName"
                        name="orgName"
                        placeholder="Municipality or Private Developer"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-primary-dark" htmlFor="emailAddress">
                        Email Address *
                      </label>
                      <input
                        className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="name@domain.co.za"
                        required
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-text-primary-dark" htmlFor="phoneContact">
                        Phone Number *
                      </label>
                      <input
                        className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                        id="phoneContact"
                        name="phoneContact"
                        placeholder="061 502 7201"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-text-primary-dark" htmlFor="inquiryType">
                      Subject / Discipline of Interest *
                    </label>
                    <select
                      className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                      id="inquiryType"
                        name="inquiryType"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">Select discipline...</option>
                      <option value="topographic">Topographic Survey</option>
                      <option value="cadastral">Cadastral Survey</option>
                      <option value="engineering">Engineering Survey</option>
                      <option value="gis">GIS & Mapping</option>
                      <option value="town-planning">Land Management & Town Planning</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-text-primary-dark" htmlFor="propertyRef">
                      Property or Erf / Farm Reference (Optional)
                    </label>
                    <input
                      className="w-full h-11 px-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors"
                      id="propertyRef"
                        name="propertyRef"
                      placeholder="e.g. Erf 4022 Rustenburg Ext 9 or Portion 12 Farm Paardekraal"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-text-primary-dark" htmlFor="inquiryMessage">
                      Message / Project Details *
                    </label>
                    <textarea
                      className="w-full p-3.5 bg-white border border-border-light text-text-primary-dark text-sm focus:border-surface-dark focus:ring-0 focus:outline-none transition-colors resize-y leading-relaxed"
                      id="inquiryMessage"
                        name="inquiryMessage"
                      placeholder="Provide details regarding your site parameters, statutory timeline, or requirements..."
                      required
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="pt-3 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-text-muted-dark leading-normal">
                      Client confidentiality & cadastral data integrity maintained.
                    </p>
                    <button
                      className="inline-flex items-center justify-center px-6 py-3 bg-surface-dark text-white text-sm font-medium hover:bg-surface-dark-elevated transition-colors border border-surface-dark cursor-pointer text-center whitespace-nowrap disabled:opacity-60"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Send Message ↗"}
                    </button>
                    {status === "sent" && (
                      <p className="text-sm text-technical-green font-medium">Message sent — we'll be in touch soon.</p>
                    )}
                    {status === "error" && (
                      <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again or email us directly.</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-dark text-white py-8 border-b border-border-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-text-muted-light font-mono">
              Statutory Assurance & Registration
            </div>
            <div className="text-xs sm:text-sm text-white font-normal">
              Professional practice adherence under the Geomatics Profession Act (Act 19 of 2013) and Land Survey Act (Act 8 of 1997).
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
