/*
 * @description: 自动化引入vuex
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-14 15:53:37
 * @Copyright: 1.0.0
 */

import { createStore } from 'vuex'
let storeObj = {}

let files = require.context('./modules', true, /\.js$/)

files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    storeObj[newKey] = require(`./modules/${newKey}`).default;
})

export default createStore({
    modules:storeObj
})