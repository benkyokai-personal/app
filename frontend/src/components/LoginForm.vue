<template>
  <v-card class="loginForm">
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col cols="md">
          <v-card-title> login </v-card-title>
          <v-form ref="form">
            <v-row justify="center" align-content="center">
              <v-col cols="10">
                <v-text-field label="Email" v-model="email"> </v-text-field>
                <v-text-field label="パスワード" v-model="pw"> </v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">login</v-btn>
                <v-btn color="primary" @click="createUser">新規登録</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebaseApp from "../main";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default {
  name: "loginForm",
  data: () => ({
    email: "",
    pw: "",
  }),
  methods: {
    login: function () {
      signInWithEmailAndPassword(auth, this.email, this.pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("create user success." + user);
          this.$router.push("/editor");
        })
        .catch((error) => {
          this.$router.push("/editor");
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: " + errorCode);
          console.log("errorMessage: " + errorMessage);
          alert("認証失敗");
        });
    },
    createUser() {
      this.$router.push("/create");
    },
  },
};
</script>
<style scoped>
.signup {
  top: 500px;
}
.loginForm {
  width: 500px;
  margin: 0 auto;
  top: 25%;
}
</style>
