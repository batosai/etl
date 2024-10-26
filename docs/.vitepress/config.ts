import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ETL",
  description: "Extract-transform-load for nodejs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Detail', link: '/guide/detail' },
        ]
      },
      {
        text: 'Samples',
        items: [
          { text: 'DB to CSV', link: '/samples/db-to-csv' },
          { text: 'xlsx to db', link: '/samples/xlsx-to-db' },
        ]
      },
      {
        text: 'ChangeLog',
        link: '/changelog',
      },
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/chaufourier' },
      { icon: 'discord', link: 'https://discord.gg/89eMn2vB' },
      { icon: 'github', link: 'https://github.com/batosai/etl' },
    ],

    search: {
      provider: 'local',
    },
  }
})
