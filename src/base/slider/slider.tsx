import * as React from 'react';
import BScroll from 'better-scroll';
import {SliderPropsType} from "./PropsType";
import {addClass} from "../../common/ts/dom";
import './slider.scss'


interface PropsType extends SliderPropsType {
    data: any
}

interface StateType {
    currentPageIndex: number
}

class Slider extends React.Component<PropsType, StateType> {
    static defaultProps = {
        autoPlay: true,
        interval: 4000,
        loop: true
    };

    private readonly sliderContainer: any;
    private readonly sliderGroup: any;
    private slider: any;
    private sliderChildren: any[];
    private timer: any;
    // private resizeTimer: any;

    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            currentPageIndex: 0
        };

        this.sliderContainer = React.createRef();
        this.sliderGroup = React.createRef();
    }

    public componentDidMount() {
        this.setSliderWidth();
        this.initSlider();

        if (this.props.autoPlay) {
            this.play()
        }

        // window.addEventListener('resize', () => {
        //     if (!this.slider || !this.slider.enable) {
        //         return
        //     }
        //
        //     clearTimeout(this.resizeTimer);
        //     this.resizeTimer = setTimeout(() => {
        //         if (!this.slider.isInTransition && this.props.autoPlay) {
        //             this.play()
        //         }
        //         this.onScrollEnd();
        //         this.refresh();
        //     }, 60)
        // })
    }

    public shouldComponentUpdate(newProps: PropsType): boolean {
        if (this.slider.getCurrentPage().pageX !== this.state.currentPageIndex) {
            this.slider.enable();
            let index = this.slider.getCurrentPage().pageX;
            if (index > this.props.data.length - 1) {
                index = index % this.props.data.length
            }
            this.slider.goToPage(index, 0, 0);
            this.setState({
                currentPageIndex: index
            });
            if (this.props.autoPlay) {
                this.play()
            }
        }
        return true
    }


    public render() {
        const {data} = this.props;
        return (
            <div ref={this.sliderContainer} className='slider'>
                <div ref={this.sliderGroup} className='slider-group'>
                    {
                        data.map((item: any, index: number) => (
                            <div key={index}>
                                <a>
                                    <img src={item.imageUrl}/>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='dots-group'>
                    {
                        data.map((dot: any, index: number) => (
                            <span className={['dot', this.state.currentPageIndex === index ? 'active' : ''].join(' ')}
                                  key={index}/>
                        ))
                    }
                </div>
            </div>
        )
    }

    private setSliderWidth = (isResize?: boolean) => {
        this.sliderChildren = this.sliderGroup.current.children;

        let width = 0;
        const sliderWidth = this.sliderContainer.current.clientWidth;

        for (const child of this.sliderChildren) {
            addClass(child, 'slider-item');

            width += sliderWidth;
            child.style.width = `${sliderWidth}px`
        }

        if (this.props.loop && !isResize) {
            width += 2 * sliderWidth
        }

        this.sliderGroup.current.style.width = `${width}px`
    };

    private initSlider = () => {
        this.slider = new BScroll(this.sliderContainer.current, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: {
                loop: this.props.loop,
                threshold: 0.3,
                speed: 400
            },
            stopPropagation: true
        });

        this.slider.on('scrollEnd', this.onScrollEnd)
    };

    private onScrollEnd = () => {
        this.setState({
            currentPageIndex: this.slider.getCurrentPage().pageX
        });
        if (this.props.autoPlay) {
            this.play()
        }
    };

    private play = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.slider.next()
        }, this.props.interval)
    };

    // private refresh = () => {
    //     if (this.slider) {
    //         this.setSliderWidth(true);
    //         this.play();
    //         this.slider.enable()
    //     }
    // }
}

export default Slider