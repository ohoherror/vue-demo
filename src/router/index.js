import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/components/layout/layout.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    path: "/do",
    name: "处理中心",
    component: layout,
    children: [
      {
        path: "/menu1",
        name: "menu1",
        component: () => import("../views/Menu1.vue")
      }
    ]
  },
  {
    path: "/work",
    name: "工作中心",
    component: layout,
    children: [
      {
        path: "/menu2",
        name: "menu2",
        component: () => import("../views/Menu2.vue")
      },
      {
        path: "/menu3",
        name: "menu3",
        component: () => import("../views/Menu3.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
