import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '*', component: NotFound },
  { path: '/b/:bid', component: Board }
  // :bid 라는 변수를 받을 수 있다
]


const router = new VueRouter({
  mode:'history',
  routes: routes
})

export default router
// router를 내보낸다