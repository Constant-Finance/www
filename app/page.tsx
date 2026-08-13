'use client'

/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import Link from 'next/link'

const features = [
  // 1. Position Isolation
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Position Isolation',
    details: 'Every borrowing position runs in its own isolated margin silo. A liquidation event in one position never touches your other collateral — fine-grained risk control by design.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 0, asset: 'BTC', delay: '0s' },
          { x: 69, asset: 'ETH', delay: '0.6s' },
          { x: 138, asset: 'USD', delay: '1.2s' },
        ].map((silo) => (
          <g key={silo.asset} transform={`translate(${silo.x} 0)`}>
            {/* Independent margin silo */}
            <rect x="3" y="3" width="59" height="110" rx="9"
              stroke="#ffb74d" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 4" />

            {/* Asset being deposited */}
            <circle cx="32" cy="16" r="10" fill="#ffb74d" fillOpacity="0.12"
              stroke="#ffb74d" strokeOpacity="0.75" strokeWidth="1.2">
              <animate attributeName="cy" values="14;35;14" dur="3.2s" begin={silo.delay} repeatCount="indefinite" />
              <animate attributeName="fillOpacity" values="0.12;0.28;0.12" dur="3.2s" begin={silo.delay} repeatCount="indefinite" />
            </circle>
            <text x="32" y="20" textAnchor="middle" fill="#ffb74d" fillOpacity="0.9"
              fontSize="7" fontWeight="600" fontFamily="monospace">
              {silo.asset}
              <animate attributeName="y" values="18;39;18" dur="3.2s" begin={silo.delay} repeatCount="indefinite" />
            </text>

            {/* Piggy bank */}
            <path d="M8 68 C8 55 17 47 30 47 C41 47 50 53 52 62 H56 C58 62 60 64 60 67 V73 C60 75 58 77 56 77 H52 C49 85 41 90 31 90 H21 C13 90 8 83 8 75 Z"
              fill="#ffb74d" fillOpacity="0.08" stroke="#ffb74d" strokeOpacity="0.68" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M18 51 L20 42 L29 48" fill="#ffb74d" fillOpacity="0.08"
              stroke="#ffb74d" strokeOpacity="0.68" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M25 48 H37" stroke="#ffb74d" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="44" cy="61" r="1.5" fill="#ffb74d" fillOpacity="0.85" />
            <path d="M8 61 C2 59 2 67 7 67" stroke="#ffb74d" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 89 V98 M43 88 V98" stroke="#ffb74d" strokeOpacity="0.68" strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}
      </svg>
    ),
  },

  // 2. Fix Rate & Arbitrage
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: 'Fix Rate & Arbitrage',
    details: 'Lock in your borrowing cost at a fixed rate for the full term. Deploy the capital into higher-yield strategies — staking, liquidity provision, or other on-chain opportunities — and pocket the spread as near risk-free arbitrage.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="60" r="46" stroke="#ffb74d" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="100" cy="60" r="46" stroke="#ffb74d" strokeOpacity="0.6" strokeWidth="2"
          strokeLinecap="round" strokeDasharray="289" strokeDashoffset="289" transform="rotate(-90 100 60)">
          <animate attributeName="strokeDashoffset" values="289;0;289" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1" keyTimes="0;0.7;1" />
        </circle>
        <circle cx="100" cy="60" r="32" stroke="#ffb74d" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M86,60 L96,70 L116,50" stroke="#ffb74d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="strokeOpacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.65;0.85;1" />
        </path>
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle - 90) * Math.PI / 180
          const x1 = 100 + 38 * Math.cos(rad), y1 = 60 + 38 * Math.sin(rad)
          const x2 = 100 + 44 * Math.cos(rad), y2 = 60 + 44 * Math.sin(rad)
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffb74d" strokeOpacity="0.3" strokeWidth="1.5" />
        })}
      </svg>
    ),
  },

  // 3. RWA Collateral
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: 'RWA Collateral',
    details: 'Pledge tokenized stocks, bonds, and real-world assets as collateral — the same intuitive borrowing experience as a traditional bank margin loan, now fully on-chain with transparent liquidation rules and no hidden fees.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="100" x2="185" y2="100" stroke="#ffb74d" strokeOpacity="0.15" strokeWidth="0.5" />
        <line x1="20" y1="75" x2="185" y2="75" stroke="#ffb74d" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="4 3" />
        <line x1="20" y1="50" x2="185" y2="50" stroke="#ffb74d" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="4 3" />
        <line x1="20" y1="25" x2="185" y2="25" stroke="#ffb74d" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="4 3" />
        {[
          { x: 28, h: 22, op: 0.20 }, { x: 62, h: 42, op: 0.32 },
          { x: 96, h: 64, op: 0.48 }, { x: 130, h: 82, op: 0.65 },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={100 - b.h} width="22" height={b.h} rx="2" fill="#ffb74d" fillOpacity={b.op}>
            <animate attributeName="height" values={`${b.h};${b.h + 6};${b.h}`} dur={`${3.5 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${100 - b.h};${94 - b.h};${100 - b.h}`} dur={`${3.5 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <polyline points="39,75 73,55 107,33 141,15" stroke="#ffb74d" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="141" cy="15" r="4" fill="#ffb74d">
          <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },

  // 4. LP NFT Collateral (merged with Leveraged LP Yield)
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'LP NFT Collateral',
    details: 'Use ConstFi LP NFTs or Uniswap V3 LP NFTs as collateral to unlock idle liquidity. Amplify returns with up to 20× leverage on LP positions, with real-time health factor monitoring and multiple risk strategies to keep liquidation exposure in check.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="72" cy="60" r="42" stroke="#ffb74d" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="6 4">
          <animateTransform attributeName="transform" type="rotate" from="0 72 60" to="360 72 60" dur="22s" repeatCount="indefinite" />
        </circle>
        <circle cx="128" cy="60" r="42" stroke="#ffb74d" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="6 4">
          <animateTransform attributeName="transform" type="rotate" from="360 128 60" to="0 128 60" dur="22s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="100" cy="60" rx="18" ry="34" fill="#ffb74d" fillOpacity="0.06" />
        <circle cx="72" cy="60" r="5" fill="#ffb74d" fillOpacity="0.35" />
        <circle cx="128" cy="60" r="5" fill="#ffb74d" fillOpacity="0.35" />
        <circle cx="100" cy="60" r="6" fill="#ffb74d" fillOpacity="0.85">
          <animate attributeName="r" values="5;7.5;5" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.85;0.4;0.85" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="#ffb74d" fillOpacity="0.7">
          <animateMotion path="M72,18 A42,42 0 1,1 71.9,18" dur="7s" repeatCount="indefinite" />
        </circle>
        {/* Leverage label */}
        <text x="100" y="108" textAnchor="middle" fill="#ffb74d" fillOpacity="0.4" fontSize="9" fontFamily="monospace">up to 20×</text>
      </svg>
    ),
  },

  // 5. Debt Refinancing
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'Debt Refinancing',
    details: 'Roll over existing debt into a new loan atomically — no upfront repayment required. Seamlessly replace an expensive position with a better-rate one in a single transaction.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="12s" repeatCount="indefinite" />
          <path d="M100,14 A46,46 0 0,1 146,60" stroke="#ffb74d" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="146,52 150,62 140,62" fill="#ffb74d" fillOpacity="0.5" />
          <path d="M100,106 A46,46 0 0,1 54,60" stroke="#ffb74d" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="54,68 50,58 60,58" fill="#ffb74d" fillOpacity="0.5" />
        </g>
        <circle cx="100" cy="60" r="28" stroke="#ffb74d" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 4" />
        <text x="100" y="56" textAnchor="middle" fill="#ffb74d" fillOpacity="0.6" fontSize="10" fontFamily="monospace">old</text>
        <text x="100" y="70" textAnchor="middle" fill="#ffb74d" fillOpacity="0.9" fontSize="10" fontFamily="monospace">new</text>
        <line x1="100" y1="59" x2="100" y2="64" stroke="#ffb74d" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    ),
  },

  // 6. Position Trading
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
    title: 'Position Trading',
    details: 'Trade active lending positions on a secondary market. Exit before maturity to reclaim liquidity early, or acquire yield-bearing positions without originating a new loan from scratch.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="10" x2="100" y2="110" stroke="#ffb74d" strokeOpacity="0.12" strokeWidth="0.5" />
        {[
          { y: 18, w: 72, op: 0.55 }, { y: 36, w: 58, op: 0.42 },
          { y: 54, w: 44, op: 0.30 }, { y: 72, w: 30, op: 0.20 },
          { y: 90, w: 16, op: 0.12 },
        ].map((b, i) => (
          <rect key={`bid-${i}`} x={100 - b.w} y={b.y} width={b.w} height="12" rx="2" fill="#ffb74d" fillOpacity={b.op}>
            <animate attributeName="width" values={`${b.w};${b.w * 1.12};${b.w}`} dur={`${2.5 + i * 0.2}s`} begin={`${i * 0.1}s`} repeatCount="indefinite" />
            <animate attributeName="x" values={`${100 - b.w};${100 - b.w * 1.12};${100 - b.w}`} dur={`${2.5 + i * 0.2}s`} begin={`${i * 0.1}s`} repeatCount="indefinite" />
          </rect>
        ))}
        {[
          { y: 18, w: 55, op: 0.22 }, { y: 36, w: 68, op: 0.28 },
          { y: 54, w: 45, op: 0.20 }, { y: 72, w: 35, op: 0.15 },
          { y: 90, w: 22, op: 0.10 },
        ].map((b, i) => (
          <rect key={`ask-${i}`} x="102" y={b.y} width={b.w} height="12" rx="2" fill="#ffb74d" fillOpacity={b.op}>
            <animate attributeName="width" values={`${b.w};${b.w * 0.88};${b.w}`} dur={`${2.5 + i * 0.2}s`} begin={`${i * 0.1 + 0.5}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <rect x="96" y="8" width="8" height="104" fill="#ffb74d" fillOpacity="0.04" rx="1" />
        <text x="80" y="10" textAnchor="end" fill="#ffb74d" fillOpacity="0.35" fontSize="8" fontFamily="monospace">bids</text>
        <text x="120" y="10" fill="#ffb74d" fillOpacity="0.25" fontSize="8" fontFamily="monospace">asks</text>
      </svg>
    ),
  },

  // 7. P2P Capital Matching
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'P2P Capital Matching',
    details: 'Peer-to-peer order matching eliminates idle liquidity. Capital is deployed the moment a counterparty is found — higher yields for lenders, lower costs for borrowers.',
    deco: (
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38" cy="60" r="22" stroke="#ffb74d" strokeOpacity="0.35" strokeWidth="1.5" fill="#ffb74d" fillOpacity="0.05" />
        <circle cx="38" cy="60" r="22" stroke="#ffb74d" strokeOpacity="0.15" strokeWidth="1">
          <animate attributeName="r" values="22;28;22" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="strokeOpacity" values="0.15;0;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="38" cy="60" r="7" fill="#ffb74d" fillOpacity="0.6" />
        <text x="38" y="95" textAnchor="middle" fill="#ffb74d" fillOpacity="0.4" fontSize="8" fontFamily="monospace">lender</text>
        <circle cx="162" cy="60" r="22" stroke="#ffb74d" strokeOpacity="0.35" strokeWidth="1.5" fill="#ffb74d" fillOpacity="0.05" />
        <circle cx="162" cy="60" r="22" stroke="#ffb74d" strokeOpacity="0.15" strokeWidth="1">
          <animate attributeName="r" values="22;28;22" dur="2.5s" begin="1.25s" repeatCount="indefinite" />
          <animate attributeName="strokeOpacity" values="0.15;0;0.15" dur="2.5s" begin="1.25s" repeatCount="indefinite" />
        </circle>
        <circle cx="162" cy="60" r="7" fill="#ffb74d" fillOpacity="0.6" />
        <text x="162" y="95" textAnchor="middle" fill="#ffb74d" fillOpacity="0.4" fontSize="8" fontFamily="monospace">borrower</text>
        <path d="M62,60 C100,30 100,90 138,60" stroke="#ffb74d" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
        <circle r="4.5" fill="#ffb74d" fillOpacity="0.9">
          <animateMotion path="M62,60 C100,30 100,90 138,60" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
        </circle>
        <circle r="3" fill="#ffb74d" fillOpacity="0.6">
          <animateMotion path="M138,60 C100,90 100,30 62,60" dur="2s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
        </circle>
      </svg>
    ),
  },
]

