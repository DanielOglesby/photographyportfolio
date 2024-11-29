import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Film Photography Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} 
        antialiased
        min-h-screen
        mx-auto
        max-w-7xl
        px-4 
        sm:px-6 
        lg:px-8
        overflow-x-hidden
      `}>
        {children}
      </body>
    </html>
  )
}