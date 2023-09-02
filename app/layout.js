import './globals.css'
import Head from 'next/head'
import { Noto_Sans } from 'next/font/google'

const inter = Noto_Sans({weight:['700'], subsets: ['latin'] })

export const metadata = {
  title: 'STSP Studio',
  description: '我們是一個專注打造全方面技術俱樂部團隊\n酷受創造世界、展現技術、打造創新團隊',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
