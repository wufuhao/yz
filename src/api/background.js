import fetch from '@/utils/fetch'


export function getHousePage(param) {
    return fetch({
      url: '/yz/admin/getHousePage',
      method: 'post',
      data: param
    })
}

export function getTipOffPage(param) {
    return fetch({
      url: '/yz/admin/getTipOffPage',
      method: 'post',
      data: param
    })
}

export function getUserPage(param) {
    return fetch({
      url: '/yz/admin/getUserPage',
      method: 'post',
      data: param
    })
}

export function login(param) {
    return fetch({
      url: '/yz/admin/login',
      method: 'post',
      data: param
    })
}

export function updateHousePubStatus(param) {
    return fetch({
      url: '/yz/admin/updateHousePubStatus',
      method: 'get',
      params: param
    })
}

export function updateUserEx(param) {
    return fetch({
      url: '/yz/admin/updateUserEx',
      method: 'get',
      params: param
    })
}

export function updateTipStatus(param) {
    return fetch({
      url: '/yz/admin/updateTipStatus',
      method: 'get',
      params: param
    })
}