const protocolStats = [
  { label: 'Protocol Status', value: 'Pre-launch', note: 'Mainnet markets are not live yet' },
  { label: 'Target Networks', value: '3', note: 'Base · BSC · XLayer' },
  { label: 'Collateral Classes', value: '3', note: 'RWA · ERC-20 & stablecoins · LP NFTs' },
  { label: 'Capital Model', value: 'P2P', note: 'Direct lender–borrower matching' },
]

const markets = [
  {
    title: 'RWA-Backed Lending',
    description: 'Use tokenized real-world assets as isolated collateral for transparent, fixed-term on-chain financing.',
    collateral: 'Tokenized RWA',
    financing: 'Fixed-term liquidity',
  },
  {
    title: 'Token-Backed Lending',
    description: 'Use approved ERC-20 assets and supported stablecoins as isolated collateral for flexible on-chain borrowing.',
    collateral: 'ERC-20 & stablecoins',
    financing: 'P2P capital',
  },
  {
    title: 'LP NFT Lending',
    description: 'Unlock liquidity from ConstFi or Uniswap V3 LP NFT positions while preserving a clear, position-level risk boundary.',
    collateral: 'ConstFi & Uniswap V3 LP NFTs',
    financing: 'P2P capital',
  },
]

const advantages = [
  {
    ...features[1],
    title: 'Fixed Terms, Predictable Costs',
    details: 'Know the borrowing rate and maturity before opening a position. Financing costs stay predictable for the full term.',
  },
  {
    ...features[0],
    title: 'Isolated Risk',
    details: 'Each borrowing position runs in its own margin silo, containing collateral and liquidation exposure at the position level.',
  },
  {
    ...features[3],
    title: 'Capital-Efficient Collateral',
    details: 'Use approved RWA, ERC-20 assets and stablecoins, or ConstFi and Uniswap V3 LP NFTs as productive collateral.',
  },
  {
    ...features[4],
    title: 'Flexible Position Lifecycle',
    details: 'P2P matching, atomic refinancing, and position trading are designed to keep capital moving before and after origination.',
  },
]

