import fetch from '../utils/fetch'

/**
 * 登录
 * @param phone
 * @param pwd
 */
export function getLoginMes(phone: number, pwd: string) {
    return fetch({
        method: 'get',
        url: `/login/cellphone`,
        params: {
            phone: phone,
            password: pwd
        },
        withCredentials: true
    })
}