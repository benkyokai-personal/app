<template>
  <div class="user-info">
    <v-btn @click="transitionEditor">editor</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  async created() {
    const userInfo = this.$store.state.userInfo;
    console.log(userInfo);
    const codeList = await axios.get(`/v1/user/${userInfo.user.uid}`);
    console.log(codeList);
  },
  methods: {
    transitionEditor() {
      this.$router.push("/editor");
    },
  },
};
</script>

<style scoped>
.user-info {
}
</style>
