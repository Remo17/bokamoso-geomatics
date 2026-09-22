import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

const services = [
  { number: "01", title: "Topographic Surveys", body: "Survey and mapping of existing infrastructure, contours, and natural and man-made features." },
  { number: "02", title: "Engineering Surveys", body: "Setting out, engineering control and benchmark establishment, and volumetric surveys." },
  { number: "03", title: "Cadastral Surveys", body: "Subdivision and consolidation, township establishment, servitudes, sectional titles and boundary confirmation." },
  { number: "04", title: "Geographic Information Systems", body: "GIS data collection and capturing, mapping, data manipulation and spatial analysis." },
  { number: "05", title: "Land Management & Town Planning", body: "Land audits, township establishments, land reform projects and tenure upgrades." },
]

const projects = [
  { number: "01", title: "Topographic Survey — Kanana Estate", discipline: "Topographic Survey", client: "Kanana Estate", year: "2019", href: "/projects/topographic-survey-—-kanana-estate" },
  { number: "02", title: "Subdivision of Various Municipal Erven", discipline: "Cadastral Survey", client: "JB Marks Local Municipality", year: "2019–2020", href: "/projects/subdivision-of-various-municipal-erven" },
  { number: "03", title: "Township Establishment: Ikageleng Township", discipline: "Township Establishment", client: "Zeerust", year: "2019/2020", href: "/projects/township-establishment-ikageleng-township" },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border-light bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono uppercase tracking-widest text-technical-green mb-4">Geomatics · Land Surveying · Rustenburg, North West</p>
                <h1 className="font-cabinet-grotesk text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tight text-text-primary-dark max-w-4xl">Precision for every parcel, project and place.</h1>
                <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-text-muted-dark">Bokamoso Geomatics is a professional geomatics and land surveying practice providing cadastral, engineering and topographic surveys, GIS, land management and town planning services from Rustenburg, North West.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 bg-surface-dark text-white text-sm font-medium hover:bg-surface-dark-elevated transition-colors">Explore Our Services ↗</Link>
                  <Link href="/request-a-quote" className="inline-flex items-center justify-center px-5 py-3 border border-border-light text-text-primary-dark text-sm font-medium hover:border-surface-dark transition-colors">Request a Consultation</Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <figure className="border border-border-light bg-background-stone p-3">
                  <img src="/assets/team/team-total-station.jpg" alt="Survey professional using a total station in the field" className="w-full h-[310px] sm:h-[410px] object-cover" />
                  <figcaption className="pt-3 text-xs font-mono text-text-muted-dark flex justify-between gap-4"><span>Fig. 01 — Field measurement</span><span className="text-technical-green">25.67° S · 27.24° E</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border-light bg-background-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark">01 — Introduction</p></div>
            <div className="lg:col-span-8">
              <h2 className="font-cabinet-grotesk text-3xl sm:text-4xl leading-tight tracking-tight">Rigorous spatial work, grounded in professional practice.</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm sm:text-base leading-relaxed text-text-muted-dark">
                <p>The practice is led by Kereng Senna, a registered Professional Land Surveyor, and serves municipal, public and private clients.</p>
                <p>Our mission is to deliver excellent-quality service to our clients, grounded in ethics, honesty, integrity and teamwork.</p>
              </div>
              <Link href="/about" className="inline-flex mt-7 text-sm font-medium text-text-primary-dark underline underline-offset-4 decoration-technical-green hover:text-technical-green transition-colors">About Bokamoso ↗</Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border-light bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 pb-7 border-b border-border-light">
              <div><p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-3">02 — Services</p><h2 className="font-cabinet-grotesk text-3xl sm:text-4xl tracking-tight">Survey, map and manage land.</h2></div>
              <p className="text-sm text-text-muted-dark max-w-md">Five disciplines supporting the full cycle of land information, from field measurement to statutory submission.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 border-l border-border-light mt-8">
              {services.map((service) => <Link href="/services" key={service.number} className="group min-h-56 border-r border-b border-t border-border-light p-5 sm:p-6 hover:bg-background-stone transition-colors"><span className="text-xs font-mono text-technical-green">{service.number}</span><h3 className="font-cabinet-grotesk text-xl leading-tight mt-12 group-hover:underline underline-offset-4">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-text-muted-dark">{service.body}</p></Link>)}
            </div>
          </div>
        </section>

        <section className="border-b border-border-light bg-background-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <figure className="lg:col-span-5 border border-border-light bg-surface-light p-3"><img src="/assets/team/rover-open-field.jpg" alt="Survey equipment positioned for a field survey" className="h-72 sm:h-96 w-full object-cover" /><figcaption className="pt-3 text-xs font-mono text-text-muted-dark">Fig. 02 — Field survey equipment</figcaption></figure>
              <div className="lg:col-span-7"><p className="text-xs font-mono uppercase tracking-widest text-text-muted-dark mb-3">03 — Selected Projects</p><div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-border-light"><h2 className="font-cabinet-grotesk text-3xl sm:text-4xl tracking-tight">Recent work across the North West.</h2><Link href="/projects" className="text-sm font-medium underline underline-offset-4 decoration-technical-green hover:text-technical-green">View all projects ↗</Link></div><div className="divide-y divide-border-light">{projects.map((project) => <Link href={project.href} key={project.number} className="group grid grid-cols-[2rem_1fr] sm:grid-cols-[2.5rem_1fr_auto] gap-3 py-5 hover:text-technical-green transition-colors"><span className="text-xs font-mono text-text-muted-dark pt-1">{project.number}</span><div><h3 className="text-base sm:text-lg font-medium group-hover:underline underline-offset-4">{project.title}</h3><p className="mt-1 text-sm text-text-muted-dark">{project.discipline} · {project.client}</p></div><span className="hidden sm:block text-xs font-mono text-text-muted-dark pt-1">{project.year}</span></Link>)}</div></div>
            </div>
          </div>
        </section>

        <section className="border-b border-border-dark bg-surface-dark text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-text-muted-light">04 — Professional Expertise</p></div>
            <div className="lg:col-span-8"><h2 className="font-cabinet-grotesk text-3xl sm:text-4xl tracking-tight leading-tight">Led by a registered Professional Land Surveyor.</h2><p className="mt-5 max-w-3xl text-base leading-relaxed text-text-muted-light">Kereng Senna holds a National Diploma in Land Surveying from the Polytechnic of Namibia and a BSc in Land Surveying from the University of KwaZulu-Natal. His career includes experience at the Surveyor General’s Office, geomatics, town and regional planning, and aerial surveying and photogrammetry.</p><div className="mt-8 flex flex-wrap gap-2">{["Cadastral", "Sectional Titles", "Engineering", "Volumetric", "Photogrammetry", "GIS", "Town Planning"].map((item) => <span key={item} className="border border-border-dark px-3 py-2 text-xs font-mono text-text-muted-light">{item}</span>)}</div><Link href="/expertise" className="inline-flex mt-8 px-5 py-3 bg-white text-text-primary-dark text-sm font-medium hover:bg-neutral-200 transition-colors">Explore Expertise ↗</Link></div>
          </div>
        </section>

        <section className="bg-surface-light">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20"><div className="border border-border-light bg-background-stone p-7 sm:p-10 lg:p-14 grid lg:grid-cols-12 gap-8 items-end"><div className="lg:col-span-8"><p className="text-xs font-mono uppercase tracking-widest text-technical-green mb-3">05 — Start a conversation</p><h2 className="font-cabinet-grotesk text-3xl sm:text-4xl tracking-tight">Discuss your survey or land management project with us.</h2><p className="mt-4 text-base text-text-muted-dark leading-relaxed max-w-2xl">Tell us about the site, property or infrastructure project and we’ll help identify the appropriate survey scope.</p></div><div className="lg:col-span-4 flex lg:justify-end gap-3 flex-wrap"><Link href="/request-a-quote" className="inline-flex px-5 py-3 bg-surface-dark text-white text-sm font-medium hover:bg-surface-dark-elevated transition-colors">Request a Quote ↗</Link><Link href="/contact" className="inline-flex px-5 py-3 border border-border-light text-sm font-medium hover:border-surface-dark transition-colors">Contact Us</Link></div></div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
