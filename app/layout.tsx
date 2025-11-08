import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "NomadCare - AI Voice Assistant for Telemedicine",
  description:
    "Real-time interpreting, emotion-aware analysis, and multimodal insights for safer, more inclusive telemedicine.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.variable} relative antialiased`}>{children}</body>
      </html>
    </>
  )
}
