<template>
  <div>
    HOME
    <div>
      Board List :
      <div v-if="loading">Loading ..</div>
      <div v-else>Api result : {{ apiRes }}</div>

      <ul>
        <li>
          <router-link to="/b/1">Board1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        apiRes: ""
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        //순수 브라우저 API로  http 통신해봄
        //1. 요청객체 만들기
        const req = new XMLHttpRequest();

        //2.
        req.open("GET", "http://localhost:3000/health");

        req.send();

        req.addEventListener("load", () => {
          this.loading = false;
          this.apiRes = {
            status: req.status, //status 코드
            statusText: req.statusText, //문자열로 넘어옴
            response: JSON.parse(req.response)
            //문자열로 넘어온 것 객체로 파싱
          };
        });
      }
    }
  };
</script>
