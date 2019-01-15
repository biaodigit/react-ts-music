import fetch from '../utils/fetch'

export function getLyric(id: number) {
    return fetch({
        method: 'get',
        url: '/lyric',
        params: {
            id: id
        }
    })
}