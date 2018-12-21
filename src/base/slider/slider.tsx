import * as React from 'react';
// import BScroll from 'better-scroll';
import {SliderPropsType} from "./PropsType";
import {addClass} from "../../common/ts/dom";
import './slider.scss'


interface PropsType extends SliderPropsType {
    data: any
}

class Slider extends React.Component<PropsType, any> {
    static defaultProps = {
        loop: true,
        autoPlay: true,
        interval: 4000
    };

    private sliderContainer: any;
    private sliderGroup: any;
    private sliderChildren: any

    constructor(props: PropsType) {
        super(props)

        this.sliderContainer = React.createRef();
        this.sliderGroup = React.createRef();
    }

    public componentDidMount() {
        setTimeout(() => {
            this.setSliderWidth()
            // this.initSlider()
        }, 10)
    }

    public render() {
        const {data} = this.props;
        return (
            <div ref={this.sliderContainer} className='slider'>
                <div ref={this.sliderGroup} className='slider-group'>
                    {
                        data && data.length > 0 && data.map((item: any, index: number) => (
                            <div key={index}>
                                <a>
                                    <img src={item.imageUrl}/>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    private setSliderWidth(isResize?: boolean) {
        this.sliderChildren = this.sliderGroup.current.children;

        let width = 0;
        const sliderWidth = this.sliderContainer.current.clientWidth;

        for (let child of this.sliderChildren) {
            addClass(child, 'slider-item');

            width += sliderWidth;
            child.style.width = `${sliderWidth}px`
        }

        if (this.props.loop && !isResize) {
            width += 2 * sliderWidth
        }

        this.sliderContainer.current.style.width = `${width}px`
    }

    // private initSlider() {
    //     this.slider = new BScroll(this.sliderContainer.current, {})
    // }
}

export default Slider