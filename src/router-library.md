# 라우터 라이브러리 사용

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//1. 라우트 컴포넌트 정의
const Login = {
template: `<div>Login Page </div>`
};
const NotFound = {
template: `<div>Page not found</div>`
}

// 2. 라우트 정의
/_
const routes = [
{ path: '/foo', component: Foo },
{ path: '/bar', component: Bar }
]
_/

// 3. 'routes'옵션과 함께 router 인스턴스 만듦
const router = new VueRouter({
mode:'history',
//브라우저에서 라우팅할 때 실행모드 #
//브라우저에 history API가 있을 때 #없이 쓸 수 있다.
// mode를 history로 바꿔줌 (크롬에서 가능)

routes: [{
path: '/',
component: App
},
{
path: '/login',
component: Login
},
{
path: '*',
component: NotFound
}
]
})

new Vue({
el: "#app",
router, //라우터 속성 전달
render: h => h({
template: `<router-view></router-view>`
}) //html대신 렌더 함수를 통해 라우터컴포넌트 추가
});
