import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editor: Object,
    language: String,
  },
  getters: {},
  mutations: {
    bindEditor(state, editor) {
      state.editor = editor;
    },
    changeLanguage(state, language) {
      state.language = language;
    },
  },
  actions: {},
  modules: {},
});
