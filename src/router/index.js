import Vue from 'vue'
import Router from 'vue-router'
import top from '@/view/layout/top'
import userLayout from '@/view/layout/userLayout'
import backgroundLayout from '@/view/layout/backgroundLayout'
import index from '@/view/index'

import register from '@/view/user/register'
import login from '@/view/user/login'
import userInfo from '@/view/user/userInfo'
import userLike from '@/view/user/userLike'
import userPublish from '@/view/user/userPublish'
import userComment from '@/view/user/userComment'
import userFoot from '@/view/user/userFoot'
import userTipoff from '@/view/user/userTipoff'
import changePassword from '@/view/user/chgPwd'


import publishNewRoom from '@/view/room/publishNewRoom'
import roomSearch from '@/view/room/roomSearch'
import roomDetail from '@/view/room/roomDetail'
import roomCompare from '@/view/room/roomCompare'


import backgroundLogin from '@/view/background/login'
import houseAdmit from '@/view/background/houseAdmit'
import houseManager from '@/view/background/houseManager'
import tipOffManager from '@/view/background/tipOffManager'
import userManager from '@/view/background/userManager'

import test from '@/view/user/contactTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: top,
      children:[
        {path:'index',name:'首页',component:index},
        // {path:'userInfo',name:'个人信息',component:userInfo}
      ]
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path:'/login',
      name:'登录',
      component:login
    },
    {
      path:'/user',
      name:'用户',
      component:userLayout,
      children:[
        {path:'info',name:'个人信息',component:userInfo},
        {path:'like',name:'我的收藏',component:userLike},
        {path:'publish',name:'我的发布',component:userPublish},
        {path:'comment',name:'我的评论',component:userComment},
        {path:'tipoff',name:'我的评论',component:userTipoff},
        {path:'foot',name:'我的足迹',component:userFoot},
        {path:'changePassword',name:'修改密码',component:changePassword},
        {path:'publishNewRoom',name:'房源发布',component:publishNewRoom},
      ]
    },
    {
      path:'/room',
      name:'房源',
      component:top,
      children:[
        {path:'search',name:'搜索',component:roomSearch},
        {path:'detail',name:'详情',component:roomDetail},
        {path:'compare',name:'对比',component:roomCompare},
      ]
    },
    {
      path:'/background',
      name:'后台',
      component:backgroundLayout,
      children:[
        {path:'houseAdmit',name:'房源审核',component:houseAdmit},
        {path:'houseManager',name:'房源管理',component:houseManager},
        {path:'userManager',name:'账号管理',component:userManager},
        {path:'tipOffManager',name:'举报管理',component:tipOffManager},
      ]
    },
    {
      path:'/background/Login',
      name:'管理端登录',
      component:backgroundLogin
    },
    {
      path:'/contactTest',
      name:'在线聊天测试',
      component:test
    }
  ]
})
