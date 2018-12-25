import Notification from '../notice/notification'

let newNotification: any;
// const prefixCls = 'toast';

const getNewNotification = (
    mask?: boolean,
    callback?: (notification: any) => void
) => {
    if (newNotification) {
        newNotification.destroy();
        newNotification = null
    }
    (Notification as any).newInstance(
        // todo
    )
}

const notice = (text: string, number?: number, mask?: boolean) => {
    getNewNotification(mask, notification => {
        //todo
    })
}

export default {
    show: (text: string, duration?: number, mask?: boolean) => {
        return notice(text, duration, mask)
    }
}