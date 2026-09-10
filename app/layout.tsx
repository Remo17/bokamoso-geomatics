import type { ReactNode } from "react"

export const metadata = { title: "multidisciplinary-slides-882493.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
