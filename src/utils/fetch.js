import axios from 'axios'
import { Message,Notification} from 'element-ui'
import router from '@/router/index'

const SUCCESS = "200"
const URL_NOT_FOUND = 404
const SYSTEM_EXCEPTION = -9999
const NOT_LOGIN = -9001
const LOGIN_FAIL = -9002
const NOT_AUTH = -9003
const BIZ_ERROR = -1

const errMessage = {
  '404': '请求路径资源不存在',
  '-9999': '系统错误',
  '-9001': '未登录',
  '-9002': '登录失败，用户名或密码错误',
  '-9003': '无访问权限',
  '500': '业务异常'
}

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000,                 // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

//axios实现文件下载
const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}


// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.data.resultCode === SUCCESS) { return response.data } else if (response.data.resultCode === NOT_LOGIN) {
      Message({
        message: '登录无效或未登录',
        type: 'error',
        duration: 3 * 1000
      })
      setTimeout(function() {
        router.push('/login')
      }, 3000)
      return Promise.reject()
    } 
    else if (response.headers && (response.headers['content-type'] === 'application/vnd.ms-excel;charset=utf-8' || response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
      downloadUrl(response.request.responseURL)
      return
    }
    else {
      Message({
        message: errMessage[response.data.resultCode] + ' ' + response.data.resultMessage || '',
        type: 'error',
        duration: 5 * 1000
      })
      // Notification.error({
      //   title: '错误',
      //   message: errMessage[response.data.resultCode] + ' ' + response.data.errorMsg || '',
      //   duration: 0
      // });
      return Promise.reject()
    }
  },
  error => {
    console.log(error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
