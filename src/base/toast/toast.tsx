import classNames from 'classnames'
import Notification from '../notice/notification'
import * as React from "react";
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
                [`${ToastPrefixCls}-nomask}`]: !mask
            })
        },
        (notification: any) => callback && callback(notification)
    )
}

const notice = (
    content: string,
    duration = 2000,
    mask = true,
    onClose?: () => void
) => {
    getNewNotification(mask, notification => {
        newNotification = notification;
        notification.notice({
            duration,
            mask,
            content: (
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
    show: (text: string, duration?: number, mask?: boolean) => {
        return notice(text, duration, mask)
    }
}