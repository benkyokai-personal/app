<template>
  <div id="sidebar">
    <v-card height="100%" width="200" class="mx-auto">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list max-height nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                <router-link
                  :to="{ path: item.link }"
                  style="color: white; text-decoration: none"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
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
