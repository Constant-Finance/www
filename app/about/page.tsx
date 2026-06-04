export const metadata = { title: 'About Us — Constant Finance' }

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
      <p className="text-lg text-gray-500 mb-10">Our Roots: Centralized Expertise, Decentralized Vision</p>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          The Web3 stack has matured beyond experiments. The future belongs to modular,
          production-grade infrastructure that withstands real economic stress, is interoperable
          by design, and scales with actual usage—not hype. Our team brings battle-tested
          experience from leading centralized exchanges and non-custodial wallets, where uptime,
          security, and safeguarding user funds are non-negotiable. We view crypto not as
          speculation, but as the most effective global coordination layer for value transfer and
          economic activity.
        </p>
        <p>
          We are building a composable lending protocol integrated into emerging on-chain economic
          models. This creates open, liquid markets with fully verifiable mechanics: every
          position, collateral ratio, interest accrual, and liquidation lives on transparent,
          auditable ledgers—no black boxes, no hidden fees, no centralized gatekeepers. This
          transparency is foundational. It reduces counterparty risk, enables accurate risk
          pricing, and builds the institutional and retail trust required for meaningful adoption.
        </p>
        <p>
          Our focus is straightforward: deliver infrastructure that works reliably today, enforces
          sovereignty through code (not promises), and provides full visibility so participants
          can independently verify compliance and soundness. By prioritizing these principles, we
          lay a defensible foundation for a borderless economy—one audited protocol, one
          transparent market, and one real use case at a time.
        </p>
      </div>
    </div>
  )
}
