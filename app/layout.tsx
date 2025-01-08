import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manual | Cirne Motos',
  description: 'Manual COMERCIAL e ADMINISTRATIVO | Cirne Motos. Criado por Davi Freire, Arkanjo Teixeira e Victor Menezes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br ">
      <body>{children}</body>
    </html>
  )
}
