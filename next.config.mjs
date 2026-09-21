/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
      {
        source: "/",
        destination: "/index.html"
      },
      {
        source: "/about",
        destination: "/about/index.html"
      },
      {
        source: "/about/",
        destination: "/about/index.html"
      },
      {
        source: "/services/engineering-surveys",
        destination: "/services/engineering-surveys/index.html"
      },
      {
        source: "/services/engineering-surveys/",
        destination: "/services/engineering-surveys/index.html"
      },
      {
        source: "/services/topographic-surveys",
        destination: "/services/topographic-surveys/index.html"
      },
      {
        source: "/services/topographic-surveys/",
        destination: "/services/topographic-surveys/index.html"
      },
      {
        source: "/services/cadastral-surveys",
        destination: "/services/cadastral-surveys/index.html"
      },
      {
        source: "/services/cadastral-surveys/",
        destination: "/services/cadastral-surveys/index.html"
      },
      {
        source: "/services/geographic-information-systems",
        destination: "/services/geographic-information-systems/index.html"
      },
      {
        source: "/services/geographic-information-systems/",
        destination: "/services/geographic-information-systems/index.html"
      },
      {
        source: "/services/land-management-town-planning",
        destination: "/services/land-management-town-planning/index.html"
      },
      {
        source: "/services/land-management-town-planning/",
        destination: "/services/land-management-town-planning/index.html"
      },
      {
        source: "/projects/beacon-relocation-erf-20478",
        destination: "/projects/beacon-relocation-erf-20478/index.html"
      },
      {
        source: "/projects/beacon-relocation-erf-20478/",
        destination: "/projects/beacon-relocation-erf-20478/index.html"
      },
      {
        source: "/projects/topographic-survey-township-establishment-mogwase",
        destination: "/projects/topographic-survey-township-establishment-mogwase/index.html"
      },
      {
        source: "/projects/topographic-survey-township-establishment-mogwase/",
        destination: "/projects/topographic-survey-township-establishment-mogwase/index.html"
      },
      {
        source: "/projects/topographic-survey-makouspan",
        destination: "/projects/topographic-survey-makouspan/index.html"
      },
      {
        source: "/projects/topographic-survey-makouspan/",
        destination: "/projects/topographic-survey-makouspan/index.html"
      },
      {
        source: "/projects/subdivision-of-a-farm-343-it",
        destination: "/projects/subdivision-of-a-farm-343-it/index.html"
      },
      {
        source: "/projects/subdivision-of-a-farm-343-it/",
        destination: "/projects/subdivision-of-a-farm-343-it/index.html"
      },
      {
        source: "/projects/consolidation-subdivision-of-various-municipal-erven",
        destination: "/projects/consolidation-subdivision-of-various-municipal-erven/index.html"
      },
      {
        source: "/projects/consolidation-subdivision-of-various-municipal-erven/",
        destination: "/projects/consolidation-subdivision-of-various-municipal-erven/index.html"
      },
      {
        source: "/projects/township-establishment-ikageleng-township",
        destination: "/projects/township-establishment-ikageleng-township/index.html"
      },
      {
        source: "/projects/township-establishment-ikageleng-township/",
        destination: "/projects/township-establishment-ikageleng-township/index.html"
      },
      {
        source: "/projects/subdivision-of-various-municipal-erven",
        destination: "/projects/subdivision-of-various-municipal-erven/index.html"
      },
      {
        source: "/projects/subdivision-of-various-municipal-erven/",
        destination: "/projects/subdivision-of-various-municipal-erven/index.html"
      },
      {
        source: "/projects/topographic-survey-—-kanana-estate",
        destination: "/projects/topographic-survey-—-kanana-estate/index.html"
      },
      {
        source: "/projects/topographic-survey-—-kanana-estate/",
        destination: "/projects/topographic-survey-—-kanana-estate/index.html"
      },
      {
        source: "/projects/topographic-survey-%E2%80%94-kanana-estate",
        destination: "/projects/topographic-survey-—-kanana-estate/index.html"
      },
      {
        source: "/projects/topographic-survey-%E2%80%94-kanana-estate/",
        destination: "/projects/topographic-survey-—-kanana-estate/index.html"
      }
      ],
    };
  },
};

export default nextConfig;
