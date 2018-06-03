<template>
    <div>
        <div class="chgPwd-title">
            <span>修改密码</span>
        </div>
        <div id="chgPwd">
            <el-form class="chgPwdForm" label-position="right">
                <el-form-item label="原密码：">
                    <el-input v-model="param.pwd"></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                    <el-input type="password" v-model="param.newPwd"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码：">
                    <el-input type="password" v-model="checkNewPwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="chgPwdBtn" @click="toChgPwd">确定修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {chgPwd} from '@/api/user'
export default {
    data(){
        return{
            labelPosition: 'right',
            param:{
                pwd:'',
                newPwd:''
            },
            checkNewPwd:'',
        }
    },
    mounted(){

    },
    methods:{
        toChgPwd(){
            if(this.param.pwd == ''){
                this.$message('原密码不能为空');
                return;
            }
            if(this.param.newPwd == ''){
                this.$message('新密码不能为空');
                return;
            }
            if(this.param.newPwd != this.checkNewPwd){
                this.$message('两次密码不一致');
                return;
            }
            chgPwd(this.param).then(res =>{
                if(res.resultCode == '200'){
                    this.$message('修改密码成功');
                }
            })
        },
    }
}
</script>

<style>
    .chgPwd-title{
        height: 50px;
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        background-color: rgb(248,248,248);
        font-size: 25px;
        padding-top: 15px;
    }
    #chgPwd{
        margin-left: 10px;
        border: 1px solid rgba(221, 221, 221, 1);
        
    }
    .chgPwdForm{
        margin-top: 20px;
    }
    .chgPwdForm .el-form-item{
        height: 50px;
    }
    .chgPwdForm .el-input{
        width:50%;
    }
    .chgPwdForm .el-input{
        width:50%;
    }
    .chgPwdForm .el-form-item__label{
        width:100px;
    }
    .chgPwdBtn{
        margin-left: 100px;
        width: 50%;
    }
</style>
