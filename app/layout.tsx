import type { Metadata } from 'next'
import './globals.css'

// Mirrors .figma/make/site.json, previously applied by the Vite
// figma-site-configuration plugin via transformIndexHtml.
export const metadata: Metadata = {
  title: 'lsmf88 คาสิโนออนไลน์ครบเครื่อง เดิมพันได้ทุกสไตล์',
  description:
    'lsmf88 รวบรวมคาสิโนออนไลน์และเกมเดิมพันหลากหลายไว้ครบ ระบบตอบสนองไว เมนูใช้งานคล่อง รองรับความสนุกได้บนทุกอุปกรณ์',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
