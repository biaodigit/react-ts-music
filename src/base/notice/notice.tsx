import * as React from 'react'
import {NoticePropsType} from "./PropsType";

interface PropsType extends NoticePropsType {
    children: any
    onClose: () => void
}

class Notice extends React.Component<PropsType, any> {
    static defaultProps = {
        duration: 2000,
        prefixCls: 'toast'
    };

    private closeTimer: any;

    constructor(props: PropsType) {
        super(props);
    }

    public componentDidMount() {
        this.startCloseTimer()
    }

    public componentWillUnmount() {
        this.clearCloseTimer()
    }

    public render() {
        return (
            <div className={`${this.props.prefixCls}-notice`}>
                {this.props.children}
            </div>
        )
    }

    private close = () => {
        this.clearCloseTimer();
        this.props.onClose()

    }

    private startCloseTimer = () => {
        if (this.props.duration && this.props.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close()
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