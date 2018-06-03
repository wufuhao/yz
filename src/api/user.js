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

export function getMyPublish(params) {
  return fetch({
    url: '/yz/house/houseInfo/getMyPage',
    method: 'post',
    data: params
  })
}

export function updateUserInfo(params) {
  return fetch({
    url: '/yz/usr/updateUserInfo',
    method: 'post',
    data: params
  })
}

export function loginByLoginId(params) {
  return fetch({
    url: '/yz/usr/loginByLoginId',
    method: 'post',
    data: params
  })
}

export function selectMyFavorites(params) {
  return fetch({
    url: '/yz/house/userFavorite/selectMyFavorites',
    method: 'post',
    data: params
  })
}

export function cancelCollectHouse(params) {
  return fetch({
    url: '/yz/house/userFavorite/cancelCollectHouse',
    method: 'get',
    params: params
  })
}



export function collectHouseInfo(params) {
  return fetch({
    url: '/yz/house/userFavorite/collectHouseInfo',
    method: 'get',
    params: params
  })
}

export function chgPwd(params) {
  return fetch({
    url: '/yz/usr/changePwd',
    method: 'post',
    data: params
  })
}


export function tipOffHouse(params) {
  return fetch({
    url: '/yz/house/userTipOff/tipOffHouse',
    method: 'post',
    data: params
  })
}

export function getUserInfo(params) {
  return fetch({
    url: '/yz/usr/getUserInfo',
    method: 'get',
    params: params
  })
}

