import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyA-0NI3op2HCfjKdhMvkVJbjg8-ice47Lc",
  authDomain: "benkyokai-d3c53.firebaseapp.com",
  projectId: "benkyokai-d3c53",
  storageBucket: "benkyokai-d3c53.appspot.com",
  messagingSenderId: "95542835224",
  appId: "1:95542835224:web:eb627925d0164af21e2b6d",
  measurementId: "G-7PN3XGQ1YY",
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

const firebaseApp = initializeApp(config);
export default firebaseApp;
