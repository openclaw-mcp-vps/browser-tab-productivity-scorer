import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TabScore – Browser Tab Productivity Scorer",
  description: "Score tab usage patterns for productivity insights. Chrome extension that tracks tab switching and scores your focus."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="74fcad19-565e-4af2-961d-598688995f4a"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
