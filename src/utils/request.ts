import Taro from '@tarojs/taro';
// import { getToken } from '@/utils/auth';

const errorCode = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  'default': '系统未知错误，请反馈给管理员'
}

const envConfig = {
  development: {
    API_BASE_URL: 'http://162.14.70.114:8080', // 开发环境的 API 地址
    //本机测试
    //API_BASE_URL: 'http://127.0.0.1:8080'
  },
  production: {
    API_BASE_URL: 'http://162.14.70.114:8080/prod-api/', // 生产环境的 API 地址
  },
};

// 创建Taro请求实例
const request = (options): Promise<any> => {
  const token = Taro.getStorageSync('token');
  // if (!token) {
  //   Taro.navigateTo({
  //     url: '/pages/login/index'
  //   })
  // }

  // 设置请求头
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  if (token) {
    headers['Authorization'] = 'Bearer ' + encodeURIComponent(token);
  }

  const { url, data, method = 'GET' } = options;
  let env = process.env.NODE_ENV || 'development';
  // console.log(   envConfig[env].API_BASE_URL + url, 'process.env.NODE_ENV')
  return Taro.request({
    url: envConfig[env].API_BASE_URL + url,
    data,
    method,
    header: headers,
  })
    .then((response) => {
      const { statusCode, data } = response;
      // console.log(response, 'response')
      if (statusCode === 200) {
        return data;
      } else {
        const errorText = errorCode[statusCode] || errorCode['default'];
        Taro.showToast(errorText)
        return {}
        // 处理其他响应状态码
        // return Promise.reject(new Error(`Request failed with status code ${statusCode}`));
      }
    })
    .catch((error) => {
      // 处理请求错误
      console.error('Error:', error);
      return Promise.reject(error);
    });
};

export default request;
