/**
 * 封装请求方法
 * 控制拦截器
 */
import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import { Message } from 'iview'

axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.baseURL = ajaxUrl;
axios.defaults.responseType = 'json'
// axios.defaults.withCredentials = true;

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
      config.data = qs.stringify(config.data)
    }// config.headers['Content-Type'] ='application/json;charset=UTF-8';
  }
  // if (window.localStorage.getItem('lng-token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
  //   config.headers['lng-token'] = window.localStorage.getItem('lng-token')
  // }
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})

// code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.data && res.data.code === 500) {
    Message.error(res.data.message)
    return false
  }
  if (res.data && res.data.code === 403) {
    Message.error(res.data.message)
    return false
  }
  if (res.data && res.data.code === 0) {
    if (res.data.data) {
      Message.error(res.data.data)
    } else {
      Message.error(res.data.message)
    }
    return false
  }
  if (res.data && res.data.code === 2) {
    Message.error(res.data.message)
  }
  if (res.data && res.data.code === 2001) {
    Message.error(res.data.message)
  }
  if (res.data && res.data.code === 10104) {
    Message.error(res.data.data)
    return false
  }
  if (res.data && res.data.code === 10004) {
    Message.error(res.data.message)
    return false
  }
  if (res.data && res.data.code === 10003) {
    Message.error(res.data.data)
    return false
  }
  if (res.data && res.data.code === 10105) {
    Message.error(res.data.data)
    return false
  }
  if (res.data && res.data.code === 10103) {
    Message.error(res.data.data)
    return false
  }
  if (res.data && res.data.code === 10001) {
    Message.error(res.data.data[0].errorMsg)
    return false
  }
  if (res.data && res.data.code === 99999) {
    Message.error(res.data.message)
    return false
  }
  if (res.data && res.data.code === -1) {
    Message.error(res.data.message)
    return false
  }

  return res
}, (error) => {
  console.log('网络异常')
  if (error && error.response) {
    switch (parseInt(error.response.status)) {
      case 401:
        setTimeout(function () {
          router.replace({
            path: '/login',
            query: { redirectUrl: router.currentRoute.name }
          })
        }, 1000)
        window.localStorage.removeItem('lng-token')
        error.message = error.response.data.message
        break
      case 504:
        // 接口报错上报
        error.message = '网关超时'
        break
      case 502:
        // 接口报错上报
        error.message = '后端接口未开'
        break
      case 403:
        error.message = '当前账号没有操作权限'
        break
    }
  } else {
    error.message = '暂时无法获取数据，请联系管理员'
    // error.message = '网关超时';
    // return false;
  }
  return Promise.reject(error)
})

export default axios
