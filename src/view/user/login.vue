<template>
    <div :style="note">
        <div class="back-home">
            <el-button type="text" @click="backToHome">返回首页</el-button>
        </div>
        <div class="top-logo">
            <img class="logoImg" src="../../picture/yizuLogo2.png"/>
        </div>
        <el-form class="loginDetail">
            <el-form-item class="selectLogin">
                <el-button style="width:45%" type="text" @click="generalLogin = true">普通方式登录</el-button>
                <el-button style="width:45%" type="text" @click="generalLogin = false">手机动态密码登录</el-button>
            </el-form-item>
            <el-form-item v-if="generalLogin">
                <el-input placeholder="邮箱/手机号/用户名" class="longInput" v-model="loginByLoginIdParam.loginId"></el-input>
            </el-form-item>
            <el-form-item v-if="!generalLogin">
                <el-input placeholder="手机号" class="longInput" v-model="loginByPhoneParam.phone"></el-input>
            </el-form-item>
            <el-form-item v-if="generalLogin">
                <el-input type="password" placeholder="密码" class="longInput" v-model="loginByLoginIdParam.pwd"></el-input>
            </el-form-item>
            <el-form-item  v-if="!generalLogin" style="display: block;">
                <el-input placeholder="请输入手机动态密码" class="shortInput" v-model="loginByPhoneParam.code"></el-input>
                <div class="getPhonePwd">
                    <el-button type="primary" @click="getCheckMsg">获取手机验证码</el-button>
                </div>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入验证码" class="shortInput" v-model="checkedCode"></el-input>
                <div class="code" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode" :backgroundColorMin="255" :backgroundColorMax="255"></SIdentify>
                </div>
            </el-form-item>
            <el-form-item>
                <!-- <el-checkbox v-model="checked" class="loginInWeek"><el-button type="text">7天免登录</el-button></el-checkbox> -->
                <el-button type="text" class="forgetPwd">忘记密码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button class="loginByUserBtn" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
       
    </div>
</template>

<script>
import SIdentify from '../../components/identify'
import {sendCheckMsg,register,loginByPhone,loginByLoginId} from '@/api/user'
export default {
    components: {SIdentify},  
    data(){
        return{
            note:{
                backgroundImage:'url(' + require('../../picture/regist.jpg') + ')',
                width:'100%',
                height:'900px'
            },
            identifyCodes: "1234567890",
            identifyCode: "",
            checkedCode:'',
            checked:false,
            generalLogin:true,
            checked:true,
            checkedCodeUsed:true,
            loginByPhoneParam:{
                phone:'',
                msgId:'',
                code:''
            },
            loginByLoginIdParam:{
                loginId:'',
                pwd:''
            },
        }
    },
    mounted(){
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods:{
        login(){
           if(this.checkedCodeUsed){
               this.$message('图形验证码已过期，请刷新图形验证码后再试')
               return;
           }
           if(this.checkedCode == ''){
               this.$message('图形验证码不能为空')
               return;
           }
           if(this.checkedCode != this.identifyCode){
               this.$message('图形验证码错误')
               return;
           }

           if(this.generalLogin){
               if(this.loginByLoginIdParam.loginId == '' || this.loginByLoginIdParam.pwd == ''){
                   this.$message('账号/密码不能为空');
                   return;
               }
               loginByLoginId(this.loginByLoginIdParam).then(res =>{
                   if(res.resultCode == "200"){
                        sessionStorage.user = res.busObj.uId;
                        this.$router.push('/index');
                    }
                    this.checkedCodeUsed = true;
               })
           }else{
               if(this.loginByPhoneParam.phone == ''){
                   this.$message('手机号不能为空');
                   return;
               }
               if(this.loginByPhoneParam.code == ''){
                   this.$message('手机验证码不能为空');
                   return;
               }
               loginByPhone(this.loginByPhoneParam)
                .then(res =>{
                    if(res.resultCode == "200"){
                        sessionStorage.user = res.busObj.uId;
                        this.$router.push('/index');
                    }
                    this.checkedCodeUsed = true;
                })
           }
        },
        getCheckMsg(){
            if(this.loginByPhoneParam.phone == null || this.loginByPhoneParam.phone == ""){
                this.$message('手机号不能为空');
                return;
            }
            sendCheckMsg({phone:this.loginByPhoneParam.phone})
            .then(res =>{
                this.loginByPhoneParam.msgId = res.resultMessage;
                console.log(this.loginByPhoneParam);
            })
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            this.checkedCodeUsed = false;
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ];
            }
            console.log(this.identifyCode);
        },
        backToHome(){
            this.$router.push('/index')
        },
    }
}
</script>

<style>

    .back-home button{
        margin-top: 15px;
        margin-left: 90px;
    }
    .back-home button span{
        color: aliceblue;
        font-size: 16px;
    }
    .top-logo{
        text-align: center
    }
    .loginDetail{
        width: 40%;
        margin-left: 30%;
        height: 400px;
        background-color: rgba(24, 24, 24,0.7);
    }
    .loginDetail .selectLogin button{
        color: aliceblue;
        font-size: 16px;
    }
    .loginDetail .selectLogin button:focus{
        color: rgb(123, 183, 233);
        font-size: 16px;
        
    }
    .loginDetail .el-form-item{
        margin-bottom:10px;
    }
    .loginDetail .selectLogin button:hover{
        color: aliceblue;
        font-size: 16px;
        text-decoration: underline;
    }
    .longInput{
        width: 80%;
        margin-left: 10%;
        margin-top: 10px;
    }
    .shortInput{
        width:35%;
        margin-left: 10%;
        float: left;
        margin-top: 10px;
    }
    .loginDetail .code{
        float: right;
        margin-right: 10%;
        margin-top: 11px;
    }
    .loginByUserBtn{
        width: 80%;
        margin-left: 10% !important;
    }
    .selectLogin{
        padding-top: 20px;
    }
    .forgetPwd{
        float: right;
        /* display: block; */
        margin-right: 10%;
        /* margin-top: 100px; */
    }
    .loginInWeek{
        margin-left: 10%;
    }
    .getPhonePwd{
        margin-top: 10px;
        margin-right: 10%;
        float: right; 
    }
    .logoImg{
        width: 40%;
        height: 300px;  
        margin-top: -100px;
        margin-bottom: -90px;
    }
   
</style>
