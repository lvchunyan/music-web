import {
  login,
  logout,
  getMessage,
  getContentByMsgId,
  hasRead,
  removeReaded,
  restoreTrash
} from '@/api/user'
import path from '@/libs/path'

export default {
  state: {
    username: '',
    userId: '',
    avatorImgPath: '',
    token: '',
    access: '',
    hasGetInfo: false,
    unreadCount: 0,
    messageType: 0,
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {}
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.username = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    },
    setMessageCount (state, count) {
      state.unreadCount = count
    },
    setMessageUnreadList (state, list) {
      state.messageUnreadList = list
    },
    setMessageReadedList (state, list) {
      state.messageReadedList = list
    },
    setMessageTrashList (state, list) {
      state.messageTrashList = list
    },
    updateMessageContentStore (state, { msgId, content }) {
      state.messageContentStore[msgId] = content
    },
    moveMsg (state, { from, to, msgId }) {
      const index = state[from].findIndex(_ => _.msgId === msgId)
      const msgItem = state[from].splice(index, 1)[0]
      msgItem.loading = false
      state[to].unshift(msgItem)
    }
  },
  getters: {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { username, password }) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          if (res.data) {
            commit('setToken', res.data.data.token)
            localStorage.setItem('lng-token', res.data.data.token)
            localStorage.setItem('userId', res.data.data.userId)
            localStorage.setItem('avatorImgPath', res.data.data.avatar)
            localStorage.setItem('userName', res.data.data.realName)
            localStorage.setItem('access', '1')
          }
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          localStorage.removeItem('lng-token')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
    getUnreadMessageCount ({ state, commit }) {
      if (!localStorage.getItem('lng-token')) {
        return false
      }
      let lngToken = localStorage.getItem('lng-token')
      let userId = localStorage.getItem('userId')
      this.eventSource = new EventSource(path.connect + '?userId=' + userId + '&lng-token=' + lngToken)
      this.eventSource.addEventListener('open', function (e) {
        console.log('connected')
      })
      this.eventSource.addEventListener('message', function (e) {
        let data = JSON.parse(e.data)
        if (data.type === 'notReadMessageCount') {
          commit('setMessageCount', parseInt(data.data.totalCount))
        }
      }, false)
      this.eventSource.addEventListener('error', function (e) {
        if (e.readyState === EventSource.CLOSED) {
          console.log('CLOSED')
        }
      }, false)
    },
    // 获取消息列表，其中包含未读、已读、回收站三个列表
    getMessageList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        let unreadList = []
        let readedList = []
        let trashList = []
        let params = {
          pageSize: 9999
        }
        getMessage(params).then(res => {
          if (res.data.data.records.length) {
            res.data.data.records.forEach(function (e) {
              if (e.state === '1') {
                unreadList.push(e.messageBasic)
              } else {
                readedList.push(e.messageBasic)
              }
            })
            commit('setMessageUnreadList', unreadList)
            commit('setMessageReadedList', readedList)
            commit('setMessageTrashList', trashList)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 根据当前点击的消息的id获取内容
    getContentByMsgId ({ state, commit }, { msgId }) {
      return new Promise((resolve, reject) => {
        let contentItem = state.messageContentStore[msgId]
        if (contentItem) {
          resolve(contentItem)
        } else {
          getContentByMsgId(msgId).then(res => {
            const content = res.data
            commit('updateMessageContentStore', { msgId, content })
            resolve(content)
          })
        }
      })
    },
    // 把一个未读消息标记为已读
    hasRead ({ state, commit }, { msgId }) {
      return new Promise((resolve, reject) => {
        hasRead(msgId).then(() => {
          commit('moveMsg', {
            from: 'messageUnreadList',
            to: 'messageReadedList',
            msgId
          })
          commit('setMessageCount', state.unreadCount - 1)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 删除一个已读消息到回收站
    removeReaded ({ commit }, { msgId }) {
      return new Promise((resolve, reject) => {
        removeReaded(msgId).then(() => {
          commit('moveMsg', {
            from: 'messageReadedList',
            to: 'messageTrashList',
            msgId
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 还原一个已删除消息到已读消息
    restoreTrash ({ commit }, { msgId }) {
      return new Promise((resolve, reject) => {
        restoreTrash(msgId).then(() => {
          commit('moveMsg', {
            from: 'messageTrashList',
            to: 'messageReadedList',
            msgId
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
