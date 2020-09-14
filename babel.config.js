/*
 * @description: babel相关配置
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:14:28
 * @LastEditTime: 2020-09-09 16:43:29
 * @Copyright: 1.0.0
 */

let plugins =  []
if (process.env.NODE_ENV === 'production') {
  //加入移除控制台输出的插件
  plugins.push('transform-remove-console');
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:plugins
}
