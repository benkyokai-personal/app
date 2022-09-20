import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "loginForm",
    component: () => import("../components/LoginForm"),
  },
  {
    path: "/editor",
    name: "EditorForm",
    component: () => import("../components/EditorForm"),
  },
  {
    path: "/create",
    name: "createUsers",
    component: () => import("../components/CreateUsers"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
