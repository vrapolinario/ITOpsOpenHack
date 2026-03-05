import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI for ITOps Open Hack",
  description: "AI for ITOps Open Hack website with challenge instructions.",
  themeConfig: {

    sidebar: [
      {
        text: 'Welcome',
        link: '/index',
        items: [
          { text: 'Introduction', link: '/index' }
        ]
      },
      {
        text: 'The Challenge',
        items: [
          { text: ' 🎯 Kick off', link: '/challenges/start' },
          { text: ' 🚀 Deploy', link: '/challenges/deploy' },
          { text: ' 🔐 Identity', link: '/challenges/challenge-1' },
          { text: ' 🌐 Networking', link: '/challenges/challenge-2' },
          { text: ' 📊 Monitoring', link: '/challenges/challenge-3' },
          { text: ' 🛡️ Policy', link: '/challenges/challenge-4' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vrapolinario/ITOpsOpenHack' }
    ]
  }
})