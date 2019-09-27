import { path, axios } from '@/libs/common'

/**
 * @description 获取期刊列表
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const getVolumeList = (params) => {
  return axios.request({
    url: path.getVolumeList,
    params,
    method: 'get'
  })
}
