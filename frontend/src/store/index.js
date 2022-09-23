import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editor: Object,
    language: String,
    userInfo: Object,
  },
  getters: {},
  mutations: {
    bindEditor(state, editor) {
      state.editor = editor;
    },
    changeLanguage(state, language) {
      state.language = language;
    },
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {},
  modules: {},
});
