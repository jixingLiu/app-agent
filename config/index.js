import { UnifiedWebpackPluginV5 } from "weapp-tailwindcss/webpack";
const path = require('path')

const isH5 = process.env.TARO_ENV === "h5";
const isApp = process.env.TARO_ENV === "rn";
const WeappTailwindcssDisabled = isH5 || isApp;

const config = {
  projectName: 'taro-react-tailwind-vscode-template',
  date: '2023-5-6',
  plugins: ['@tarojs/plugin-html'],
  // designWidth: 750,
  designWidth (input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
		'@': path.resolve(__dirname, '..', 'src/'),
	},
  plugins: [
    '@tarojs/plugin-html', 
    [
      'tarojs-router-next-plugin',
      {
        ignore: ['api']
      }
    ]
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
      exclude: ['tarojs-router-next'],
      // exclude: ['@nutui/nutui-react-taro', '@nutui/icons-react-taro']
    }
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [
              {
                appType: 'taro',
                disabled: WeappTailwindcssDisabled
              }
            ]
          }
        }
      });
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'browser',
      basename: '/agent-app/', // 在这里设置你的路由前缀
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui']
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
