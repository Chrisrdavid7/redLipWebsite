

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Red Lip Productions',
      meta: [
        { name: 'description', content: 'Red Lip Productions is a dynamic, full-service television development and casting company in NYC.' },
        { name: 'keywords', content: 'Red Lip Productions, Casting, Development, NYC, Reality Television, Chelsey Stephens' },
        { name: 'author', content: 'Chris David' },
        { property: 'og:title', content: 'Red Lip Productions - New York' },
        { property: 'og:description', content: 'Red Lip Productions, Casting, Development, NYC, Reality Television, Chelsey Stephens.' },
        { property: 'og:image', content: '/images/RedLipLogo.png' },
        { property: 'og:type', content: 'website' }
  
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
  },
  css: ['@/assets/scss/styles.scss'], // Load SCSS styles
  modules: ['@nuxtjs/sitemap'], // Enable sitemap
  sitemap: {
    hostname: 'https://redlipproductions.com',
    routes: [
      '/', 
      '/shows',
      '/about', 
      '/news', 
      '/contact'
 
    ]
  }
});