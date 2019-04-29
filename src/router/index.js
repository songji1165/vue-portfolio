import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Board from "../components/Board.vue";
import Card from "../components/Card.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  //to : 현재경로

  //토근정보가 있으면 LS에 저장
  const isAuth = localStorage.getItem("token");

  //로그인 완료후에 돌아가야한다.
  //쿼리스트링 리턴path정보 전달
  // rPath=${to.path} : 로그인페이지에서 로그인 완료 후 에 to.path로 이동
  // 쿼리문자는 encodeURIComponent()를 이용해 아스키문자열로 변환해주어야함
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;

  // 토근있으면 next함수(인자3) 호출해서 계속 그대로 수행,
  // 그렇지 않으면 loginpath를 호출
  isAuth ? next() : next(loginPath);
};

const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/b/:bid",
    component: Board,
    beforeEnter: requireAuth,
    children: [
      //하위경로 지정 http://localhost:8080/b/1/c/1 중첩라우터
      {
        path: "c/:cid",
        component: Card,
        beforeEnter: requireAuth
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
// router를 내보낸다
