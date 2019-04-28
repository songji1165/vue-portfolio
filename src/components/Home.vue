<template>
  <div>
    HOME
    <div>
      Board List :
      <div v-if="loading">Loading ..</div>
      <div v-else>Api result : {{ apiRes }}</div>
      <div v-if="error">
        <pre>{{ error }}</pre>
      </div>
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
  import axios from "axios"; //axios 불러오기

  export default {
    data() {
      return {
        loading: false,
        apiRes: "",
        error: ""
      };
    },

    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        //axios 설치

        axios
          .get("http://localhost:3000/healthh")
          .then(res => {
            //응답받음 (성공)
            this.apiRes = res.data;
          })
          .catch(res => {
            //에러일 경우
            this.error = res.response.data;
          })
          .finally(() => {
            //then,catch 수행후 공통적으로
            this.loading = false;
          });
      }
    }
  };
</script>

<!-- axios promise기반의 http 클리아언트 ,브라우저와node에서 사용가능
-순수 브라우저 API로  http 통신해봄 => 이것을 만들어줌
-자동 json 변환 등등 특징많다!

1. 라이브러리 설치 
npm install axios


-->
