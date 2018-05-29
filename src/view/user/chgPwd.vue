<template>
    <div>
        <div class="chgPwd-title">
            <span>修改密码</span>
        </div>
        <div id="chgPwd">
            <el-form class="chgPwdForm" label-position="right">
                <el-form-item label="原密码：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="重复新密码：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="chgPwdBtn">确定修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            labelPosition: 'right',
        }
    },
    mounted(){

    },
    methods:{

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
