<template>
  <v-app>
    <side-bar></side-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  components: { SideBar },
  name: "App",

  data: () => ({
    mydrawer: false,
    mygroup: null,
  }),
};
</script>

<style scoped>
header {
  height: 70px !important;
  z-index: 9999;
  position: fixed;
  top: 0px;
  left: 0px;
}

#editor {
  z-index: 1;
}
</style>
