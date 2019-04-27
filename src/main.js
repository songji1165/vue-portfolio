import Vue from 'vue'
import router from './router' 

import App from './App.vue' 
//루트컴포넌트 App.vue 연결!

new Vue({
  el: "#app",
  router, //라우터 설정
  render: h => h(App) 
      // 루트컴포넌트 App에 렌더링한다.
});
