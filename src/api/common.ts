


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