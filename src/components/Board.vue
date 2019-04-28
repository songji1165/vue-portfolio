<template>
  <div>
    Board
    <div v-if="loading">loading board ...</div>
    <div v-else>
      <div>bid : {{ bid }}</div>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  // Board컴포넌트에서는 bid에 대한 정보를 조회해야함
  // bid를 통해서 백엔드 데이터를 조회할 수 있기 때문!

  export default {
    data() {
      return {
        bid: 0,
        loading: false
      };
    },
    created() {
      //컴퍼넌트가 실행될때 생성되는 것
      this.fetchData();
    },
    methods: {
      //fetchData : 백엔드 데이터를 요청하고 호출
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.bid = this.$route.params.bid;
          this.loading = false;
        }, 500); //시뮬레이션을 위해 지연시켜봄
      }
    }
  };
</script>
