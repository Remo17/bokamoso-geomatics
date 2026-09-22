export type DetailRecord = {
  title: string;
  eyebrow: string;
  category: string;
  summary: string;
  points: string[];
};

export const services: Record<string, DetailRecord> = {
  "engineering-surveys": {
    title: "Engineering Surveys",
    eyebrow: "Service",
    category: "Engineering",
    summary:
      "Precision surveying support for infrastructure, engineering and construction workflows.",
    points: [
      "Survey control and site measurement",
      "Setting out and positional verification",
      "As-built and construction documentation",
    ],
  },
  "topographic-surveys": {
    title: "Topographic Surveys",
    eyebrow: "Service",
    category: "Topographic",
    summary:
      "Detailed measurement and representation of terrain, levels and existing site features.",
    points: [
      "Terrain and feature capture",
      "Levels, contours and site information",
      "Survey information for planning and design",
    ],
  },
  "cadastral-surveys": {
    title: "Cadastral Surveys",
    eyebrow: "Service",
    category: "Cadastral",
    summary:
      "Land and boundary surveying for cadastral, subdivision and related property work.",
    points: [
      "Boundary and beacon-related survey work",
      "Subdivision and parcel definition",
      "Cadastral survey documentation",
    ],
  },
  "geographic-information-systems": {
    title: "Geographic Information Systems",
    eyebrow: "Service",
    category: "GIS",
    summary:
      "Spatial data capture, management and mapping that turns survey information into usable geographic information.",
    points: [
      "Spatial data management",
      "Mapping and geographic visualisation",
      "Integration of survey and spatial information",
    ],
  },
  "land-management-town-planning": {
    title: "Land Management & Town Planning",
    eyebrow: "Service",
    category: "Land Management",
    summary:
      "Survey and spatial support for subdivisions, consolidations and township-establishment processes.",
    points: [
      "Subdivision and consolidation support",
      "Township-establishment survey inputs",
      "Land and spatial planning information",
    ],
  },
};

export const projects: Record<string, DetailRecord> = {
  "beacon-relocation-erf-20478": {
    title: "Beacon Relocation — Erf 20478",
    eyebrow: "Project",
    category: "Cadastral",
    summary:
      "Cadastral survey project involving the relocation of a beacon associated with Erf 20478.",
    points: [
      "Beacon relocation",
      "Cadastral survey work",
      "Property boundary information",
    ],
  },
  "topographic-survey-township-establishment-mogwase": {
    title: "Topographic Survey — Township Establishment, Mogwase",
    eyebrow: "Project",
    category: "Topographic / Township Establishment",
    summary:
      "Topographic survey project supporting township-establishment work in Mogwase.",
    points: [
      "Topographic site survey",
      "Terrain and feature information",
      "Township-establishment support",
    ],
  },
  "topographic-survey-makouspan": {
    title: "Topographic Survey — Makouspan",
    eyebrow: "Project",
    category: "Topographic",
    summary:
      "Topographic survey project for Makouspan, focused on detailed site and terrain information.",
    points: [
      "Topographic survey",
      "Existing site features",
      "Terrain and level information",
    ],
  },
  "subdivision-of-a-farm-343-it": {
    title: "Subdivision of a Farm 343 IT",
    eyebrow: "Project",
    category: "Land Management / Subdivision",
    summary:
      "Land-management project involving the subdivision of Farm 343 IT.",
    points: [
      "Farm subdivision",
      "Cadastral survey support",
      "Land parcel definition",
    ],
  },
  "consolidation-subdivision-of-various-municipal-erven": {
    title: "Consolidation & Subdivision of Various Municipal Erven",
    eyebrow: "Project",
    category: "Land Management",
    summary:
      "Land-management project covering consolidation and subdivision of various municipal erven.",
    points: [
      "Erven consolidation",
      "Subdivision",
      "Cadastral and land-management support",
    ],
  },
  "township-establishment-ikageleng-township": {
    title: "Township Establishment — Ikageleng Township",
    eyebrow: "Project",
    category: "Township Establishment",
    summary:
      "Township-establishment project associated with Ikageleng Township.",
    points: [
      "Township-establishment survey work",
      "Spatial and cadastral information",
      "Land-development support",
    ],
  },
  "subdivision-of-various-municipal-erven": {
    title: "Subdivision of Various Municipal Erven",
    eyebrow: "Project",
    category: "Land Management / Subdivision",
    summary:
      "Cadastral and land-management project involving the subdivision of municipal erven.",
    points: [
      "Municipal erven subdivision",
      "Cadastral survey support",
      "Land parcel definition",
    ],
  },
  "topographic-survey-—-kanana-estate": {
    title: "Topographic Survey — Kanana Estate",
    eyebrow: "Project",
    category: "Topographic",
    summary:
      "Topographic survey project for Kanana Estate.",
    points: [
      "Topographic survey",
      "Terrain and feature information",
      "Site-level survey data",
    ],
  },
};
