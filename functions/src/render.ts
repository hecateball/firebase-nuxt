import * as functions from 'firebase-functions'
import { Nuxt } from 'nuxt'

// Initialization should be done in global;
// otherwise nuxt fails to find deployed resources (such as .nuxt/)
const nuxt = new Nuxt({
    dev: false,
    debug: true
})

module.exports = functions.https.onRequest(nuxt.render)