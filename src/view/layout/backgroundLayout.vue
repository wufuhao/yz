<template>
    <div>
        <el-menu :router="true" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        mode="horizontal">
            <el-menu-item index="/background/userManager">
                <i class="el-icon-menu"></i>
                <span slot="title">账号管理</span>
            </el-menu-item>
            <el-menu-item index="/background/houseManager">
                <i class="el-icon-menu"></i>
                <span slot="title">房源管理</span>
            </el-menu-item>
            <el-menu-item index="/background/houseAdmit">
                <i class="el-icon-menu"></i>
                <span slot="title">房源审核</span>
            </el-menu-item>
            <el-menu-item index="/background/tipOffManager">
                <i class="el-icon-menu"></i>
                <span slot="title">举报审核</span>
            </el-menu-item>
            <el-menu-item index="/background/userAnalysis">
                <i class="el-icon-menu"></i>
                <span slot="title">用户分析</span>
            </el-menu-item>
            <el-menu-item index="/background/areaAnalysis">
                <i class="el-icon-menu"></i>
                <span slot="title">区域分析</span>
            </el-menu-item>
            <el-menu-item index="/background/subwayLineAnalysis">
                <i class="el-icon-menu"></i>
                <span slot="title">地铁线路分析</span>
            </el-menu-item>
            <el-menu-item index="/top/index">
                <i class="el-icon-menu"></i>
                <span slot="title">用户首页</span>
            </el-menu-item>
        </el-menu>
        <!-- <levelbar class="top-breadcrumb"></levelbar> -->
        <router-view style="padding-top:80px;"></router-view>
    </div>
</template>

<script>
import levelbar from '@/view/layout/Levelbar'
export default {
    components:{levelbar},
    data(){
        return{
           
        }
    },
    mounted(){
        
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        float: left;
        /* margin-right: 5%; */
        height: 70px;
    }
</style>
