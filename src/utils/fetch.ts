import axios from 'axios';
import configUrl from './config';
import Toast from '../base/toast/toast'

let count = 0;

const serve = axios.create({
    baseURL: configUrl.url.baseUrl    // api的base_url
});

// request拦截器
serve.interceptors.request.use((config) => {
    count++;
    Toast.loading('加载中');
    return config
}, (error) => {
    return Promise.reject(error)
});

// response拦截器
serve.interceptors.response.use(
    (response) => {
        count--;
        if (!count) {
            Toast.hide()
        }
        return response
    },
    (error) => {
        console.log(`error: ${error}`);
        return Promise.reject({message: '网络错误'})
    }
);

export default serve