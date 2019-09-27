import { path, axios } from '@/libs/common'

/**
 * @description 获取车辆列表
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const getCars = (params) => {
  return axios.request({
    url: path.getCarManagementList,
    params,
    method: 'get'
  })
}

/**
 * @description 新增车辆
 * @param data
 * @returns {*|void|AxiosPromise<any>}
 */
export const addCar = (data) => {
  return axios.request({
    url: '/api/vehicle/saveVehicle',
    data,
    method: 'post'
  })
}

/**
 * @description 删除车辆
 * @param id
 * @returns {*|void|AxiosPromise<any>}
 */
export const delCar = (id) => {
  return axios.request({
    url: '/api/vehicle/deleteVehicle',
    params: {
      id: id
    },
    method: 'delete'
  })
}

/**
 * @description 修改车辆
 * @param data
 * @returns {*|void|AxiosPromise<any>}
 */
export const editCar = (data) => {
  return axios.request({
    url: '/api/vehicle/updateVehicle',
    data,
    method: 'post'
  })
}
