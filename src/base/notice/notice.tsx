import * as React from 'react'
import {NoticePropsType} from "./PropsType";

interface PropsType extends NoticePropsType {
    children: React.ReactNode
    onClose: () => void
}

class Notice extends React.Component<PropsType, any> {
    static defaultProps = {
        duration: 2000,
        prefixCls: 'toast',
        mask: false
    };

    private closeTimer: any;
    private notice: any

    constructor(props: PropsType) {
        super(props);

        this.notice = React.createRef()
    }

    public componentDidMount() {
        this.startCloseTimer()
    }

    public componentWillUnmount() {
        this.clearCloseTimer()
    }

    public render() {
        return (
            <div ref={this.notice} className={`${this.props.prefixCls}-notice`}>
                {this.props.children}
            </div>
        )
    }

    private outAnimate = () => {
        return new Promise((resolve) => {
            this.notice.current.classList.remove('fadeIn');
            this.notice.current.classList.add('fadeOut');
            resolve()
        })
    }

    private close = () => {
        const delay = 300;

        setTimeout(() => {
            this.clearCloseTimer();
            this.props.onClose()
        }, delay)

    }

    private startCloseTimer = () => {
        if (this.props.duration && this.props.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.outAnimate().then(this.close)
            }, this.props.duration - 300)
        }
    }

    private clearCloseTimer = () => {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
}

export default Notice;