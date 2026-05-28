import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Constant Finance",
  description: "Decentralized lending protocol with Fixed Rates, Flexible Access and Higher Yields",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'App', link: 'https://app.dev-const.com' },
      // { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        // items: [
        //   { text: 'Overview', link: '/docs' },
        //   { 
        //     text: 'Concepts', 
        //     items: [
        //       {text: 'Matching protocol', link: '/docs/concepts/matching-protocol'},
        //       {text: 'Supply', link: '/docs/concepts/supply'},
        //       {text: 'Borrow', link: '/docs/concepts/borrow'},
        //       {text: 'Repay', link: '/docs/concepts/repay'},
        //       {text: 'Early exit', link: '/docs/concepts/early-exit'},
        //       {text: 'Refinance', link: '/docs/concepts/refinance'},
        //       {text: 'Withdraw', link: '/docs/concepts/withdraw'},
        //       {text: 'Liquidation', link: '/docs/concepts/liquidation'},
        //       {text: 'Risks', link: '/docs/concepts/risks'}
        //     ]
        //   }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/constant_fi' },
      { icon: 'discord', link: 'https://discord.gg/gCXeqHYCXC' },
      { icon: 'medium', link: 'https://medium.com/@constantfinance' },
      // { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>'}, link: '' },
      { icon: 'github', link: 'https://github.com/ConstantFinance' }
    ],

    footer: {
      message: '<a href="/about">About</a>. <a href="/privacy-policy">Privacy Policy</a>. <a href="/term-of-use">Term of Use</a>. <a href="/contact">Contact</a>.',
      copyright: 'Copyright © 2026 Constant Finance Team'
    },

    // editLink: {
    //   pattern: 'https://github.com/ConstFiDev/www/edit/main/docs/:path',
    //   text: 'Edit this page'
    // }
  },

  // base: "/const-www/"
})
