<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="right" label-width="0px" class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="opssUserName">
        <span class="svg-container svg-container_login">
          用户名
        </span>
        <el-input name="opssUserName" type="text" v-model="loginForm.wsUserName" autoComplete="on" placeholder="邮箱" />
      </el-form-item>
      <el-form-item prop="opssPassword">
        <span class="svg-container svg-container_login">
          密码
        </span>
        <el-input name="opssPassword" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.wsPassword" autoComplete="on"
          placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:47%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
        <el-button type="primary" style="width:47%; margin-left:15px" :loading="loading" @click="reg">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { isvalidUsername } from '@/utils/validate'

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          wsUserName: 'admin',
          wsPassword: '123456'
        },
        loading: false
      }
    },
    methods: {
      handleLogin() {
        // this.loading = true
        // login(this.loginForm)
        //   .then(res => {
        //     this.loading = false
        //     this.$router.push({ path: '/' })
        //   })
        this.$router.push('/background')
      },

      reg() {
        this.$router.push({ path: '/register' })
      }

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 50%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 70px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>