<template>
    <div :style="note">
        <div class="back-home">
            <el-button type="text" @click="backToHome">返回首页</el-button>
        </div>
        <div class="top-logo">
            <img class="logoImg" src="../../picture/易租logo2.png"/>
        </div>
        <div class="registerDetail">
            <el-form class="registerForm">
                <el-form-item class="registerTittle">
                    注册
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入手机号" style="margin-top:40px;width:100%"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入验证码" ></el-input>
                    <div class="code" @click="refreshCode">
                        <SIdentify :identifyCode="identifyCode" :backgroundColorMin="255" :backgroundColorMax="255"></SIdentify>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入手机验证码"></el-input>
                    <div class="code" @click="refreshCode">
                       <el-button type="primary">获取手机验证码</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="登录密码" type="password" style="width:100%"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked"><el-button type="text">《易租网服务协议》</el-button></el-checkbox>
                <br /><br /><br />
                <el-button class="registerBtn">注册</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import SIdentify from '../../components/identify'
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
            checked:false,
        }
    },
    mounted(){
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods:{
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
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
    .registerDetail{
        margin-left: 30%;
        /* 设置0.7的透明度 */
        /* opacity:0.7; */
        width: 40%;
        height: 400px;
        background-color: rgba(24, 24, 24,0.7);
        text-align: center;
    }
    .registerDetail .el-form-item{
        margin-bottom:10px;
    }
    .registerDetail .code {
        /* margin: 400px auto; */
        margin-top: 5px;
        /* width: 25%; */
        height: 40px;
        float: right;
        /* border: 1px solid red; */
    }
    .registerDetail .el-input{
        width:50%;
        float:left;
        margin-top:5px
    }
    .registerDetail .el-checkbox{
        float:left;
        margin-top: -10px;
    }
    .registerBtn{
        width:100%;
        margin-top: -30px;
        /* margin-top: 100px; */
        float: left;
    }
    .registerForm{
        width: 80%;
        margin-left: 10%;
    }
    .registerTittle .el-form-item__content{
        font-size: 35px;
        color:white;
        margin-bottom: -40px;
        margin-top: 16px;
    }
    .logoImg{
        width: 40%;
        height: 300px;  
        margin-top: -100px;
        margin-bottom: -90px;
    }
   
</style>
