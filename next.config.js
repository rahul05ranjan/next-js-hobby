const withPWA = require("next-pwa");

// next.config.js
module.exports = {
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
  }

  module.exports = withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  });