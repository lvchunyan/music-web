import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers, otherRouter, appRouter } from './routers'
import iView from 'iview'
import { util } from '@/libs/common'

Vue.use(VueRouter)
const RouterConfig = {
  mode: 'history',
  routes: routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = window.localStorage.getItem('token')
  if (token && to.name !== 'login') {
    // 未登录且要跳转的页面不是登录页
    next({
      name: 'login' // 跳转到登录页
    })
  } else {
    if (util.getRouterObjByName([otherRouter, ...appRouter], to.name) && util.getRouterObjByName([otherRouter, ...appRouter], to.name).access) { // 判断用户是否有权限访问当前页
      if (util.getRouterObjByName([otherRouter, ...appRouter], to.name).access === parseInt(localStorage.getItem('access'))) {
        util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next) // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
      } else {
        router.replace({
          name: 'error-401'
        })
        next()
      }
    } else {
      util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next)
    }
  }
})

router.afterEach(to => {
  util.setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
