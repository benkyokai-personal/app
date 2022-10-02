<template>
  <v-card class="mx-auto overflow-hidden" height="667" width="375">
    <!-- ここはアプリ風UIのヘッダ部分 -->
    <v-system-bar color="indigo darken-3"></v-system-bar>
    <v-app-bar color="indigo accent-4" dark prominent>
      <v-app-bar-nav-icon
        @click.stop="mydrawer = !mydrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Own WebPage</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- // ここはアプリ風UIのヘッダ部分 -->
    <!-- ここがdrawerコンポーネントを呼び出している部分 -->
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
    <!-- // ここがdrawerコンポーネントを呼び出している部分 -->
    <v-card-text>
      Vuetify also provides a drawer menu component by default like this, so
      it's easy to run.
      <span style="display: block; font-size: 0.6rem"
        >（Vuetifyでは、このようにドロワーメニューのコンポーネントもデフォルトで用意されていて、簡単に扱うことができます。）</span
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      mydrawer: false,
      mygroup: null,
      items: [
        { title: "Home", link: "/" },
        { title: "Now Playing", link: "/nowplaying" },
        { title: "Favorite", link: "/favorite" },
        { title: "Interest", link: "/interest" },
        //{ title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    };
  },
};
</script>

<style scoped>
#sidebar {
  position: absolute;
  left: 0%;
  height: 100%;
  z-index: 10;
}
</style>
