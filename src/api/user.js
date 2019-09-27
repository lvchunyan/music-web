import { path, axios } from '@/libs/common'

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: path.userLogin,
    data,
    method: 'post',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: path.getUserSubject,
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: path.logout,
    method: 'post'
  })
}

export const getMessage = (params) => {
  return axios.request({
    url: path.getMyLngMessageList,
    params,
    method: 'get'
  })
}

export const getContentByMsgId = msgId => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msgId
    }
  })
}

export const hasRead = msgId => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const removeReaded = msgId => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const restoreTrash = msgId => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msgId
    }
  })
}
