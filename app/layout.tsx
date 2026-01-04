import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrueBite QR',
  description: 'Sistema de votación por QR para comercios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-background text-text min-h-screen">{children}</body>
    </html>
  )
}
