import * as React from 'react';
import {prefixStyle} from "../../common/ts/dom";
import './progress-bar.scss'

interface PropsType {
    percent: number
}

const progressBtnWidth = 16;
const transform = prefixStyle('transform')

class ProgressBar extends React.Component<PropsType, any> {
    private readonly progressBar: any;
    private readonly progress: any;
    private readonly progressBtn: any;
    private touch: any;

    constructor(props: PropsType) {
        super(props);

        this.progressBar = React.createRef();
        this.progress = React.createRef();
        this.progressBtn = React.createRef()
    }

    public componentWillMount() {
        this.touch = {}
    }

    public render() {
        return (
            <div className='progress-bar'>
                <div ref={this.progressBar} className='bar-inner'>
                    <div ref={this.progress} className='progress'/>
                    <div onTouchStart={this.touchStart}
                         onTouchMove={this.touchMove}
                         onTouchEnd={this.touchEnd}
                         ref={this.progressBtn} className='progress-btn-wrapper'>
                        <div className='progress-btn'/>
                    </div>
                </div>
            </div>
        )
    }

    private touchStart = (e: any) => {
        this.touch.initiated = true;
        this.touch.x1 = e.touches[0].pageX;
        this.touch.progressWidth = this.progress.current.clientWidth
    };

    private touchMove = (e: any) => {
        let moveWidth = e.touches[0].pageX - this.touch.x1;
        let progressBarWidth = this.progressBar.current.clientWidth - progressBtnWidth;
        let progressWidth = this.touch.progressWidth + moveWidth;
        let offsetWidth = Math.max(0, Math.min(progressWidth, progressBarWidth));
        this.offset(offsetWidth)
    };

    private touchEnd = () => {

    };

    // private getPercent = () => {
    //
    // }

    private offset = (width: number) => {
        this.progress.current.style.width = `${width}px`;
        this.progressBtn.current.style[transform] = `translate3d(${width}px,0,0)`
    }
}

export default ProgressBar;