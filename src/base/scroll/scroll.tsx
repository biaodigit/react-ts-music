import * as React from 'react';
import BScroll from 'better-scroll'
import {ScrollPropsType} from './PropsType'
import './scroll.scss'

interface PropTypes extends ScrollPropsType {
    children: React.ReactNode
    className?: string
    refreshText?: string
    onScroll?: (y:number) => void
}

interface StateType {
    beforePullDown: boolean
    bubbleY: number
    isPullingDown: boolean
    pullDownStyle: string
}

class Scroll extends React.Component<PropTypes, StateType> {
    static defaultProps = {
        beforeScroll: false,
        click: true,
        data: null,
        listenScroll: false,
        probeType: 1,
        pullup: false,
        pullDownRefresh: {
            threshold: 30,
            stop: 40
        },
        refreshDelay: 20,
        refreshText: '刷新成功',
        scrollX: false,
        scrollY: true
    };

    private scroll: any;
    private scrollContainer: any;

    constructor(props: PropTypes, state: StateType) {
        super(props);

        this.scrollContainer = React.createRef()

        this.state = {
            beforePullDown: true,
            bubbleY: 0,
            isPullingDown: false,
            pullDownStyle: ''
        }
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
        const {beforePullDown, isPullingDown} = this.state;
        const {refreshText,pullDownRefresh} = this.props
        return (
            <div ref={this.scrollContainer} className={['scroll-container', this.props.className].join(' ')}>
                <div>
                    {
                      pullDownRefresh && <div className='pull-down-container'>
                        {
                            beforePullDown
                                ? <span>下拉刷新</span>
                                : isPullingDown ? <span>正在刷新</span> : <span>{refreshText}</span>
                        }

                    </div>
                    }
                    {this.props.children}
                </div>
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

        this.scroll.on('scroll', (pos: any) => {
            if(this.props.onScroll){
                this.props.onScroll(pos.y)
            }
        })
    }

    private initPullUpLoad() {
        this.scroll.on('scrollEnd', () => {
            // todo
        })
    }

    private initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
            this.setState({
                beforePullDown: false,
                isPullingDown: true
            });

            if (this.props.pullDown) {
                this.props.pullDown()
            }
        })
    }

    private _forceUpdate(dirty = false) {
        if (this.props.pullDownRefresh && this.state.isPullingDown) {
            this.reboundPullDown().then(() => {
                this.setState({
                    isPullingDown: false
                }, () => {
                    this.afterPullDown()
                })
            })
        } else {
            this.refresh()
        }
    }

    private reboundPullDown() {
        const stop = 600;

        return new Promise((resolve) => {
            setTimeout(() => {
                this.scroll.finishPullDown()
                resolve()
            }, stop)
        })
    }

    private afterPullDown() {
        const bounceTime = 500

        setTimeout(() => {
            this.setState({
                beforePullDown: true,
            });
            this.refresh()
        }, bounceTime)
    }

    private refresh() {
        this.scroll && this.scroll.refresh()
    }
}

export default Scroll