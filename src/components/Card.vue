<template>
    <div>
        Card 
        <div v-if="loading">Loading card.. </div>
        <div v-else>
            <div>
               cid : {{cid}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cid : 0,
            loading : false
        }
    },
    watch : {
        /*
        '$route' () {
             this.fetchData()
        } */
        '$route' : {
            handler : 'fetchData',
            immediate : true // 즉시실행, created와 같은 역할
        }

    },
   /* created () { // 처음 한 번 갱신되고나서 변하지 않는다.
        this.fetchData()
   }, */
    methods : {
        fetchData () {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            },500)
        }
    }
}
</script>