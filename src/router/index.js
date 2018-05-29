import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import top from '@/view/layout/top'
import layout from '@/view/layout/layout'
import index from '@/view/index'

import register from '@/view/user/register'
import login from '@/view/user/login'
import userInfo from '@/view/user/userInfo'
import userLike from '@/view/user/userLike'
import changePassword from '@/view/user/chgPwd'
import publishNewRoom from '@/view/room/publishNewRoom'
import roomSearch from '@/view/room/roomSearch'


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
      component:layout,
      children:[
        {path:'info',name:'个人信息',component:userInfo},
        {path:'like',name:'我的收藏',component:userLike},
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
      ]
    },
  ]
})
