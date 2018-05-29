import fetch from '@/utils/fetch'

export function register(registerInfo) {
  return fetch({
    url: '/data-up/biz/user/register',
    method: 'post',
    data: registerInfo
  })
}

export function login(loginForm) {
  return fetch({
    url: '/data-up/login',
    method: 'post',
    params: loginForm
  })
}

export function getInfo() {
  return fetch({
    url: '/data-up/biz/user/desc',
    method: 'post'
  })
}

export function loginOut() {
  return fetch({
    url: '/data-up/loginout',
    method: 'post'
  })
}

