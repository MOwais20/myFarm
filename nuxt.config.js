const BASE_API_URL = process.env.VUE_APP_API_URL_
const BASE_URL = process.env.MAIN_URL
const PORT = process.env.PORT

export default {
  server: {
    port: PORT,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myfarm-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/vuetify',
    'nuxt-svg-loader',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
  },

  googleFonts: {
    families: {
      Mitr: true,
      Roboto: true
    },
    display: 'swap',
    preload: true,
    download: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'top-right',
    duration: 3000,
    fitToScreen: true,
    singleton: true,
    keepOnHover: true
  },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
    baseURL: process.env.VUE_APP_API_URL_,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.VUE_APP_API_URL_
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
