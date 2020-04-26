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
    API_KEY: "2a7a202c431ecf4169c017ee138d8577",
  },
}
