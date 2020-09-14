/*
 * @description: vue-cli相关配置
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:26:55
 * @LastEditTime: 2020-09-14 16:37:27
 * @Copyright: 1.0.0
 */

const isProduction = process.env.NODE_ENV === 'production'

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, 'src/style/base.less')]
    })
}


let cdnObj = {
  css: [
    // bootcdn公共资源
    'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/2.0.0-beta.3/antd.min.css',
  ],
  js: [
    // bootcdn公共资源
    'https://cdn.bootcdn.net/ajax/libs/vue/3.0.0-rc.9/vue.global.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.20.0/axios.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.0-beta.7/vue-router.global.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/4.0.0-beta.4/vuex.global.min.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0-rc.1/echarts-en.common.min.js',
    'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/2.0.0-beta.3/antd.min.js',
  ]
}
/* let cdnJsList = "",
    cdnCssList = ""
if (isProduction) {
    for (let item of cdnObj.css) {
        cdnCssList += item
    }
    for (let item of cdnObj.js) {
        cdnJsList += item
    }
} */

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#18a9d5',
            'link-color': '#18a9d5',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: (config) => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
    // 配置cdn
    if (isProduction) {
      config.set('externals', {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'echarts': 'echarts',
        'Antd': 'antd'
      })
      // 注入cdn
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdnObj;
          return args;
        })
    }
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}