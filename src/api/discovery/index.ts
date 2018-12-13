import fetch from '../../utils/fetch'

/**
 * 获取轮播图
 * @returns {AxiosPromise}
 */
export function getBanner() {
    return fetch({
        method: 'get',
        url: 'banner'
    })
}