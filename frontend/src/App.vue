<template>
  <v-app>
    <v-app-bar color="indigo accent-4" dark prominent app>
      <v-app-bar-nav-icon
        @click.stop="mydrawer = !mydrawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="mydrawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="mygroup"
          active-class="cyan--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Vue.js</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Vuetify</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>WordPress</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Structured</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
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
