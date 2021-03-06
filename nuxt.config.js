export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'anselmi.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600&display=swap' },
      { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v3.0.6/css/line.css' }
    ],
    // link: [ { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap' } ],
    // link: [ { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@300;400;600&display=swap' } ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/sass/main.scss'
  ],

  purgeCSS: {
    whitelist: [
      "dark-mode",
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in"
    ],
  },
  
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: 'plugins/all.js',
      ssr: false
    },
    {
      src: "@/plugins/aos",
      mode: "client"
    },
    {
      src: "@/plugins/perspective",
      mode: "client"
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        "postcss-nested": {}
      }
    }
  },

  // Defaults options
  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config.js',
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
}
