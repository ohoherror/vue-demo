import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuPath: [],
    asideMenu:[]
  },
  mutations: {
    getMenu(state, provider) {
      console.log(provider);
      state.menuPath = provider;
    },
    getAsideMenu(state,provider){
      state.asideMenu = provider;
    }
  },
  actions: {},
  modules: {}
});
