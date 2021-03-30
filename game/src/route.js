import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName:"paperLoading" */ "./views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName:"paperLoading"*/ "./views/About.vue"),
    },
  ],
});

export default router;
