import * as React from 'react';
import BScroll from 'better-scroll';

class Slider extends React.Component {
    private scroll: object;
    private slider: any

    constructor(props: any){
        super(props)

        this.slider = React.createRef()
    }

    public componentDidMount() {
        this.scroll = new BScroll(this.slider.current, {})
        console.log(this.scroll)
        // console.log(this.slider)
    }

    public render() {
        return (
            <div ref={this.slider} className='slider'>
                <span>轮播图</span>
            </div>
        )
    }
}

export default Slider