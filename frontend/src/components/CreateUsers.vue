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
import axios from "axios";
const auth = getAuth(firebaseApp);
export default {
  name: "createUsers",
  data: () => ({
    email: "",
    pw: "",
    userDetail: "",
  }),
  methods: {
    async createUser() {
      try {
        this.userDetail = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.pw
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode: " + errorCode);
        console.log("errorMessage: " + errorMessage);
        alert("作成失敗");
      }
      try {
        console.log(this.userDetail);
        await axios.post("/v1/user", {
          email: this.email,
          userName: "sample",
          uuid: this.userDetail.user.uid,
        });
      } catch (e) {
        console.log(e);
      }
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
