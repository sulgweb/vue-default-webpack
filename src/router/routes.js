/*
 * @description: 路由表
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-09 14:41:19
 * @Copyright: 1.0.0
 */
const routes = [
    {
        path:"/",
        redirect:"/index",
    },
    //index
    {
        path:"/index",
        component:()=>import("@/pages/index/index.vue"),
    },
    //login
    {
        path:"/login",
        component:()=>import("@/pages/login/index.vue")
    },
    //404
    {
        path:window.location.pathname,
        component:()=>import("@/pages/404.vue")
    }
]

export default routes