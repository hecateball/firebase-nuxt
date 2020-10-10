import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  loading: false,
  modules: [ '@inkline/nuxt' ],
  buildModules: [ '@nuxtjs/pwa' ],
  plugins: [
    { src: '~/plugins/firebase', ssr: true },
  ],
  env: {
    FIREBASE_API_KEY: 'AIzaSyDOYeAuekhLYfPvQyHS7eaNQ4J2G-HWEt8',
    FIREBASE_AUTH_DOMAIN: 'hoshimachi-studio.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://hoshimachi-studio.firebaseio.com',
    FIREBASE_PROJECT_ID: 'hoshimachi-studio',
    FIREBASE_STORAGE_BUCKET: 'hoshimachi-studio.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '96795732381',
    FIREBASE_APP_ID: '1:96795732381:web:e492432a2ccd3c0f89a774',
    FIREBASE_MEASUREMENT_ID: 'G-0CGK3N66KS',
  },
  head: {
    title: 'Firebase + Nuxt.js'
  },
  build: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'static/',
            to: path.join(__dirname, '.nuxt/dist')
          }
        ]
      })
    ]
  }
}
