/*
 * @description: api接口的统一出口
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-05-06 09:13:08
 * @LastEditTime: 2020-09-14 15:56:20
 * @Copyright: 1.0.0
 */

const commonApiObj = {}

let files = require.context('./modules', true, /\.js$/)
files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    commonApiObj[newKey+"Api"] = require(`./modules/${newKey}`).default;
})

export default commonApiObj
