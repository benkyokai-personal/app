<template>
  <div>
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
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                <router-link
                  :to="{ path: item.link }"
                  style="color: black; text-decoration: none"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
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
        { title: "Compe", link: "/compe" },
        { title: "editor", link: "/editor" },
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
header {
  height: 70px !important;
}
</style>
