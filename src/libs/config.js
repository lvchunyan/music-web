/**
 * 公用分类合集
 */
const config = {}

/**
 * @description 配置显示在浏览器标签的title
 */
config.title = 'vue-web'

/**
 * @description 是否使用国际化，默认为false
 *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
 *              用来在菜单中显示文字
 */
config.useI18n = false

/**
 * @description 默认打开的首页的路由name值，默认为home
 */
config.homeName = 'home'

/**
 * @description 需要加载的插件
 */
config.plugin = {
  'error-store': {
    showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
    developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
  }
}

config.getVehicleType = function (type) {
  switch (parseInt(type)) {
    case 0:
      return '槽车'
    case 1:
      return '公交车'
    case 2:
      return '重卡'
    case 3:
      return '出租车'
    default:
      break
  }
}

export default config
