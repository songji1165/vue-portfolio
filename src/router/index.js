import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/b/:bid',
    component: Board,
    children: [ //하위경로 지정 http://localhost:8080/b/1/c/1 중첩라우터
      {
        path: 'c/:cid',
        component: Card
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  },
]


const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
// router를 내보낸다
