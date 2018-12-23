import fetch from '../../utils/fetch'

/**
 * 轮播图
 * @returns {AxiosPromise}
 */
export function getBanner() {
    return fetch({
        method: 'get',
        url: 'banner'
    })
}

/**
 * 全部精品歌单
 * @returns {AxiosPromise}
 */
export function getFineSongList() {
    return fetch({
        method: 'get',
        url: 'top/playlist'
    })
}

/**
 * 推荐歌单
 * @returns {AxiosPromise}
 */
export function getRecSongList() {
    return fetch({
        method: 'get',
        url: 'personalized'
    })
}

/**
 * 歌单详情
 * @param {number} id
 * @returns {AxiosPromise}
 */
export function getSongListDetail(id: number) {
    return fetch({
        method: 'get',
        url: `playlist/detail?id=${id}`
    })
}