export type DetailRecord = {
  kind: "project" | "service";
  title: string;
  eyebrow: string;
  category: string;
  summary: string;
  overview: string;
  client?: string;
  period?: string;
  scope: string[];
  serviceHref?: string;
  serviceLabel?: string;
};

export const projects: Record<string, DetailRecord> = {
  "topographic-survey-kanana-estate": {
    kind: "project",
    title: "Topographic Survey — Kanana Estate",
    eyebrow: "Project",
    category: "Topographic Survey",
    summary:
      "A topographic survey engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records a Topographic Survey for Kanana Estate completed in 2019 for Urban Regenesis.",
    client: "Urban Regenesis",
    period: "2019",
    scope: [
      "Depiction of existing infrastructure",
      "Contours mapping",
      "Mapping of natural and man-made features",
    ],
    serviceHref: "/services/topographic-surveys",
    serviceLabel: "Topographic Surveys",
  },

  "subdivision-of-various-municipal-erven": {
    kind: "project",
    title: "Subdivision of Various Municipal Erven",
    eyebrow: "Project",
    category: "Cadastral Survey",
    summary:
      "A cadastral land-management engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records this subdivision project for JB Marks Local Municipality, covering 2019 to 2020.",
    client: "JB Marks Local Municipality",
    period: "2019–2020",
    scope: [
      "Subdivision and consolidation surveys",
      "Property parcel definition",
      "Cadastral survey support",
    ],
    serviceHref: "/services/cadastral-surveys",
    serviceLabel: "Cadastral Surveys",
  },

  "township-establishment-ikageleng-township": {
    kind: "project",
    title: "Township Establishment — Ikageleng Township",
    eyebrow: "Project",
    category: "Township Establishment",
    summary:
      "A township-establishment engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records township establishment work for Ikageleng Township in Zeerust during 2019/2020 for Urban Regenesis.",
    client: "Urban Regenesis",
    period: "2019/2020",
    scope: [
      "Township establishment surveys",
      "Cadastral survey support",
      "Land-development survey information",
    ],
    serviceHref: "/services/land-management-town-planning",
    serviceLabel: "Land Management & Town Planning",
  },

  "consolidation-subdivision-of-various-municipal-erven": {
    kind: "project",
    title: "Consolidation & Subdivision of Various Municipal Erven",
    eyebrow: "Project",
    category: "Land Management",
    summary:
      "A land-management and cadastral engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records consolidation and subdivision work for JB Marks Local Municipality in 2019.",
    client: "JB Marks Local Municipality",
    period: "2019",
    scope: [
      "Subdivision and consolidation surveys",
      "Municipal land parcel work",
      "Cadastral survey support",
    ],
    serviceHref: "/services/cadastral-surveys",
    serviceLabel: "Cadastral Surveys",
  },

  "topographic-survey-township-establishment-mogwase": {
    kind: "project",
    title: "Topographic Survey & Township Establishment — Mogwase",
    eyebrow: "Project",
    category: "Topographic / Township Establishment",
    summary:
      "A combined topographic survey and township-establishment engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records this Mogwase engagement during 2019/2020 for Urban Regenesis.",
    client: "Urban Regenesis",
    period: "2019/2020",
    scope: [
      "Depiction of existing infrastructure",
      "Contours and feature mapping",
      "Township establishment survey support",
    ],
    serviceHref: "/services/topographic-surveys",
    serviceLabel: "Topographic Surveys",
  },

  "subdivision-of-a-farm-343-it": {
    kind: "project",
    title: "Subdivision of Farm 343 IT",
    eyebrow: "Project",
    category: "Cadastral Survey",
    summary:
      "A farm subdivision engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records the subdivision of Farm 343 IT in 2019 for the Department of Rural Development and Land Reform.",
    client: "Department of Rural Development & Land Reform",
    period: "2019",
    scope: [
      "Subdivision survey",
      "Property parcel definition",
      "Cadastral documentation",
    ],
    serviceHref: "/services/cadastral-surveys",
    serviceLabel: "Cadastral Surveys",
  },

  "topographic-survey-makouspan": {
    kind: "project",
    title: "Topographic Survey — Makouspan",
    eyebrow: "Project",
    category: "Topographic Survey",
    summary:
      "A topographic survey engagement recorded in Bokamoso Geomatics' past project portfolio.",
    overview:
      "The company profile records a Topographic Survey for Makouspan completed in 2020 for Mtema Mshao Consulting Engineers.",
    client: "Mtema Mshao Consulting Engineers",
    period: "2020",
    scope: [
      "Depiction of existing infrastructure",
      "Contours mapping",
      "Mapping of natural and man-made features",
    ],
    serviceHref: "/services/topographic-surveys",
    serviceLabel: "Topographic Surveys",
  },

  "beacon-relocation-erf-20478": {
    kind: "project",
    title: "Beacon Relocation — Erf 20478",
    eyebrow: "Project",
    category: "Cadastral Survey",
    summary:
      "Beacon relocation work recorded in Bokamoso Geomatics' past project portfolio for Erf 20478.",
    overview:
      "The company profile records a Beacon Relocation project for Erf 20478 covering 185 portions for JB Marks Local Municipality.",
    client: "JB Marks Local Municipality",
    scope: [
      "Beacon relocation",
      "Boundary confirmation survey work",
      "Property area and extent confirmation",
    ],
    serviceHref: "/services/cadastral-surveys",
    serviceLabel: "Cadastral Surveys",
  },
};

