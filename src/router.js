import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Pos from "@/views/POS.vue";
import Inventory from "@/views/Inventory.vue";
import SalesHistory from "@/views/SalesHistory.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Pos
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/pos",
      name: "POS",
      component: Pos
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory
    },
    {
      path: "/sales-history",
      name: "Sales-history",
      component: SalesHistory
    }
  ]
});
