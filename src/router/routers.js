import musicTop from '@/view/music-page/music-top.vue'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
    hideInMenu: true
  },
  component: () => import('@/view/login/login.vue')
}

export const page404 = {
  path: '*',
  name: 'error_404',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/404.vue')
}

export const page401 = {
  path: '/401',
  name: 'error_401',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/401.vue')
}

export const page500 = {
  path: '/500',
  name: 'error_500',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/500.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter'
  // component: Main
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/home',
    name: 'home',
    title: '首页',
    meta: {
      icon: 'ios-book',
      title: '首页'
    },
    access: 1,
    component: musicTop,
    children: [
      {
        path: '/music-home', name: 'music-home', meta: { title: '首页', hideInMenu: false }, component: () => import('@/view/music-page/music-home.vue')
      }
    ]
  },
  {
    path: '/sheet',
    name: 'sheet',
    meta: {
      icon: 'ios-book',
      title: '歌单'
    },
    access: 1,
    component: musicTop,
    children: [
      {
        path: '/music-sheet', name: 'music-sheet', meta: { title: '歌单', hideInMenu: false }, component: () => import('@/view/music-page/music-sheet.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      icon: 'ios-book',
      title: '我的'
    },
    access: 1,
    component: musicTop,
    children: [
      {
        path: '/my-music', name: 'my-music', meta: { title: '我的', hideInMenu: false }, component: () => import('@/view/music-page/my-music.vue')
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  ...appRouter,
  page500,
  page401,
  page404
]
