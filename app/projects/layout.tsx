import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Bokamoso Geomatics | Land Surveying & GIS",
  description: "View our portfolio of survey projects including topographic surveys, cadastral subdivisions, township establishments, and GIS projects across North West.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
