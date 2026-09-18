import SharedLayout from '../components/SharedLayout';
import '../globals.css';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    { title: "Topographic Survey — Kanana Estate", category: "Topographic Survey", link: "/projects/topographic-survey-—-kanana-estate" },
    { title: "Township Establishment: Ikageleng Township", category: "Township Establishment", link: "/projects/township-establishment-ikageleng-township" },
    { title: "Subdivision of a Farm 343 IT", category: "Cadastral Survey", link: "/projects/subdivision-of-a-farm-343-it" },
    { title: "Topographic Survey & Township Establishment: Mogwase", category: "Topographic Survey", link: "/projects/topographic-survey-township-establishment-mogwase" },
    { title: "Topographic Survey: Makouspan", category: "Topographic Survey", link: "/projects/topographic-survey-makouspan" },
    { title: "Beacon Relocation Erf 20478", category: "Cadastral Survey", link: "/projects/beacon-relocation-erf-20478" },
    { title: "Consolidation & Subdivision of Various Municipal Erven", category: "Cadastral Survey", link: "/projects/consolidation-subdivision-of-various-municipal-erven" },
    { title: "Subdivision of Various Municipal Erven", category: "Cadastral Survey", link: "/projects/subdivision-of-various-municipal-erven" }
  ];

  return (
    <SharedLayout>
      <div className="bk-hero" style={{ backgroundColor: '#fff' }}>
        <div className="bk-container">
          <h1>Projects</h1>
          <p>A selection of our recent geomatics, surveying, and town planning projects.</p>
        </div>
      </div>

      <div className="bk-container bk-grid">
        {projects.map((p, i) => (
          <Link href={p.link} key={i} className="bk-card">
            <div className="bk-card-category">{p.category}</div>
            <h3 className="bk-card-title">{p.title}</h3>
            <p style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', justifyContent: 'flex-end', color: '#16181A', fontWeight: 500 }}>View Project ↗</p>
          </Link>
        ))}
      </div>
    </SharedLayout>
  );
}
