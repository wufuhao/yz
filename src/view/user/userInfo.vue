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
                    <el-upload
                    action="/yz/usr/uploadUserIcon"
                    :on-success="successUploadPicutre"
                    :on-error="uploadPictureErr"
                    name="upload_file"
                    list-type="picture">
                        <img :src="queryParam.uImgPath" style="width:120px;height:120px;border-radius: 50%;">
                    </el-upload>
                </el-form-item>
                <!-- <el-form-item class="userInfo-leve1" label="用户名：">
                    <el-input v-model="userInfo.loginId" placeholder="未填"></el-input>
                </el-form-item> -->
                <!-- <el-form-item class="userInfo-leve1" label="密码：">
                    <el-input type="password" v-model="userInfo.pwd" placeholder="未填"></el-input>
                </el-form-item> -->
                <el-form-item class="userInfo-leve1" label="昵称：">
                    <el-input v-model="queryParam.name" placeholder="未填"></el-input>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="邮箱：">
                    <el-input v-model="queryParam.email" placeholder="未填"></el-input>
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="绑定手机：">
                    <span>{{userInfo.phoneNo}}</span>
                    <!-- <el-input v-model="userInfo.phoneNo" placeholder="未填"></el-input> -->
                </el-form-item>
                <el-form-item class="userInfo-leve1" label="注册时间：">
                    <span>{{userInfo.createTime}}</span>
                </el-form-item>
                <el-form-item class="userInfo-leve1">
                    <el-button type="primary" @click="saveUserInfo">保存</el-button>
                </el-form-item>
            </el-form>
            <!-- <hr style="width:90%" /> -->
        </div>
    </div>
</template>

<script>
import {updateUserInfo,getUserInfo} from '@/api/user'
export default {
    data(){
        return{
           queryParam:{
                uImgPath:'/static/img/user-default.6aa5c4f.png',
                // phoneNo:'13246307464',
                email:null,
                createTime:'2018-05-01 15:30:31',
                name:'',
                pwd:null    
           },
           userInfo:{}
        }
    },
    mounted(){
        this.search();
    },
    methods:{
        successUploadPicutre(response, file, fileList){  
            console.log(fileList);
            if(fileList.length > 1 ){
                delete fileList[0];
            }
            this.queryParam.uImgPath = fileList[0].response.resultMessage;
        },
        uploadPictureErr(file, fileList){
            console.log(fileList);
        },
        saveUserInfo(){
            updateUserInfo(this.queryParam).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('更新成功')
                }
            })
        },
        search(){
            getUserInfo().then(res=>{
                if(res.resultCode == '200'){
                    this.userInfo = res.busObj;
                }
            })
        }
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
    .userForm .el-input{
        width: 40%;
    }
    .userForm .el-form-item__label{
        width: 90px;
    }
    .picForm .el-upload-list{
        display:none;
    }
</style>
