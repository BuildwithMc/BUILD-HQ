import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buildwithmc - Community Builder & Tech Organizer",
  description:
    "MC is a passionate community builder, tech organizer, and operations manager driving innovation across Nigeria's tech ecosystem. Currently serving as Operations Manager at CafeOne Enugu and Community Manager at 3MTT Nigeria.",
  keywords:
    "community building, tech organizer, operations manager, Nigeria tech, Web3, blockchain, developer relations, event planning, digital marketing",
  authors: [{ name: "MC", url: "https://buildwithmc.com" }],
  creator: "MC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithmc.com",
    title: "Buildwithmc - Community Builder & Tech Organizer",
    description:
      "MC is a passionate community builder, tech organizer, and operations manager driving innovation across Nigeria's tech ecosystem.",
    siteName: "Buildwithmc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildwithmc - Community Builder & Tech Organizer",
    description:
      "MC is a passionate community builder, tech organizer, and operations manager driving innovation across Nigeria's tech ecosystem.",
    creator: "@buildwithmc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
