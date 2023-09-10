
module.exports = {
  devServer: {
    proxy: 'http://localhost:8991',
    client: {
      overlay: false
    },
  }
}
