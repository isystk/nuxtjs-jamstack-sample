module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
