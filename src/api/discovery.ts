import fetch from '../utils/fetch'

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
 * 歌单
 * @returns {AxiosPromise}
 */
export function getSongList() {
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
 * 精品歌单
 * @returns {AxiosPromise}
 */
export function getFineSongList() {
    return fetch({
        method: 'get',
        url: 'top/playlist/highquality'
    })
}

export function getRecDjprogram() {
    return fetch({
        method: 'get',
        url: ''
    })
}

/**
 * 最新音乐
 * @returns {AxiosPromise}
 */
export function getNewSongs() {
    return fetch({
        method: 'get',
        url: 'personalized/newsong'
    })
}