import axios from 'axios';
import configUrl from './config';
// import Toast from '../base/toast/toast'

const serve = axios.create({
    baseURL: configUrl.url.baseUrl,    // api的base_url
    timeout: 5000    // 请求超时时间
});

// request拦截器
serve.interceptors.request.use((config) => {
    // Toast.info('加载中',5000)
    return config
}, (error) => {
    return Promise.reject(error)
});

// response拦截器
serve.interceptors.response.use(
    (response) => {
        // Toast.hide()
        return response
    },
    (error) => {
        console.log(`error: ${error}`);
        return Promise.reject({message: '网络错误', timeout: 5000})
    }
);

export default serve