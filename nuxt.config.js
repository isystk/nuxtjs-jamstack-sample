import axios from 'axios'

const pkg = require("./package");

require("dotenv").config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir: "src/",

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  publicRuntimeConfig: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-jamstack-sample',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    bodyAttrs: {
      class: 'column1'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  "@/assets/sass/app.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    async routes() {
      const pages = await axios
        .get('https://isystk.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-API-KEY': 'a1214110-aa08-4a07-9b56-7866b705d077' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/posts/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
