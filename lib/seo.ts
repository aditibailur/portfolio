import { Metadata } from 'next'

export const siteConfig = {
  name: "Aditi Bailur - Frontend & UI/UX Developer",
  description: "Software engineering grad student passionate about crafting high-performance, scalable applications. Frontend and UI/UX Developer with experience in React, Node.js, and modern web technologies.",
  url: process.env.NODE_ENV === 'production' ? "https://aditibailur.dev" : "http://localhost:3000",
  ogImage: "/og-image.jpg",
  author: "Aditi Bailur",
  keywords: [
    "Aditi Bailur",
    "Frontend Developer",
    "UI/UX Developer",
    "Software Engineer",
    "React Developer",
    "Northeastern University",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio"
  ]
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aditibailur"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}