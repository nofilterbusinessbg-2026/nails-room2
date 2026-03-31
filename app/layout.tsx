import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nails Room | Маникюр Бургас',
  description: 'Студио за маникюр в Бургас. Запази час онлайн.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  )
}
