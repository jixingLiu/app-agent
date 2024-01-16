import Taro from '@tarojs/taro';
// import { getToken } from '@/utils/auth';
import { API_BASE_URL } from '@/constants/index'

const errorCode = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  'default': '系统未知错误，请反馈给管理员'
}

// 创建Taro请求实例
const request = (options): Promise<any> => {
  const token = Taro.getStorageSync('token');

  // 设置请求头
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  if (token) {
    headers['Authorization'] = 'Bearer ' + encodeURIComponent(token);
  }

  const { url, data, method = 'GET' } = options;
  let env = process.env.NODE_ENV || 'development';
  console.log(env,API_BASE_URL, 'API_BASE_URL')
  // console.log(   envConfig[env].API_BASE_URL + url, 'process.env.NODE_ENV')
  return Taro.request({
    url: API_BASE_URL + url,
    data,
    method,
    header: headers,
  })
    .then((response) => {
      const { statusCode, data } = response;
      let { code } = data
      
      console.log(code, 'response')

      if (statusCode === 200 && (code === 200 || !code)) {
        return data;
      } else {
        if (code === 401) {
          Taro.removeStorageSync('token')
          Taro.navigateTo({
            url: '/pages/login/index'
          })
        }
        const errorText = errorCode[code] || errorCode['default'];
        Taro.showToast(errorText)
        return {
          data
        }
        // 处理其他响应状态码
        // return Promise.reject(new Error(`Request failed with status code ${statusCode}`));
      }
    })
    .catch((error) => {
      // 处理请求错误
      console.error('Error:', error);
      Taro.showToast({title: '服务器异常，请稍后重试'})
      return Promise.reject(error);
    });
};

export default request;
