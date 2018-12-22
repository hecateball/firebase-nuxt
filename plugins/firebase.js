import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default ({ store }) => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(process.env.firebase)
    firebase.firestore().settings({ timestampsInSnapshots: true })
  }
  return new Promise ((resolve) => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      store.dispatch('currentUser', currentUser)
      resolve()
    })
  })
}

