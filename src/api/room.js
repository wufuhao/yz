import fetch from '@/utils/fetch'

export function publishNewRoom(params) {
  return fetch({
    url: '/yz/house/houseInfo/publishHouseInfo',
    method: 'post',
    data: params
  })
}

export function selectDetail(param) {
  return fetch({
    url: '/yz/house/houseInfo/selectDetail',
    method: 'get',
    params: param
  })
}

export function getPage(param) {
  return fetch({
    url: '/yz/house/houseInfo/getPage',
    method: 'post',
    data: param
  })
}

export function getHouseCommentPage(param) {
  return fetch({
    url: '/yz/house/userComment/getHouseCommentPage',
    method: 'post',
    data: param
  })
}

export function commentHouseInfo(param) {
  return fetch({
    url: '/yz/house/userComment/commentHouseInfo',
    method: 'post',
    data: param
  })
}

export function delMyComment(param) {
  return fetch({
    url: '/yz/house/userComment/delMyComment',
    method: 'get',
    params: param
  })
}
