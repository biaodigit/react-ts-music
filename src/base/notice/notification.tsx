import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import Notice from './notice'

interface PropsType {
    prefixCls?: string
    className?: string
}

interface StateType {
    notices: any
    hasMask: boolean
}

let noticeNumber = 0;

const getUuid = () => {
    return `notification${new Date().getTime()}-${noticeNumber++}`
};

class Notification extends React.Component<PropsType, StateType> {
    static defaultProps = {
        prefixCls: 'notification',

    };

    static newInstance = (properties: any, callback: (notification:any) => void) => {
        const {...props} = properties || {};

        let div: any;
        if (!div) {
            div = document.createElement('div');
            document.body.appendChild(div)
        }
        let called = false;

        function ref(notification: any) {
            if (called) {
                return;
            }

            called = true;
            callback({
                notice: (notice: any) => {
                    notification.add(notice)
                },
                removeNotice: (key: any) => {
                    notification.remove(key)
                },
                destroy: () => {
                    ReactDOM.unmountComponentAtNode(div);
                    document.body.removeChild(div);
                },
                component: notification
            })
        }

        ReactDOM.render(<Notification {...props} ref={ref}/>, div)
    };

    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            hasMask: true,
            notices: []
        }
    }

    public add = (notice: any) => {
        const {notices} = this.state;
        const key = (notice.key = notice.key ? notice.key : getUuid());
        const temp = notices.filter((notice: any) => notice.key === key).length;

        if (!temp) {
            this.setState((prevState) => {
                return {
                    notices: prevState.notices.concat(notice)
                }
            })
        }
    }

    public remove = (key: any) => {
        this.setState((prevState) => {
            return {
                notices: prevState.notices.filter((notice: any) => notice.key !== key)
            }
        })
    }

    public render() {
        const {notices} = this.state;
        const noticesNode = notices.map((notice: any) => {
            const closeFun = () => {
                this.remove(notice.key);

                if (notice.onClose) {
                    notice.onClose()
                }
            }

            return (
                <Notice key={notice.key} {...notice} onClose={closeFun}>
                    {notice.content}
                </Notice>
            )
        })
        return <div className={classNames(this.props.prefixCls, this.props.className)}>{noticesNode}</div>
    }
}

export default Notification