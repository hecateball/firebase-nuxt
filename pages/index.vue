<template>
  <el-main>
    <no-ssr>
      <el-form v-if="!currentUser" @submit.native.prevent>
        <el-form-item>
          <el-input prefix-icon="el-icon-message" placeholder="your@email.com" size="medium" v-model="email"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="signUp">サインアップ</el-button>
        </el-form-item>
      </el-form>
      <el-form v-else @submit.native.prevent>
        <el-form-item>
          <el-input placeholder="コメントをどうぞ" v-model="message" maxlength="100"/>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="!message" type="primary" @click.prevent="signOut" icon="el-icon-edit">コメントしてアカウント削除</el-button>
        </el-form-item>
      </el-form>
    </no-ssr>
    <el-table v-if="messages.length" :data="messages">
      <el-table-column prop="uid" label="UID" width="300"/>
      <el-table-column prop="message" label="メッセージ"/>
    </el-table>
  </el-main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      email: '',
      message: '',
      messages: []
    }
  },
  computed: mapGetters({ currentUser: 'currentUser' }),
  mounted: function() {
    const unsubscribe = firebase.firestore()
      .collection(`messages`)
      .orderBy('createdAt', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.messages.splice(change.newIndex, change.type === 'added' ? 0 : 1, change.doc.data())
        })
      })
    this.$once('hook:beforeDestroy', unsubscribe)
  },
  methods: {
    signUp: async function() {
      try{
        await firebase.auth().sendSignInLinkToEmail(this.email, {
          url: `https://${process.env.firebase.authDomain}/auth`,
          handleCodeInApp: true
        })
        this.$message(`${this.email} にサインアップメールを送信しました。`)
      } catch ({ message }) {
        this.$message.error(message)
      }
    },
    signOut: async function() {
      try {
        await firebase.firestore()
          .collection('messages')
          .add({
            uid: this.currentUser.uid,
            admin: false,
            message: this.message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          })
        this.$message('コメントを送信しました')
        await firebase.auth().signOut()
      } catch({ message }) {
        this.$message.error(message)
      }
    }
  }
}
</script>
