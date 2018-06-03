<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            ws:null,
        }
    },
    mounted(){

    },
    methods:{
        createWebSocket(){
            this.ws = new WebSocket('ws://47.106.115.158:8080/reverse/{1}')
        },
    }
}
</script>

<style>

</style>
