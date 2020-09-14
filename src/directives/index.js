/**
 * @description: 封装自定义指令
 * @Date: 2020-09-07 11:41:36
 * @author: XianPengFei
 * @param {type} 
 * @return {type} 
 */

let directiveObj = {}

let files = require.context('./modules', true, /\.js$/)

files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    directiveObj[newKey] = require(`./modules/${newKey}`).default;
})
export default directiveObj;
