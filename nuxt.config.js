module.exports = {
  mode: 'universal',
  loading: false,
  modules: [ '@inkline/nuxt' ],
  plugins: [
    { src: '~/plugins/firebase', ssr: true },
  ],
  env: {
    FIREBASE_API_KEY: 'AIzaSyD83KgMCnT1GNumpojKybJlV2WnDRlFtEM',
    FIREBASE_AUTH_DOMAIN: 'shiodaifuku-io.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://shiodaifuku-io.firebaseio.com',
    FIREBASE_PROJECT_ID: 'shiodaifuku-io',
    FIREBASE_STORAGE_BUCKET: 'shiodaifuku-io.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '875470404419',
    FIREBASE_APP_ID: '1:875470404419:web:aee8c38e72511426',
    FIREBASE_MEASUREMENT_ID: 'G-C66P2JVWL1',
  },
  head: {
    title: 'Firebase + Nuxt.js'
  }
}
