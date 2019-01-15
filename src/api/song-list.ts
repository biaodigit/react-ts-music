import fetch from '../utils/fetch'

/**
 * 歌单详情
 * @param {number} id
 * @returns {AxiosPromise}
 */
export function getSongListDetail(id: number) {
    return fetch({
        method: 'get',
        url: `playlist/detail`,
        params: {
            id: id
        }
    })
}