export const services: Record<string, DetailRecord> = {
  "topographic-surveys": {
    kind: "service",
    title: "Topographic Surveys",
    eyebrow: "Service",
    category: "Topographic",
    summary:
      "Survey and mapping of existing infrastructure, contours, and natural and man-made features.",
    overview:
      "Bokamoso Geomatics' topographic surveying service covers the representation of existing site conditions and the mapping of terrain and features.",
    scope: [
      "Depict the existing infrastructure",
      "Contours mapping",
      "Mapping of natural and man-made features",
    ],
  },

  "engineering-surveys": {
    kind: "service",
    title: "Engineering Surveys",
    eyebrow: "Service",
    category: "Engineering",
    summary:
      "Survey support for roads, engineering structures, control, benchmarks and volumetric work.",
    overview:
      "The company profile describes engineering survey work covering setting out, engineering control and benchmark establishment, and volumetric surveys.",
    scope: [
      "Setting out of roads and engineering structures",
      "Engineering survey control and benchmark establishment",
      "Volumetric surveys, including mine stockpiles",
    ],
  },

  "cadastral-surveys": {
    kind: "service",
    title: "Cadastral Surveys",
    eyebrow: "Service",
    category: "Cadastral",
    summary:
      "Land surveying for subdivision, consolidation, township establishment, servitudes, sectional titles and boundary work.",
    overview:
      "Bokamoso Geomatics' cadastral practice covers property and land-survey requirements across subdivisions, township establishment, servitudes, sectional titles and boundary confirmation.",
    scope: [
      "Subdivision and consolidation surveys",
      "Township establishment surveys",
      "Servitudes and lease diagrams",
      "Sectional title surveys",
      "Beacon relocation and boundary confirmation surveys",
      "Confirmation of property area and extent",
    ],
  },

  "geographic-information-systems": {
    kind: "service",
    title: "Geographic Information Systems",
    eyebrow: "Service",
    category: "GIS",
    summary:
      "Spatial data collection, mapping, manipulation and analysis for geographic information workflows.",
    overview:
      "The GIS service focuses on collecting and capturing spatial information, producing maps, and manipulating and analysing geographic data.",
    scope: [
      "GIS data collection and capturing",
      "GIS mapping",
      "GIS manipulation and analysis",
    ],
  },

  "land-management-town-planning": {
    kind: "service",
    title: "Land Management & Town Planning",
    eyebrow: "Service",
    category: "Land Management",
    summary:
      "Land-management and planning support across audits, township establishments, subdivisions, consolidations and land-reform projects.",
    overview:
      "Bokamoso Geomatics provides survey-related support for land management and town-planning workflows, including township establishment and land-reform work.",
    scope: [
      "Land audits",
      "Township establishments",
      "Subdivisions and consolidations",
      "Land reform projects and tenure upgrades",
    ],
  },
};
