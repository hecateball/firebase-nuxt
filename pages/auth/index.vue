<template>
  <div>サインイン処理中...</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  validate: function() {
    return process.server
  },
  mounted: async function() {
    if (!firebase.auth().isSignInWithEmailLink(window.location.href)) {
      this.$router.push('/')
      this.$message.error('不正な画面遷移を検出しました')
      return
    }
    try {
      const { value } = await this.$prompt('認証メールを受け取ったメールアドレスを入力してください。',
        'メールアドレスの確認', {
          confirmButtonText: 'OK',
          showCancelButton: false
        })
      await firebase.auth().signInWithEmailLink(value, window.location.href)
      this.$router.push('/')
    } catch ({ message }) {
      this.$message.error(message)
      this.$router.push('/')
    }
  }
}
</script>