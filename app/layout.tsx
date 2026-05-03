import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amazon Seller Profit Margin Tracker — Track Real Profit After All Fees',
  description: 'Calculate true profit margins after FBA fees, referral fees, storage costs, and advertising spend. Real-time sync with Amazon Seller Central.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ba0f86b3-1ee7-44b8-975f-4605e5d36d30"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
