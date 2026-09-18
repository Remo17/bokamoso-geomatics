import SharedLayout from '../components/SharedLayout';
import '../globals.css';
import Link from 'next/link';

export default function Services() {
  const services = [
    { title: "Topographic Surveys", link: "/services/topographic-surveys", desc: "Survey and mapping of existing infrastructure, contours, and natural and man-made features." },
    { title: "Engineering Surveys", link: "/services/engineering-surveys", desc: "Setting out of roads and engineering structures, establishment of engineering control and benchmarks." },
    { title: "Cadastral Surveys", link: "/services/cadastral-surveys", desc: "Subdivision and consolidation, township establishment, servitudes and lease diagrams, sectional titles, beacon relocation." },
    { title: "Geographic Information Systems", link: "/services/geographic-information-systems", desc: "GIS data collection and capturing, GIS mapping, and data manipulation and analysis." },
    { title: "Land Management & Town Planning", link: "/services/land-management-town-planning", desc: "Land audits, township establishments, subdivisions and consolidations, and land reform projects." }
  ];

  return (
    <SharedLayout>
      <div className="bk-hero" style={{ backgroundColor: '#fff' }}>
        <div className="bk-container">
          <h1>Services</h1>
          <p>Professional geomatics and land surveying services tailored for accuracy and compliance.</p>
        </div>
      </div>

      <div className="bk-container bk-grid">
        {services.map((s, i) => (
          <Link href={s.link} key={i} className="bk-card">
            <h3 className="bk-card-title">{s.title}</h3>
            <p>{s.desc}</p>
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-start', color: '#16181A', fontWeight: 500 }}>Learn More ↗</div>
          </Link>
        ))}
      </div>
    </SharedLayout>
  );
}
