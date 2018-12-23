import * as React from 'react';
import Scroll from '../../../base/scroll/scroll'
import Slider from '../../../base/slider/slider'
import {DiscoveryPropsType} from "../PropsType";
import {getBanner} from "../../../api/discovery";
import './recommend.scss'

interface StateType {
    sliderData: object[]
}


class Recommend extends React.Component<DiscoveryPropsType, StateType> {
    constructor(props: DiscoveryPropsType, state: StateType) {
        super(props)

        this.state = {
            sliderData: []
        }
    }

    public componentWillMount() {
        this.getRecBanner()
    }

    public render() {
        return (
            <div className={['recommend-container', this.props.disNav === 'recommend' ? '' : 'hidden'].join(' ')}>
                <Scroll content={'recommend-content'}>
                    <div>
                        <div className='slider-container'>
                            {
                                this.state.sliderData.length &&
                                <div className='slider-content'>
                                    <Slider data={this.state.sliderData}/>
                                </div>
                            }
                        </div>
                    </div>
                </Scroll>
            </div>
        )
    }

    private getRecBanner = () => {
        getBanner().then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    sliderData: res.data.banners.slice(0, 4)
                })
            }
        })
    }
}

export default Recommend