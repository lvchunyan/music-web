import { axios } from '@/libs/common'

/**
 * @description 获取企业列表
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const getEnterpriseList = (params) => {
  return axios.request({
    url: '/api/enterprise/selectAll',
    params,
    method: 'get'
  })
}
