const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: "public",
  },
})

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
}
