/** @type {import("next").NextConfig} */
const nextConfig = {
  // The pages are files, not routes. beforeFiles runs ahead of Next's own
  // routing, so a request for /about is answered by the copy of /about
  // rather than by the placeholder page.
  async rewrites() {
    return {
      beforeFiles: [
              {
                      "source": "/",
                      "destination": "/index.html"
              },
              {
                      "source": "/about",
                      "destination": "/about/index.html"
              },
              {
                      "source": "/about/",
                      "destination": "/about/index.html"
              },
              {
                      "source": "/services",
                      "destination": "/services/index.html"
              },
              {
                      "source": "/services/",
                      "destination": "/services/index.html"
              },
              {
                      "source": "/projects",
                      "destination": "/projects/index.html"
              },
              {
                      "source": "/projects/",
                      "destination": "/projects/index.html"
              },
              {
                      "source": "/contact",
                      "destination": "/contact/index.html"
              },
              {
                      "source": "/contact/",
                      "destination": "/contact/index.html"
              },
              {
                      "source": "/expertise",
                      "destination": "/expertise/index.html"
              },
              {
                      "source": "/expertise/",
                      "destination": "/expertise/index.html"
              },
              {
                      "source": "/request-a-quote",
                      "destination": "/request-a-quote/index.html"
              },
              {
                      "source": "/request-a-quote/",
                      "destination": "/request-a-quote/index.html"
              },
              {
                      "source": "/services/cadastral-surveys",
                      "destination": "/services/cadastral-surveys/index.html"
              },
              {
                      "source": "/services/cadastral-surveys/",
                      "destination": "/services/cadastral-surveys/index.html"
              },
              {
                      "source": "/services/engineering-surveys",
                      "destination": "/services/engineering-surveys/index.html"
              },
              {
                      "source": "/services/engineering-surveys/",
                      "destination": "/services/engineering-surveys/index.html"
              },
              {
                      "source": "/services/geographic-information-systems",
                      "destination": "/services/geographic-information-systems/index.html"
              },
              {
                      "source": "/services/geographic-information-systems/",
                      "destination": "/services/geographic-information-systems/index.html"
              },
              {
                      "source": "/services/land-management-town-planning",
                      "destination": "/services/land-management-town-planning/index.html"
              },
              {
                      "source": "/services/land-management-town-planning/",
                      "destination": "/services/land-management-town-planning/index.html"
              },
              {
                      "source": "/services/topographic-surveys",
                      "destination": "/services/topographic-surveys/index.html"
              },
              {
                      "source": "/services/topographic-surveys/",
                      "destination": "/services/topographic-surveys/index.html"
              },
              {
                      "source": "/projects/topographic-survey-%E2%80%94-kanana-estate",
                      "destination": "/projects/topographic-survey-%E2%80%94-kanana-estate/index.html"
              },
              {
                      "source": "/projects/topographic-survey-%E2%80%94-kanana-estate/",
                      "destination": "/projects/topographic-survey-%E2%80%94-kanana-estate/index.html"
              },
              {
                      "source": "/projects/subdivision-of-various-municipal-erven",
                      "destination": "/projects/subdivision-of-various-municipal-erven/index.html"
              },
              {
                      "source": "/projects/subdivision-of-various-municipal-erven/",
                      "destination": "/projects/subdivision-of-various-municipal-erven/index.html"
              },
              {
                      "source": "/projects/township-establishment-ikageleng-township",
                      "destination": "/projects/township-establishment-ikageleng-township/index.html"
              },
              {
                      "source": "/projects/township-establishment-ikageleng-township/",
                      "destination": "/projects/township-establishment-ikageleng-township/index.html"
              },
              {
                      "source": "/projects/consolidation-subdivision-of-various-municipal-erven",
                      "destination": "/projects/consolidation-subdivision-of-various-municipal-erven/index.html"
              },
              {
                      "source": "/projects/consolidation-subdivision-of-various-municipal-erven/",
                      "destination": "/projects/consolidation-subdivision-of-various-municipal-erven/index.html"
              },
              {
                      "source": "/projects/topographic-survey-township-establishment-mogwase",
                      "destination": "/projects/topographic-survey-township-establishment-mogwase/index.html"
              },
              {
                      "source": "/projects/topographic-survey-township-establishment-mogwase/",
                      "destination": "/projects/topographic-survey-township-establishment-mogwase/index.html"
              }
      ],
    }
  },
}

export default nextConfig
