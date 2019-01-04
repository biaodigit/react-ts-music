import * as React from "react";
import classNames from 'classnames'
import Notification from '../notice/notification'
import './toast.scss'

let newNotification: any;
const ToastPrefixCls = 'toast';

const getNewNotification = (
    mask?: boolean,
    callback?: (notification: any) => void
) => {
    if (newNotification) {
        newNotification.destroy();
        newNotification = null
    }
    (Notification as any).newInstance(
        {
            prefixCls: ToastPrefixCls,
            className: classNames({
                [`${ToastPrefixCls}-mask`]: mask,
                [`${ToastPrefixCls}-nomask`]: !mask
            })
        },
        (notification: any) => callback && callback(notification)
    )
}

const notice = (
    content: string,
    type: string,
    duration = 2000,
    mask = false,
    onClose?: () => void
) => {
    const iconsTypes: { [key: string]: string } = {
        info: '',
        loading: 'loading'
    };
    const iconType = iconsTypes[type];
    getNewNotification(mask, notification => {
        newNotification = notification;
        notification.notice({
            duration,
            mask,
            content: !!iconType ? (
                    <div/>
                ) : (
                    <div className={`${ToastPrefixCls}-info`} role="alert" aria-live="assertive">
                        <div>{content}</div>
                    </div>
                ),
            onClose() {
                onClose && onClose();
                notification.destroy();
                notification = null;
                newNotification = null
            }
        })
    })
}

export default {
    info: (text: string, duration?: number, mask?: boolean) => {
        return notice(text, 'info', duration, mask)
    },
    loading: (text: string, duration?: number, mask?: boolean) => {
        return notice(text, 'loading', duration, mask)
    },
    hide: () => {
        newNotification && newNotification.destroy()
        newNotification = null
    }
}