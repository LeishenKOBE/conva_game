import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./route";
import "./assets/css/reset.css";

import ElButton from "element-ui/lib/button";
import "element-ui/lib/theme-chalk/button.css";

Vue.use(ElButton);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
