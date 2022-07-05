module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [],
  theme: {
    extend: {
      'nameColor': '#145f74'
    },
  },
  plugins: [],
}
