import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
admin.firestore().settings({ timestampsInSnapshots: true })

module.exports = functions.firestore
  .document('messages/{message}')
  .onCreate(async (snapshot) => {
    if (snapshot.get('admin')) {
      return Promise.resolve()
    }
    // Authentication ユーザーの削除
    await admin.auth().deleteUser(snapshot.get('uid'))
    // メッセージの送信
    return admin.firestore().collection('messages').add({
      uid: null,
      admin: true,
      message: `アカウントを削除しました。(UID: ${snapshot.get('uid')})`,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    })
  })