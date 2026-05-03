export default function Page() {
  const faqs = [
    {
      q: 'Which fees does it calculate?',
      a: 'FBA fulfillment, referral fees, monthly storage, long-term storage, and advertising (PPC) costs — giving you a single true margin number per SKU.'
    },
    {
      q: 'How does it connect to my Amazon account?',
      a: 'Via the Amazon SP-API using OAuth. You authorize once and the app syncs your orders, fees, and inventory automatically every day.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time. No contracts, no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Amazon FBA Profit Tracker
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Real Profit Margins{' '}
          <span className="text-[#58a6ff]">Across All Fees</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Connect to Amazon Seller Central and see your true margin after FBA fees, referral fees, storage costs, and ad spend — updated daily, per SKU.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $14/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['FBA Fee Breakdown','Referral Fee Calc','Storage Cost Tracking','PPC Ad Spend','Daily Auto-Sync','Margin Trend Charts'].map(f => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to know your real margins</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited SKU tracking',
              'Real-time SP-API sync',
              'Full fee breakdown per product',
              'Historical margin trends',
              'Daily automated sync jobs',
              'CSV export'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Amazon Seller Profit Margin Tracker. All rights reserved.
      </footer>
    </main>
  )
}
