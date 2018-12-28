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
        refreshDelay: 20,
        scrollX: false,
        scrollY: true
    };

    private scroll: any;
    private scrollContainer: any;

    constructor(props: PropTypes) {
        super(props);

        this.scrollContainer = React.createRef()
    }

    public componentDidMount() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    }

    public shouldComponentUpdate(newProps: any, newState: any): boolean {
        if (newProps) {
            setTimeout(() => {
                this.refresh()
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
            probeType: this.props.probeType
        });
    }

    private refresh() {
        this.scroll && this.scroll.refresh()
    }
}

export default Scroll