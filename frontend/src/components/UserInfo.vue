<template>
  <div class="user-info">aaaaaaa</div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  async created() {
    const userInfo = this.$store.state.userInfo;
    const codeList = await axios.get(`/v1/user/${userInfo.user.uid}`);
    console.log(codeList);
  },
};
</script>

<style scoped>
.user-info {
  position: absolute;
  left: 200px;
}
</style>
