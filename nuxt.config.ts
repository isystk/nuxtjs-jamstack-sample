import { defineNuxtConfig } from 'nuxt'
import axios from 'axios'

import { name, description } from './package.json'

const nuxtConfig = defineNuxtConfig({
  ssr: false,
  target: 'static', // 静的サイトホスティング
  srcDir: 'src/',

  // 環境変数
  publicRuntimeConfig: {
    APP_NAME: name,
    APP_DESCRIPTION: description,
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    // host: "0.0.0.0"
  },
  css: ['~/assets/sass/app.scss'],
  buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@intlify/nuxt3'],
  build: {
    transpile: ['vuetify', 'moment'],
  },
  // generate: {
  //   async routes() {
  //     const pages = await axios
  //       .get(import.meta.env.VITE_MICRO_CMS_API_URL, {
  //         headers: { 'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY }
  //       })
  //       .then((res) =>
  //         res.data.contents.map((content) => ({
  //           route: `/posts/${content.id}`,
  //           payload: content
  //         }))
  //       )
  //     return pages
  //   }
  // },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ja-JP',
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})

export default nuxtConfig
