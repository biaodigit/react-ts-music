import * as React from 'react';
import BScroll from 'better-scroll'
import {ScrollPropsType} from './PropsType'

interface PropTypes extends ScrollPropsType {
    children: React.ReactNode
    className?: string
}

class Scroll extends React.Component<PropTypes, any> {
    static defaultProps = {
        beforeScroll: false,
        click: true,
        data: null,
        listenScroll: false,
        probeType: 1,
        pullup: false,
        pullDownRefresh: {
            threshold: 30,
            stop: 20
        },
        refreshDelay: 20,
        scrollX: false,
        scrollY: true
    };

    private scroll: any;
    private scrollContainer: any;
    private isPullingDown: boolean

    constructor(props: PropTypes) {
        super(props);

        this.scrollContainer = React.createRef()
    }

    public componentWillMount() {
        this.isPullingDown = false
    }

    public componentDidMount() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    }

    public shouldComponentUpdate(newProps: any, newState: any): boolean {
        if (newProps) {
            setTimeout(() => {
                this._forceUpdate()
            }, this.props.refreshDelay)
        }
        return true
    }

    public render() {
        return (
            <div ref={this.scrollContainer} className={['scroll-container', this.props.className].join(' ')}>
                {this.props.children}
            </div>
        )
    }

    private initScroll() {
        this.scroll = new BScroll(this.scrollContainer.current, {
            click: this.props.click,
            probeType: this.props.probeType,
            pullDownRefresh: this.props.pullDownRefresh
        });

        if (this.props.pullup) {
            this.initPullUpLoad()
        }

        if (this.props.pullDownRefresh) {
            this.initPullDownRefresh()
        }
    }

    private initPullUpLoad() {
        this.scroll.on('scrollEnd', () => {
            // todo
        })
    }

    private initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
            this.isPullingDown = true
            if (this.props.pullDown) {
                this.props.pullDown()
            }
        })
    }

    private _forceUpdate(dirty = false) {
        if (this.props.pullDownRefresh && this.isPullingDown) {
            this.isPullingDown = false;
            this.reboundPullDown()
        } else {
            this.refresh()
        }
    }

    private reboundPullDown() {
        const stop = 600;
        setTimeout(() => {
            this.scroll.finishPullDown()
        }, stop)
    }

    private refresh() {
        this.scroll && this.scroll.refresh()
    }
}

export default Scroll