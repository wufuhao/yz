<template>
    <div >
        <div class="userInfo-title">
            <span>资料</span>
        </div>
        <div id="userInfo">
            <!-- <div  class="userImg">
                <img src="https://wx.qlogo.cn/mmopen/vi_32/GwPIHmRJmaOyS0oWWElbCXERvH4Xgk1SX3nR4trmSR07QiccicmibcepvsCnWpO1gIERlaQH0LyXeEd3W7XYUT3Zw/0" class="user-pic">
            </div> -->
            <el-form class="userForm">
                <el-form-item class="picForm">
                    <img src="https://wx.qlogo.cn/mmopen/vi_32/GwPIHmRJmaOyS0oWWElbCXERvH4Xgk1SX3nR4trmSR07QiccicmibcepvsCnWpO1gIERlaQH0LyXeEd3W7XYUT3Zw/0" style="width:100%;height:100%;border-radius: 50%;">
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="用户名：">
                    <span v-if="userInfo.userName == null">未填</span>
                    <span v-else>{{userInfo.userName}}</span>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="真实姓名：">
                    <span v-if="userInfo.realName == null">未填</span>
                    <span v-else>{{userInfo.realName}}</span>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="邮箱：">
                    <span v-if="userInfo.email == null">未填</span>
                    <span v-else>{{userInfo.email}}</span>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="绑定手机：">
                    <span v-if="userInfo.phone == null">未填</span>
                    <span v-else>{{userInfo.phone}}</span>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="注册时间：">
                    <span v-if="userInfo.createTime == null">未填</span>
                    <span v-else>{{userInfo.createTime}}</span>
                </el-form-item>
            </el-form>
            <!-- <hr style="width:90%" /> -->
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
           userInfo:{
                userName:null,
                realName:null,
                email:null,
                phone:'13246307464',
                createTime:'2017年04月11日'
           } 
        }
    },
    mounted(){},
    methods:{
        
    }
}
</script>

<style>
    .user-pic{
        width: 120px;
        height: 130px;
        border-radius: 50%;
        cursor: pointer;
    }
    .userInfo-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    .userInfo-title span{
        margin-left: 15px;
    }
    #userInfo{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    #userInfo .el-form{
        margin-left: 20px; 
        margin-top: 20px;
    }
    #userInfo .userImg{
        margin-left: 20px; 
        margin-top: 30px;
        height: 180px;
        width: 150px;
        float: left;
    }
    #userInfo .userInfo-leve1{
        height: 20px;
    }
    #userInfo .picForm{
        width: 120px;
        height: 130px;
    }
    .userForm{
        margin-left: 30% !important;
    }
</style>
