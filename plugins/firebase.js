import firebase from 'firebase/app'
import 'firebase/firestore'

if (firebase.apps.length === 0) {
    firebase.initializeApp(process.env.firebase)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}