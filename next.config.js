module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/jobs',
          permanent: true,
        },
      ]
    },
  }