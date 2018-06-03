<template>
    <div>
        <div class="top">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-top"
            mode="horizontal"
            @select="handleSelect"
            text-color="#fff"
            active-text-color="#fff"
            background-color="rgba(255,255,255,0)"
            >
                <el-menu-item index="1" style="padding:0px;margin:0px"> 
                    <img class="logoHomeImg" src="../../picture/yizuLogo1.png"/>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-select v-model="selectedCity" style="width:100px">
                        <el-option value="gz" key="gz" label="广州"></el-option>
                        <el-option value="bj" key="bj" label="北京"></el-option>
                        <el-option value="sh" key="sh" label="上海"></el-option>
                        <el-option value="sz" key="sz" label="深圳"></el-option>
                    </el-select>
                </el-menu-item>
                <el-menu-item index="3" ><el-button type="text" @click="toHome" class="topBtn">首页</el-button></el-menu-item>
            </el-menu>
            <div  style="position:absolute;z-index:2; margin-left:90%;height:60px">
                <div v-if="user == null">
                    <el-button type="text" class="topBtn" @click="toLogin" >登录</el-button>
                    <el-button type="text" class="topBtn" @click="toRegister" >注册</el-button>
                </div>
                <div v-else>
                    <el-button type="text" class="topBtn" @click="toUserInfo" >我的易租</el-button>
                    <el-button type="text" class="topBtn" @click="toLoginOut" >注销</el-button>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="centerDiv">
                <div style="width:100%">
                    <levelbar class="top-breadcrumb"></levelbar>
                </div>
                <div>
                    <el-menu
                    default-active="2"
                    class="menu">
                        <el-menu-item-group v-for=" item in MenuList" :key="item.title">
                            <template slot="title">{{item.title}}</template>
                            <el-menu-item v-for=" itemChild in item.child" :key="itemChild.name" :index="itemChild.name">
                                <el-button type="text" @click="toTargetPage(itemChild.url)">{{itemChild.name}}</el-button>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-menu>
                    <div style="margin-left:15%">
                    <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import levelbar from '@/view/layout/Levelbar'
export default {
    components:{levelbar},
    data(){
        return{
            activeIndex2: '1',
            selectedCity:'',
            user:null,
            MenuList:[
                {
                    title:'个人中心',
                    child:[
                        {
                            name:'我的发布',
                            url:'/user/publish'
                        },
                        {
                            name:'我的收藏',
                            url:'/user/like'
                        },
                        {
                            name:'我的评论',
                            url:'/user/comment'
                        },
                        {
                            name:'我的足迹',
                            url:'/user/foot'
                        },
                    ]
                },
                {
                    title:'账户设置',
                    child:[
                        {
                            name:'个人资料',
                            url:'/user/info'
                        },
                        {
                            name:'修改密码',
                            url:'/user/changePassword'
                        },
                        {
                            name:'消息管理',
                            url:'/user/myRoom'
                        },
                    ]
                }
            ],
        }
    },
    mounted(){
        this.user = sessionStorage.user;
    },
    methods:{
        toUserInfo(){
            this.$router.push('/user/info');
        },
        toLoginOut(){
            delete sessionStorage.user;
            this.user = null;
            this.$router.push('/index');
            // window.location.reload();
        },
        toRegister(){
            this.$router.push('/register');
        },
        toLogin(){
            this.$router.push('/login')
        }, 
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        toHome(){
            this.$router.push("/index");
        },
        toTargetPage(url){
            this.$router.push(url);
        },
    }
}
</script>

<style>
    /* .main{
        background-color: rgba(155, 154, 154,0.2);
    } */
    .centerDiv{
        padding-top: 60px;
        width: 70%;
        margin-left: 15%;
        
    }
    .topBtn{
        margin:auto;
        height:60px;
        /* height: 100%; */
    }
    .topBtn span{
        color: #fff;
    }
    .top{
        /* background-color: #545c64; */
        /* 透明 */
        /* background-color: transparent; */
        position:relative;
    }
    .el-menu-top{
        position:absolute;
        z-index:2;
        width:100%;
        height:60px; 
        background-color:rgba(0,0,0,0.5) !important;
    }
    .menu{
        width: 15%;
        float: left;
    }
    .menu .el-menu-item-group__title{
        font-size: 20px;
    }
    .logoHomeImg{
        margin-top: -10px;
        width: 170px;
        height: 80px;
    }
</style>
