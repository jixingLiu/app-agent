import request from '@/utils/request'

// // 登录方法
// export function login(username, password, code, uuid) {
//   const data = {
//     username,
//     password,
//     code,
//     uuid
//   }
//   return request({
//     url: '/login',
//     headers: {
//       isToken: false,
//       repeatSubmit: false
//     },
//     method: 'post',
//     data: data
//   })
// }

// // 注册方法
// export function register(data) {
//   return request({
//     url: '/register',
//     headers: {
//       isToken: false
//     },
//     method: 'post',
//     data: data
//   })
// }

// // 获取用户详细信息
// export function getInfo() {
//   return request({
//     url: '/getInfo',
//     method: 'get'
//   })
// }

// // 退出方法
// export function logout() {
//   return request({
//     url: '/logout',
//     method: 'post'
//   })
// }

// // 获取验证码
// export function getCodeImg() {
//   return request({
//     url: '/captchaImage',
//     headers: {
//       isToken: false
//     },
//     method: 'get',
//     timeout: 20000
//   })
// }

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