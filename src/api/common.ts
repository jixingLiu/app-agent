


import request from '@/utils/request'

// 登录方法
export function getAreaCode(data: getAreaCodeParams) {
  return request({
    url: '/system/areaCode/list',
    method: 'get',
    data: data
  })
}

// 获取公告
export function getNoticeList(data: noticeParams) {
  return request({
    url: '/system/notice/list',
    method: 'get',
    data: data
  })
}

export function getNoticeById(id) {
  return request({
    url: `/system/notice/${id}`,
    method: 'get',
  })
}


export function getAgent(data: getAgentParams) {
  return request({
    url: `/app-agent/agent/list`,
    method: 'get',
    data: data
  })
}


interface wxJsapiSignatureParams {
  url: string
}
export function getWxJsapiSignature(data: wxJsapiSignatureParams) {
  return request({
    url: `/app/login/user/wxJsapiSignature`,
    method: 'get',
    data: data
  })
}

