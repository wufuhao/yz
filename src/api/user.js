import fetch from '@/utils/fetch'

export function register(registerInfo) {
  return fetch({
    url: '/yz/usr/signInByPhone',
    method: 'post',
    data: registerInfo
  })
}

export function sendCheckMsg(phoneNumber) {
    return fetch({
      url: '/yz/usr/sendCheckMsg',
      method: 'get',
      params: phoneNumber
    })
}

export function loginByPhone(params) {
  return fetch({
    url: '/yz/usr/loginByPhone',
    method: 'post',
    data: params
  })
}