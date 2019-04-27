import Vue from 'vue'

import router from './router' // index.js 자동으로 연결

new Vue({
  el: "#app",
  router, 
  render: h => h({
    template: `<router-view></router-view>`
  }) 
});
