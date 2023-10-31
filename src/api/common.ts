


import request from '@/utils/request'

// 登录方法
export function getAreaCode(data: getAreaCodeParams) {
  return request({
    url: '/system/areaCode/list',
    method: 'get',
    data: data
  })
}

