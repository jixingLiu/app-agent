export default defineAppConfig({
  pages: [

    'pages/index/index',
    'pages/login/index',
    'pages/employees/index',
    'pages/install/index',
    'pages/install-form/index',
    'pages/install-detail/index',
    'pages/mine/index',
    'pages/roi-calculator/index',
    'pages/roi-calculator-detail/index',
    'pages/apply/index',
    'pages/article/index',
    'pages/article-list/index',

  ],
  requiredBackgroundModes: ['audio', 'location'],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于获取附近的服务，是否允许？"
    }
  },
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f5f6f7',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#6190E8',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home_.png'
      },
      {
        pagePath: 'pages/install/index',
        text: '电站安装',
        iconPath: 'assets/tabbar/work.png',
        selectedIconPath: 'assets/tabbar/work_.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine_.png'
      }
    ]
  },
})
