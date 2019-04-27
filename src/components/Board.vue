<template>
    <div>
        {{bid}}
    </div>
</template>

<script>
// Board컴포넌트에서는 bid에 대한 정보를 조회해야함
// bid를 통해서 백엔드 데이터를 조회할 수 있기 때문!

export default {
    data () {
        return {
            bid : 0
        }
    },
    created(){ //컴퍼넌트가 실행될때 생성되는 것 
        this.bid = this.$route.params.bid
            // Vue.use로 라우터를 주입해줌으로써 this.$router로 접근할 수 있게 된다.
            // this.$router 는 router이다. => 라우터에관한정보!
            //$route라는 객체를 통해 정보를 조회 할수 있다.
            // params 아이디의 정보를 얻을 수 있다.
    }
}
</script>