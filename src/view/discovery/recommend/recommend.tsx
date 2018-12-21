import * as React from 'react';
import Scroll from '../../../base/scroll/scroll'
import Slider from '../../../base/slider/slider'
import {DiscoveryPropsType} from "../PropsType";
import {getBanner} from "../../../api/discovery";
import './recommend.scss'

interface PropsType extends DiscoveryPropsType {
}

interface StateType {
    sliderData: object[]
}


class Recommend extends React.Component<PropsType, StateType> {
    constructor(props: PropsType, state: StateType) {
        super(props)

        this.state = {
            sliderData: []
        }
    }

    public componentWillMount() {
        this._getBanner()
    }

    public render() {
        return (
            <div className={['recommend-container', this.props.disNav === 'recommend' ? '' : 'hidden'].join(' ')}>
                <Scroll content={'recommend-content'}>
                    <div>
                        <div className='slider-container'>
                            <div className='slider-content'>
                                <Slider data={this.state.sliderData}/>
                            </div>
                        </div>
                    </div>
                </Scroll>
            </div>
        )
    }

    private _getBanner() {
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