const riskControls = [
  {
    title: 'Position-level isolation',
    details: 'Collateral, debt, and liquidation exposure are contained within each individual position.',
  },
  {
    title: 'Transparent market terms',
    details: 'Rates, maturity, collateral parameters, and liquidation rules are defined before a loan is opened.',
  },
  {
    title: 'Pre-launch verification',
    details: 'Deployment addresses, technical documentation, and audit status will be published before mainnet activation.',
  },
]

export default function Home() {
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative max-w-[1152px] mx-auto px-6 pt-28 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[640px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,183,77,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div aria-hidden className="pointer-events-none absolute top-10 left-0 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,183,77,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
            style={{ border: '1px solid rgba(255,183,77,0.25)', background: 'rgba(255,183,77,0.06)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ffb74d' }} />
            <span className="text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-clash)', color: '#ffb74d' }}>
              DeFi Lending Protocol
            </span>
          </div>
          <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-semibold leading-[1.08] tracking-[-0.02em] mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-clash)' }}>
            <span style={{ backgroundImage: 'linear-gradient(135deg, #ffb74d 25%, #d6711b 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Constant Finance
            </span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.90)' }}>
              Reshaping the infrastructure of{' '}
              <span style={{ color: '#fff' }}>DeFi lending</span>
            </span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Fixed rates. RWA, ERC-20 &amp; LP NFT collateral. Peer-to-peer matching.
            A composable lending protocol built for real on-chain capital markets.
          </p>
        </div>
      </section>

      {/* ── Protocol Numbers ─────────────────────────── */}
      <section className="max-w-[1152px] mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#ffb74d' }}>
              Protocol Numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Built for the markets ahead
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Constant Finance is currently pre-launch. These figures describe the initial protocol scope—not live deposits or usage.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,183,77,0.20)', background: 'linear-gradient(135deg, #110d03, #0c0902)' }}>
          {protocolStats.map((stat, index) => (
            <div key={stat.label} className="p-7 min-h-[152px]"
              style={{ borderRight: index < protocolStats.length - 1 ? '1px solid rgba(255,183,77,0.14)' : undefined }}>
              <p className="text-xs uppercase tracking-[0.14em] mb-4" style={{ color: 'rgba(255,255,255,0.34)' }}>{stat.label}</p>
              <p className="text-3xl font-semibold mb-2" style={{ fontFamily: 'var(--font-clash)', color: '#ffb74d' }}>{stat.value}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,220,160,0.46)' }}>{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Markets ─────────────────────────── */}
      <section className="max-w-[1152px] mx-auto px-6 pb-24">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#ffb74d' }}>
            Featured Markets
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Initial market design
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Three collateral classes, fixed-term financing, and direct capital matching across Base, BSC, and XLayer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((market, index) => (
            <article key={market.title} className="relative rounded-2xl p-7 md:p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #110d03 0%, #0c0902 65%, #0f0b03 100%)',
                border: '1.5px solid rgba(255,183,77,0.36)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-12 w-52 h-52 rounded-full"
                style={{ background: 'rgba(255,183,77,0.07)', filter: 'blur(42px)' }} />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span className="text-xs uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.34)' }}>
                    Launch market 0{index + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{ color: '#ffb74d', border: '1px solid rgba(255,183,77,0.25)', background: 'rgba(255,183,77,0.06)' }}>
                    Planned
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>{market.title}</h3>
                <p className="text-sm leading-relaxed mb-8 min-h-[68px]" style={{ color: 'rgba(255,220,160,0.50)' }}>
                  {market.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.28)' }}>Collateral</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>{market.collateral}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.28)' }}>Financing</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>{market.financing}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Advantages ──────────────────────────────── */}
      <section className="max-w-[1152px] mx-auto px-6 pb-24">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#ffb74d' }}>
            Constant Advantage
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Lending infrastructure, reworked
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Hover a capability to focus on how Constant makes fixed-term lending more useful for real on-chain capital.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {advantages.map((f, featureIndex) => (
            <div
              key={f.title}
              tabIndex={0}
              className={`feature-card group relative flex flex-col items-start rounded-2xl overflow-hidden${
                hoveredFeatureIndex === featureIndex ? ' feature-card-active' : ''
              }${
                hoveredFeatureIndex !== null && hoveredFeatureIndex !== featureIndex ? ' feature-card-dimmed' : ''
              }`}
              onMouseEnter={() => setHoveredFeatureIndex(featureIndex)}
              onMouseLeave={() => setHoveredFeatureIndex(null)}
              onFocus={() => setHoveredFeatureIndex(featureIndex)}
              onBlur={() => setHoveredFeatureIndex(null)}
              style={{
                background: 'linear-gradient(135deg, #110d03 0%, #0c0902 60%, #0f0b03 100%)',
                border: '1.5px solid rgba(255,183,77,0.42)',
                boxShadow: '0 0 0 0.5px rgba(255,183,77,0.08), 0 2px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,183,77,0.08)',
                minHeight: '290px',
                padding: '30px 32px',
              }}
            >
              <div aria-hidden className="feature-card-glow pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full"
                style={{ background: 'rgba(255,183,77,0.07)', filter: 'blur(40px)' }} />
              <div className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border mb-8"
                style={{ background: '#1c1005', borderColor: 'rgba(255,183,77,0.35)', color: '#ffb74d' }}>
                {f.icon}
              </div>
              <div className="relative flex-1 min-w-0 pr-24">
                <h3 className="text-xl font-semibold mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-clash)', color: 'rgba(255,255,255,0.92)' }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,220,160,0.52)' }}>
                  {f.details}
                </p>
              </div>
              <div className="feature-deco absolute right-5 bottom-3 w-[150px] h-[90px] hidden sm:block">
                {f.deco}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Security & Risk ─────────────────────────── */}
      <section className="max-w-[1152px] mx-auto px-6 pb-24">
        <div className="rounded-2xl overflow-hidden grid lg:grid-cols-[0.9fr_1.1fr]"
          style={{ border: '1px solid rgba(255,183,77,0.24)', background: 'linear-gradient(135deg, #110d03, #0b0802)' }}>
          <div className="p-8 md:p-10 lg:p-12" style={{ borderRight: '1px solid rgba(255,183,77,0.14)' }}>
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#ffb74d' }}>
              Security &amp; Risk
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Risk boundaries before scale
            </h2>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.44)' }}>
              Security information should be verifiable, not implied. Constant Finance will publish launch-critical evidence before markets accept capital.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
              style={{ color: '#ffb74d', border: '1px solid rgba(255,183,77,0.22)', background: 'rgba(255,183,77,0.05)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ffb74d' }} />
              No public lending markets are live
            </div>
          </div>
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-7">
            {riskControls.map((control, index) => (
              <div key={control.title} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ color: '#ffb74d', border: '1px solid rgba(255,183,77,0.28)', background: 'rgba(255,183,77,0.06)' }}>
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.86)' }}>{control.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)' }}>{control.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────── */}
      <section className="max-w-[1152px] mx-auto px-6 pb-28">
        <div className="relative rounded-2xl overflow-hidden px-8 py-14 md:px-14 md:py-16 text-center"
          style={{
            border: '1px solid rgba(255,183,77,0.38)',
            background: 'radial-gradient(circle at 50% 0%, rgba(255,183,77,0.13), transparent 55%), linear-gradient(135deg, #140e03, #0b0802)',
          }}>
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[520px] h-56 rounded-full"
            style={{ background: 'rgba(247,140,31,0.08)', filter: 'blur(48px)' }} />
          <div className="relative">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#ffb74d' }}>Build With Constant</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-5" style={{ color: 'rgba(255,255,255,0.94)' }}>
              Bring the next lending market on-chain
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.46)' }}>
              We are speaking with asset issuers, liquidity providers, integrators, and market makers ahead of launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-brand inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-black"
                style={{ fontFamily: 'var(--font-clash)', background: 'linear-gradient(135deg, #ffb74d, #f78c1f)' }}>
                Get in Touch
              </Link>
              <a href="/litepaper.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/[0.06]"
                style={{ fontFamily: 'var(--font-clash)', color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Read the Litepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
