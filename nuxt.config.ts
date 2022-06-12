import { defineNuxtConfig, NuxtConfig } from 'nuxt'
import axios from 'axios'
import { name, description } from './package.json'
const SITE_URL = '/nuxtjs-jamstack-sample/'

const nuxtConfig = defineNuxtConfig(async (): Promise<NuxtConfig> => {
  return {
    // ssr: false, // ← SPA
    ssr: true, // ← SSG
    target: 'static', // 静的サイトホスティング
    srcDir: 'src/',

    // GitHub Pages で参照できるようにコンテキストルートを指定する
    // https://qiita.com/kira_puka/items/46a10a5dd353c1d4ad4b
    // app: {
    //   baseURL: SITE_URL,
    //   cdnURL: `https://isystk.github.io${SITE_URL}`,
    // },

    // 環境変数
    publicRuntimeConfig: {
      APP_NAME: name,
      APP_DESCRIPTION: description,
      MICRO_CMS_API_URL: process.env.VITE_MICRO_CMS_API_URL,
      MICRO_CMS_API_KEY: process.env.VITE_MICRO_CMS_API_KEY,
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
    generate: {
      // https://www.dkrk-blog.net/vue-nuxt/nuxt-generate-routes
      routes: await (async () => {
        const pages = await axios
          .get(process.env.VITE_MICRO_CMS_API_URL, {
            headers: {
              'X-MICROCMS-API-KEY': process.env.VITE_MICRO_CMS_API_KEY,
            },
          })
          .then((res) =>
            res.data.contents.map((content) => {
              // return ({
              //   route: `/posts/${content.id}`,
              //   payload: content
              // })
              return `/posts/${content.id}`
            })
          )
        return pages
      })(),
    },
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
  }
})

export default nuxtConfig
