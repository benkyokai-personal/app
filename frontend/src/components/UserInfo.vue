<template>
  <div class="user-info">
    <v-btn
      @click="transitionEditor(code.manageId)"
      v-for="(code, index) in codeList"
      :key="index"
      >editor</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      codeList: [],
    };
  },
  async created() {
    const userInfo = this.$store.state.userInfo;
    const response = await axios.get(`/v1/user/${userInfo.user.uid}`);
    console.log(response);
    this.$store.commit("updateUserId", response.data[0].id);
    this.codeList = response.data[0].code;
    console.log(this.codeList);
  },
  methods: {
    transitionEditor(manageId) {
      console.log(manageId);
      this.$router.push(`/editor/${manageId}`);
    },
  },
};
</script>

<style scoped>
.user-info {
}
</style>
