import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'EDC-ABIA',
  description: 'Official Exam Portal - Abia State',
  icons: {
    icon: '/edcLogo.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}