import Vue from "vue";
import router from "./router";

import App from "./App.vue";
//루트컴포넌트 App.vue 연결!

import store from "./store";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
