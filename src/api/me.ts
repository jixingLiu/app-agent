import request from '@/utils/request'

// 登录方法
export function login(data: loginParams) {
  return request({
    url: '/app/login/user/agent/verify',
    method: 'get',
    data: data
  })
}

// 登录验证码
export function loginSend(data: verifyPhoneParams) {
  return request({
    url: '/app/login/user/send',
    method: 'get',
    data: data
  })
}


export const updateUserInfo = (data: updateUserInfoParams) => {
  return request({
    url: `verifyPhoneParams`,
    method: 'put',
    data
  })
}


export const getAgentEmployees = (data) => {
  return request({
    url: '/app-agent/agent/user/list',
    method: 'get',
    data: data
  })
}

export const addAgentEmployees = (data) => {
  return request({
    url: '/app-agent/agent/user',
    method: 'post',
    data: data
  })
}

export const updateAgentEmployees = (data) => {
  return request({
    url: '/app-agent/agent/user',
    method: 'put',
    data: data
  })
}


export const deleteAgentEmployees = (ids) => {
  return request({
    url: `/app-agent/agent/user/${ids}`,
    method: 'delete',
  })
}

