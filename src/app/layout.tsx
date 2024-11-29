import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '팜인포: Jeju',
  description: '월동 채소 재배면적신고 시스템'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
