import type { ReactNode } from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["500"],
})

const cabinetGrotesk = localFont({
  src: "../public/assets/framerusercontent.com/third-party-assets/fontshare/wf/J2PZYZURCR7HNQKXCZ4VXYA3K5FFCCLT/PZSZLWHMBCE7FFGOUYDEU33FAESUMA3X/JFDL5FBAQ2WMYL3LGKSCZKAIFCS2UQ63.woff2",
  variable: "--font-cabinet-grotesk",
  display: "swap",
})

export const metadata = {
  title: "Bokamoso Geomatics | Land Surveying & GIS",
  description:
    "Bokamoso Geomatics provides cadastral, engineering and topographic surveys, GIS, land management and town planning services from Rustenburg, North West.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${cabinetGrotesk.variable}`}>
      <body className="antialiased bg-surface text-text-primary-dark selection:bg-surface-dark selection:text-white">
        {children}
      </body>
    </html>
  )
}
