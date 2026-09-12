<script setup lang="ts">
import { ref } from 'vue'

// Ported from constant-finance-homepage-v4.html (the source imported into
// Figma), then reconciled against the Figma design, which is authoritative.
const anncOpen = ref(true)

const L = {
  app: 'https://app.constant.finance',
  docs: 'https://constant-finance.gitbook.io/docs',
  points: 'https://points.constant.finance',
  litepaper: '/litepaper.pdf',
  discord: 'https://discord.gg/gCXeqHYCXC',
  x: 'https://x.com/constant_fi',
  github: 'https://github.com/ConstantFinance',
  bd: 'mailto:hello@constant.finance'
}
</script>

<template>
  <div class="lp">

    <div class="annc" v-if="anncOpen">
      📍 Meet Constant Finance at
      <span class="ev">ETH Taipei <b>Sep 13–14</b></span>
      <span class="ev">Korea Blockchain Week <b>Sep 29–Oct 1</b></span>
      <span class="ev">TOKEN2049 Singapore <b>Oct 7–8</b></span>
      <button class="x" aria-label="Dismiss" @click="anncOpen = false">✕</button>
    </div>

    <header>
      <nav class="wrap">
        <a href="/" class="logo">
          <img class="logo-lockup" src="/logo-lockup.svg" width="144" height="50" alt="Constant Finance" />
        </a>
        <div class="navlinks">
          <a :href="L.litepaper">Litepaper</a>
          <a :href="L.docs">Docs <svg class="arr" viewBox="0 0 8.5 8.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M0.9 7.6 7.6 0.9" /><path d="M2.6 0.9h5v5" /></svg></a>
          <a :href="L.points" class="points">Points <svg class="arr" viewBox="0 0 8.5 8.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M0.9 7.6 7.6 0.9" /><path d="M2.6 0.9h5v5" /></svg></a>
        </div>
        <div class="nav-right">
          <a :href="L.app" class="btn btn-amber-outline btn-sm">Launch App</a>
        </div>
      </nav>
    </header>

    <main class="wrap stack" style="padding-top:0;">

      <section class="hero">
        <div class="status-pill"><span class="dot"></span>Public Beta · Live on Sepolia · Audit in progress</div>
        <h1>Turn mismatched borrowing demand <br />into deals that close.</h1>
        <h2 class="sub">A fixed-rate lending protocol you can repay any time.</h2>
        <p class="tagline">Know your maximum loan cost before you sign.</p>
        <div class="hero-ctas">
          <a :href="L.app" class="btn btn-amber-fill">Launch App</a>
          <a :href="L.docs" class="btn btn-blue-fill">Read the docs</a>
          <a :href="L.points" class="points-link">Earn Points on testnet <svg class="arr" viewBox="0 0 8.5 8.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M0.9 7.6 7.6 0.9" /><path d="M2.6 0.9h5v5" /></svg></a>
        </div>
      </section>

      <section id="gap">
        <div class="panel">
          <div class="eyebrow">The gap</div>
          <h3 class="big">Global fixed income is a $160.7T market.<br />About 2% of it has found its way on-chain.</h3>
          <p>DeFi lending carries roughly $49.4B in TVL today, almost all of it on variable rates. On Aave's mainnet deposits alone, we count over $895M in debt that would move to a fixed-cost structure if one existed at the scale borrowers need — and that's before counting L2s, Morpho, Spark, Compound, or Fluid.</p>
          <div class="gap-stats">
            <div class="gap-stat"><span class="v">$160.7T</span><span class="l">Global fixed-income market</span></div>
            <div class="gap-stat"><span class="v">~2%</span><span class="l">Share of it that's on-chain today</span></div>
            <div class="gap-stat"><span class="v">$895M+</span><span class="l">Migratable debt, mainnet Aave alone</span></div>
          </div>
          <p class="gap-note">Estimate based on public on-chain deposits and debt across Aave's mainnet markets as of our latest review; a lower bound that excludes L2s and other lending protocols.</p>
        </div>
      </section>

      <section id="why">
        <div class="panel">
          <div class="eyebrow">Why this needs to exist</div>
          <h3 class="big">The demand already exists. What's missing is the tool.</h3>
          <p>In floating-rate lending, the pool absorbs everything — at the cost of your borrowing rate moving under you, so you can never tell whether the trade pencils out.</p>
          <p>In fixed-rate lending, you need a counterparty at the same amount, the same term, in the opposite direction. That person barely exists, and enormous amounts of demand have simply never closed because of it.</p>
          <p>The industry's answer has been to open more venues to match in. Each new one splits the same order flow into smaller pieces. The requirement itself — that two people want exactly opposite things at exactly the same moment — is still there.</p>
        </div>
      </section>

      <section id="compare">
        <div class="panel">
          <div class="eyebrow">Why order-book, not pool</div>
          <div class="cmp-intro">
            <h3 class="big">The industry already tried both extremes.</h3>
            <p>Pooled protocols like Aave and Compound solve the counterparty problem by keeping a shared pool — the cost is a rate that moves under you. A newer wave of fixed-rate protocols like Term, Maple and Blend solves the certainty problem — the cost is usually a lockup, a matching maturity, or a penalty to leave early. Constant doesn't pick a side.</p>
          </div>
          <div class="cmp-table-wrap">
          <table class="cmp-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Variable pools<br /><span style="color:var(--text-dim);font-weight:400;">Aave, Compound</span></th>
                <th>Repricing fixed<br /><span style="color:var(--text-dim);font-weight:400;">Term, Maple, Blend</span></th>
                <th class="hl">Constant Finance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fixed cost for the full term</th>
                <td class="no">No</td><td>Yes</td><td class="hl">Yes</td>
              </tr>
              <tr>
                <th scope="row">Exit before maturity, no penalty</th>
                <td>Yes</td><td class="no">No</td><td class="hl">Yes</td>
              </tr>
              <tr>
                <th scope="row">No matching counterparty required</th>
                <td>Yes</td><td class="no">No</td><td class="hl">Yes</td>
              </tr>
              <tr>
                <th scope="row">No pre-deposit lockup to start earning</th>
                <td>Yes</td><td class="no">No</td><td class="hl">Yes</td>
              </tr>
              <tr>
                <th scope="row">Liquidation open to anyone, no flash loan</th>
                <td class="no">Varies</td><td class="no">Varies</td><td class="hl">Yes</td>
              </tr>
            </tbody>
          </table>
          </div>
          <p class="cmp-note">This is the same list as "Three things at once" below, seen from the other side — what it costs competitors to give up, we didn't have to.</p>
        </div>
      </section>

      <section id="live-not-roadmap">
        <div class="panel">
          <div class="eyebrow">Live, not roadmap</div>
          <h3 class="big">Two things you'd expect to see on a future release list are already in Public Beta.</h3>
          <div class="live-grid">
            <div class="live-item">
              <span class="live-tag">● Shipped</span>
              <h4>Tokenized debt, from day one</h4>
              <p>Every supply position mints a ConstNFT the moment a match settles — a transferable claim on principal and interest, not a locked ledger entry. It can be held, sold, or used elsewhere in DeFi.</p>
            </div>
            <div class="live-item">
              <span class="live-tag">● Shipped</span>
              <h4>Refinance</h4>
              <p>Rates moved after you signed? Refinance closes the old loan and opens the new one in the same transaction — new suppliers cover the old position in full, your collateral moves straight across, and nothing settles unless all of it does. No unwinding, no repaying out of pocket. Most fixed-rate designs still leave you holding to maturity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="three">
        <div class="panel">
          <div class="eyebrow">Three things at once</div>
          <div class="three-grid">
            <div class="num-card">
              <div class="num-circle">1</div>
              <h4>The rate is fixed</h4>
              <p>Priced at signing. Whatever the market does afterwards has nothing to do with this loan.</p>
            </div>
            <div class="num-card">
              <div class="num-circle">2</div>
              <h4>Repay whenever you want</h4>
              <p>A fixed rate usually means being locked in. Not here. What you signed is a ceiling, not a sentence. No prepayment penalty — the price of that right is already set by the market inside the rate.</p>
            </div>
            <div class="num-card">
              <div class="num-circle">3</div>
              <h4>Nothing is deposited up front</h4>
              <p>Funds are drawn the moment a match settles, and until then they sit in your own wallet. There is no pool of idle capital waiting for borrowers to show up.</p>
            </div>
          </div>
          <p class="synth">These three rarely coexist. Products with fixed rates usually lock you in. Products you can exit any time are usually floating-rate.<br />Designs that don't pre-deposit usually can't fill. Doing all three is the point of the protocol.</p>
        </div>
      </section>

      <section id="sides">
        <div class="panel panel-tint">
        <div class="eyebrow" style="margin-bottom:30px;">If you are...</div>
        <div class="two-col">
          <div class="col-panel borrow">
            <span class="pill amber">Borrowing</span>
            <div class="item">
              <h5>Your cost is capped the moment you sign.</h5>
              <p>Rates go up afterwards — not your problem. Rates come down — you refinance into something cheaper.</p>
            </div>
            <div class="item">
              <h5>You pay only for the time you actually use.</h5>
              <p>Simple interest, accrued per second, and unpaid interest doesn't compound. Borrow for a year, clear it in month three, and you pay three months of interest and take your principal back. That number is computable the day you sign.</p>
            </div>
            <div class="item">
              <h5>Every loan is isolated.</h5>
              <p>Your collateral, your debt, your rate, your maturity — all recorded in a position that belongs to that loan alone. Someone else's trouble doesn't reach you.</p>
            </div>
          </div>
          <div class="col-panel supply">
            <span class="pill blue">Supplying</span>
            <div class="item">
              <h5>Your money keeps earning while it waits.</h5>
              <p>Post an aToken order and your capital stays in Aave earning its supply rate right up to the moment a match settles. (The underlying yield comes from an external protocol and inherits its risk. Check live figures in the app.)</p>
            </div>
            <div class="item">
              <h5>Repayments can go straight back to earning.</h5>
              <p>When a borrower repays, you can have the funds automatically redeposited into Aave and receive aTokens directly. If that deposit fails, you receive the underlying asset instead — nothing gets stuck.</p>
            </div>
            <div class="item">
              <h5>Principal returns to the order book on its own.</h5>
              <p>After an early repayment, as long as you haven't cancelled your order, the principal goes back into the matching pool and is matched against the borrow bids of the day — no manual re-listing. The rate depends on the market at that moment; it may be better, and it may be worse.</p>
            </div>
            <div class="item">
              <h5>Want out early? The claim is transferable.</h5>
              <p>Every fill mints a transferable claim. Give up a little yield and sell it — once the discount makes the return attractive enough, someone takes it. Exit has a price, and the discount is what liquidity costs.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="start">
        <div class="panel">
          <div class="eyebrow">How to start</div>
          <div class="steps-4">
            <div class="step-card">
              <div class="num-circle" style="margin:0 auto 14px;">1</div>
              <h4>Sign an order</h4>
              <p>Borrowers sign a borrow order, suppliers sign a supply order. Off-chain signatures, no gas.</p>
            </div>
            <div class="step-card">
              <div class="num-circle" style="margin:0 auto 14px;">2</div>
              <h4>Get matched</h4>
              <p>Compatible terms clear. One loan can be funded by several supply orders together.</p>
            </div>
            <div class="step-card">
              <div class="num-circle" style="margin:0 auto 14px;">3</div>
              <h4>Settle</h4>
              <p>Transfers, collateral custody, position creation and claim minting all happen in one transaction, or none of them happen.</p>
            </div>
            <div class="step-card">
              <div class="num-circle" style="margin:0 auto 14px;">4</div>
              <h4>Repay</h4>
              <p>Any time. Payments cover interest first, then principal; the supplier's share moves to escrow and can be claimed whenever.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="audience">
        <div class="panel panel-tint">
        <div class="eyebrow" style="margin-bottom:30px;">Who this is for</div>
        <div class="personas">
          <div class="persona-card">
            <div class="persona-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <h4>People running Beta strategies</h4>
            <p>Arbitrage, LP, staking. The margin is 1–2%, so you need a fixed term and a fixed cost before you'll put capital in at all.</p>
          </div>
          <div class="persona-card">
            <div class="persona-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <h4>Short-term borrowing needs</h4>
            <p>The decision collapses to one question: does it pencil out at signing? If yes, sign.</p>
          </div>
          <div class="persona-card">
            <div class="persona-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <h4>Long-horizon collateralized</h4>
            <p>Borrowing stablecoins against BTC you don't want to sell, for a year or more. Even when you expect the collateral to appreciate, a capped cost is what lets you borrow now instead of waiting.</p>
          </div>
        </div>
        </div>
      </section>

      <section id="points">
        <div class="points-panel">
          <div>
            <div class="eyebrow">Testnet, with Points</div>
            <h3 class="big" style="margin-bottom:12px;">Every match on Sepolia earns Points.</h3>
            <p style="color:var(--text);font-size:15px;max-width:52ch;">Points track usage, not idle deposits — supply, borrow, or post LP collateral and they accrue automatically. They carry ahead of mainnet and any future token, with no separate signup step beyond connecting a wallet.</p>
            <div class="points-stats">
              <div><span class="v">1.1–20×</span><span class="l">Leverage range</span></div>
              <div><span class="v">ERC20 + LP</span><span class="l">Collateral types</span></div>
              <div><span class="v">Sepolia</span><span class="l">Current network</span></div>
            </div>
          </div>
          <div class="points-side">
            <p>No lockup to start.<br />Funds stay in your wallet until a match settles.</p>
            <a :href="L.points" class="btn btn-amber-fill btn-block">Start earning Points</a>
          </div>
        </div>
        <p class="points-disclaimer">Points measure protocol usage on Sepolia. They are not a token, carry no guaranteed value or exchange rate, and the criteria may change as the program evolves.</p>
      </section>

      <section id="risk">
        <div class="panel">
          <div class="eyebrow">Security and risk</div>
          <p style="margin-bottom:24px;">We'd rather say this up front. This is a lending protocol. The risks are real.</p>
          <div class="risk-row"><div class="label">Audit</div><div class="desc">In audit.</div></div>
          <div class="risk-row"><div class="label">Isolated positions</div><div class="desc">One loan, one position. Risk doesn't travel between them.</div></div>
          <div class="risk-row"><div class="label">Permissionless liquidation</div><div class="desc">Anyone can liquidate, and it doesn't require a flash loan. Before maturity a single liquidation covers at most half the debt; after maturity, all of it.</div></div>
          <div class="risk-row"><div class="label">Liquidation is recovery, not a guarantee</div><div class="desc">It does not guarantee that every supplier claim is repaid in full.</div></div>
          <div class="risk-row"><div class="label">Matches can fail</div><div class="desc">The cost of not pre-depositing: if a balance or approval has changed by settlement, the whole match reverts rather than opening a partial loan.</div></div>
          <div class="risk-row"><div class="label">External protocol risk</div><div class="desc">aToken orders and auto-reinvestment both depend on Aave and inherit its risk.</div></div>
          <div class="risk-row"><div class="label">Oracle risk</div><div class="desc">Collateral and debt are priced by oracles, with a maximum acceptable price age.</div></div>
          <p class="risk-foot" style="margin-top:22px;">Full risk parameters, the collateral whitelist and liquidation thresholds are all published in the <a :href="L.docs" class="doclink">docs ↗</a></p>
        </div>
      </section>

      <section id="status">
        <div class="two-col uneven">
          <div class="panel">
            <div class="eyebrow">Status</div>
            <div class="status-row">
              <div class="status-dot live"></div>
              <div class="label">Live</div>
              <div class="desc">Ethereum Sepolia. Contract addresses, supported assets and the full risk configuration are in the docs.</div>
            </div>
            <div class="status-row">
              <div class="status-dot progress"></div>
              <div class="label">In progress</div>
              <div class="desc">Audit.</div>
            </div>
            <div class="status-row">
              <div class="status-dot mainnet"></div>
              <div class="label">Mainnet</div>
              <div class="desc">Later this year.</div>
            </div>
            <div class="status-row">
              <div class="status-dot committed"></div>
              <div class="label">Committed<br />not yet live</div>
              <div class="desc">Cross-protocol debt migration — moving a floating-rate liability on Aave V3 onto a fixed, prepayable one in a single transaction. Refinance between Const positions works today; cross-protocol migration is on the roadmap.</div>
            </div>
          </div>
          <div class="invest-card">
            <div class="t-label">FOR INVESTORS &amp; PARTNERS</div>
            <h3>Talk to the team directly.</h3>
            <p>We're building in the open — Public Beta now, audit in progress, mainnet next. If you're looking at a sponsorship, an integration, or a fundraising conversation, reach our BD directly rather than through general support.</p>
            <a :href="L.bd" class="btn btn-amber-fill btn-block">hello@constant.finance</a>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <div class="wrap">
        <div class="foot-cols">
          <div class="foot-col">
            <h4>Products</h4>
            <a :href="L.app">APP</a>
            <a :href="L.docs">Docs</a>
            <a :href="L.points">Points</a>
          </div>
          <div class="foot-col">
            <h4>Resources</h4>
            <a :href="L.litepaper">Lite Paper</a>
            <a :href="L.github">GitHub</a>
          </div>
          <div class="foot-col">
            <h4>Community</h4>
            <a :href="L.discord">Discord</a>
            <span class="soon">Telegram</span>
            <a :href="L.x">X</a>
          </div>
          <div class="foot-col">
            <h4>Contact</h4>
            <a :href="L.bd" class="contact-hl">hello@constant.finance</a>
          </div>
        </div>
        <div class="foot-bottom">Copyright © 2026 Constant Finance Team</div>
      </div>
    </footer>

  </div>
</template>
