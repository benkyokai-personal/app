<template>
  <div>
    <SideBar></SideBar>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import UserInfo from "./UserInfo";

export default {
  name: "HomePage",
  components: {
    SideBar,
    UserInfo,
  },
};
</script>
