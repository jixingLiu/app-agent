import { registerMiddlewares } from 'tarojs-router-next'
import auth from './modules/auth'

// 注册路由中间件
registerMiddlewares([auth])