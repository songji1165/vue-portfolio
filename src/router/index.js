import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const Login = {
  template: `<div>Login Page </div>`
};
const NotFound = {
  template: `<div>Page not found</div>`
}

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]


const router = new VueRouter({
  mode:'history',
  //브라우저에서 라우팅할 때 실행모드 #
  //브라우저에 history API가 있을 때 #없이 쓸 수 있다.
  // mode를 history로 바꿔줌 (크롬에서 가능)

  routes: routes
})

export default router
// router를 내보낸다