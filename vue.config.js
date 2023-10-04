
module.exports = {
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://localhost:8991'
      },
      '/meta': {
        target: 'http://localhost:8992'
      }
    },
    client: {
      overlay: false
    },
  }
}
