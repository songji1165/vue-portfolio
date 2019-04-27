<template>
    <div>
        Card 
        <div>
            {{cid}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cid : 0
        }
    },
    watch : {
        //라우트 감시하고 있다가 cid 변경시 작동
        '$route' () {
            this.cid = this.$route.params.cid
        }
    },
    created () { // 처음 한 번 갱신되고나서 변하지 않는다.
        this.cid = this.$route.params.cid
    }
}
</script>