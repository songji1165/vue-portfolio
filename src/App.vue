<template>
  <div id="app">
   {{msg}}
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '라우터를 공부합니다.'
    }
  }
}
</script>

<style>

</style>
