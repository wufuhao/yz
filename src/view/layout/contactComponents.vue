<template>
    <div>
        <div class="contact"></div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){},
    methods:{

    }
}
</script>

<style>
    .contact{
        position:absolute;
        position:fixed;
        right:40px;
        bottom: 40px;
        height: 500px;
        width: 400px;
        border: 1px solid red;
        background-color: #24272e;
        z-index: 3;
    }
</style>
