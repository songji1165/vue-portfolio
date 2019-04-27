# router

### main.js

```js
import Vue from "vue";
import App from "./App.vue";

const Login = { template: "<div>Login Page </div>" };

const routes = {
  "/": App, //루트 경로일때는 앱 컴포넌트로 라우팅
  "/login": Login //로그인 경로일때는 로그인 컴포넌트로 라우팅
};

new Vue({
  el: "#app",
  //화면을 그리는 렌더함수 render
  // h함수를 통해서 앱이라는 컴포넌트를 그리고 있다
  //render: h => h(App)

  computed: {
    VueComponent() {
      //패스네임에 해당하는 라우트맵에서 찾아 해당 컴포넌트를 반환
      //없으면 404페이지 반환
      //window.location.pathname메서드 {js문법}
      return (
        routes[window.location.pathname] || {
          template: "<div>Page not found. 404</div>"
        }
      );
    }
  },
  render(h) {
    //경로에 따라서 컴포넌트를 다르게 반환하려 한다.(this.VueComponent)
    return h(this.VueComponent);
  }
});
```
