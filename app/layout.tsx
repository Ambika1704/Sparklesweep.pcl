import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SparkleSweep - Eco-Friendly Home Cleaning",
  description:
    "Professional eco-friendly home cleaning services using only organic and sustainable products safe for your family and the environment.",
  icons: {
    icon: "/fevicon.svg",
    apple: "/fevicon.svg",
  },
} 

export const viewport: Viewport = {
  themeColor: "#2d8a56", 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
