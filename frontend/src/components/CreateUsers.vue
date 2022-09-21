<template>
  <v-card class="createForm">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title> Create Account </v-card-title>
          <v-text-field label="Email" v-model="email"> </v-text-field>
          <v-text-field label="Password" v-model="pw" type="password">
          </v-text-field>
          <v-btn color="primary" @click="createUser()">SignUp</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebaseApp from "../main";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);
export default {
  name: "createUsers",
  data: () => ({
    email: "",
    pw: "",
  }),
  methods: {
    createUser: function () {
      createUserWithEmailAndPassword(auth, this.email, this.pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("create user success." + user);
          alert("作成成功");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: " + errorCode);
          console.log("errorMessage: " + errorMessage);
          alert("作成失敗");
        });
    },
  },
};
</script>

<style scoped>
.createForm {
  width: 500px;
  margin: 0 auto;
  top: 25%;
}
</style>
