module.exports = {
  mode: 'universal',
  loading: false,
  plugins: [
    { src: '~/plugins/firebase', ssr: true },
    { src: '~/plugins/element-ui', ssr: true }
  ],
  build: {
    publicPath: '/client/'
  },
  env: {
    firebase: {
      apiKey: "AIzaSyBZnuWppDsGFuAwiSiOTcoZm03AJLXh7sw",
      authDomain: "mikuappend.com",
      databaseURL: "https://hecateball-4628e.firebaseio.com",
      projectId: "hecateball-4628e",
      storageBucket: "hecateball-4628e.appspot.com",
      messagingSenderId: "117844882498"
    }
  },
  head: {
    title: 'Firebase + Nuxt.js'
  }
}
