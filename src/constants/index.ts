export enum EnumEmployees {
  subAdmin = '子管理员',
  normalEmployee = '普通员工'
}

export const EnumEmployeesMap = {
  subAdmin: '子管理员',
  normalEmployee: '普通员工'
}

const envConfig = {
  development: {
    // API_BASE_URL: 'https://www.ynxrgf.top/test-api', // 开发环境的 API 地址
    // API_BASE_URL: 'http://192.168.0.104:8080'
    API_BASE_URL: 'https://www.ynxrgf.top/prod-api',
    //本机测试
  },
  production: {
    API_BASE_URL: 'https://www.ynxrgf.top/prod-api', // 生产环境的 API 地址
  },
  test: {
    API_BASE_URL: 'https://www.ynxrgf.top/test-api',
  }
};

const env = process.env.NODE_ENV || 'development';

export const API_BASE_URL = envConfig[env].API_BASE_URL;