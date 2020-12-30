import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import menu from "@/components/allMenu/menu";
import { mapMutations } from "vuex";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: (h) => h(App),
  methods:{
    ...mapMutations(["getAsideMenu"]),
  },
  watch: {
    "$route.matched"(val) {
      let asideAll = menu.filter(ele=>{
        console.log(ele.path)
        console.log(val[0])
        return ele.path === val[0].path
      })
      this.getAsideMenu(asideAll)
      console.log(asideAll);
      console.log(menu);

    },
  },
}).$mount("#app");
