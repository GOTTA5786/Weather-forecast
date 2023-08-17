import './globals.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['300','500','700','900'],
  style: ['normal'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Weather forecast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
