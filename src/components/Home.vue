<template>
  <div>
    HOME
    <div>
      Board List :
      <div v-if="loading">Loading ..</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">{{ b }}</div>
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
  import { board } from "../api";
  // apin/index.js에서 board객체를 추출

  export default {
    mounted() {
      this.fetchData();
    },
    data() {
      return {
        loading: false,
        boards: []
      };
    },
    methods: {
      fetchData() {
        this.loading = true;
        board
          .fetch()
          .then(data => {
            //성공시 ( = aixois get().then())
            this.boards = data;
          })
          .finally(_ => {
            this.loading = false;
          });
        //   유지보수면에서 의존적인 코드는 삼가해주자 aixos를 별도의 파일로!
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
