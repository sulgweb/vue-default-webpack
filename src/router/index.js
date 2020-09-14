/*
 * @description: 初始化路由
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-14 15:53:45
 * @Copyright: 1.0.0
 */
//import VueRouter from 'vue-router'
import { createRouter,createWebHistory } from "vue-router";
import routes from './routes'

/* const router = new VueRouter({
    mode: "hash",
    routes
}) */
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,from,next)=>{
    //console.log("to,from,next", to,from,next)
    next()  
})

export default router
