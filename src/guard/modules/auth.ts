import Taro from '@tarojs/taro'
import { Middleware } from 'tarojs-router-next'
const auth: Middleware<{ isLogin: boolean }> = async (ctx, next) => {
	console.log('第一个中间件执行：', ctx)
	if (ctx.route.ext?.isLogin) {
		const token = Taro.getStorageSync('token')
		if (!token) {
			const { confirm } = await Taro.showModal({
				title: '提示',
				content: '请先登录',
			})

			if (confirm) {
				console.log('去登录')
			}

			// 直接返回，不执行 next 即可打断中间件向下执行
			return
		}
	}

	await next()
}

export default auth