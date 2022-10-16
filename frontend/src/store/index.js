import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editor: Object,
    language: String,
    userInfo: Object,
    userId: Number,
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
    updateUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {},
  modules: {},
});
