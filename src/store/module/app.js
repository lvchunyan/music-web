import { util, config } from '@/libs/common'
import { saveErrorLogger } from '@/api/data'
import router from '@/router'
import { appRouter } from '@/router/routers'

const closePage = (state, route) => {
  const nextRoute = util.getNextRoute(state.tagNavList, route)
  state.tagNavList = state.tagNavList.filter(item => {
    return !util.routeEqual(item, route)
  })
  router.push(nextRoute)
}

export default {
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    local: util.localRead('local'),
    errorList: [],
    hasReadErrorPage: false
  },
  getters: {
    menuList: (state, getters, rootState) => util.getMenuByRouter(appRouter, rootState.user.access),
    errorCount: state => state.errorList.length
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = util.getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute (state, routes) {
      state.homeRoute = util.getHomeRoute(routes, config.homeName)
    },
    setTagNavList (state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else tagList = util.getTagNavListFromLocalstorage() || []
      if (tagList[0] && tagList[0].name !== config.homeName) tagList.shift()
      let homeTagIndex = tagList.findIndex(item => item.name === config.homeName)
      if (homeTagIndex > 0) {
        let homeTag = tagList.splice(homeTagIndex, 1)[0]
        tagList.unshift(homeTag)
      }
      state.tagNavList = tagList
      util.setTagNavListInLocalstorage([...tagList])
    },
    closeTag (state, route) {
      let tag = state.tagNavList.filter(item => util.routeEqual(item, route))
      route = tag[0] ? tag[0] : null
      if (!route) return
      closePage(state, route)
    },
    addTag (state, { route, type = 'unshift' }) {
      let router = util.getRouteTitleHandled(route)
      if (!util.routeHasExist(state.tagNavList, router)) {
        if (type === 'push') state.tagNavList.push(router)
        else {
          if (router.name === config.homeName) state.tagNavList.unshift(router)
          else state.tagNavList.splice(1, 0, router)
        }
        util.setTagNavListInLocalstorage([...state.tagNavList])
      }
    },
    setLocal (state, lang) {
      util.localSave('local', lang)
      state.local = lang
    },
    addError (state, error) {
      state.errorList.push(error)
    },
    setHasReadErrorLoggerStatus (state, status = true) {
      state.hasReadErrorPage = status
    }
  },
  actions: {
    addErrorLog ({ commit, rootState }, info) {
      if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
      const { user: { token, userId, username } } = rootState
      let data = {
        ...info,
        time: Date.parse(new Date()),
        token,
        userId,
        username
      }
      saveErrorLogger(info).then(() => {
        commit('addError', data)
      })
    }
  }
}
