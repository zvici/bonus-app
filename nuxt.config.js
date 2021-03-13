export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bonus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/core-component.js', '@/plugins/modals/v-modal.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Font Awesome
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  bootstrapVue: {
    icons: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.BASE_API_URL ||
      'https://nuxt-demo-nha-default-rtdb.firebaseio.com'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: '#00c58e',
    height: '2px',
    failedColor: 'red',
    continuous: true
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  server: {
    host: '0.0.0.0', // default: localhost
    port: 3107 // default: 3000
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl:
      process.env.BASE_API_URL ||
      'http://192.168.100.69:5000',
    firebaseApiKey: 'AIzaSyAylTp8gBnSOgYJ4cfDVYci-4uhttNNysc'
  },
  router: {
    middleware: 'router-log'
  }
}
