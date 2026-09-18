import SharedLayout from '../components/SharedLayout';
import '../globals.css';

export default function Expertise() {
  return (
    <SharedLayout>
      <div className="bk-hero" style={{ backgroundColor: '#fff' }}>
        <div className="bk-container">
          <h1>Expertise</h1>
          <p>Technical Competence & Credentials</p>
        </div>
      </div>

      <div className="bk-container" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <ul className="bk-expertise-list">
          <li><strong>SAGC Compliance:</strong> Fully registered Professional Land Surveyors conforming to the highest ethical and technical standards of the South African Geomatics Council.</li>
          <li><strong>GNSS/RTK Surveying:</strong> Utilisation of dual-frequency GNSS rover equipment for cm-level accurate coordinate positioning and rapid topographic mapping.</li>
          <li><strong>Total Station Traverse:</strong> Rigorous traverse network calculations, precise optical setting out, and engineering benchmarks.</li>
          <li><strong>Cadastral Demarcation:</strong> Lawful boundary identification, peg relocation, and drafting of SG diagrams/general plans for lodgement with the Surveyor-General.</li>
          <li><strong>Drone Photogrammetry:</strong> Aerial surveying providing high-resolution orthomosaics and digital elevation models (DEM) for volume calculations.</li>
          <li><strong>Spatial GIS Management:</strong> Advanced geographic database creation, spatial manipulation, and asset mapping using modern GIS software.</li>
        </ul>
      </div>
    </SharedLayout>
  );
}
