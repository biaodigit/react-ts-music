import * as React from 'react';
import Scroll from '../../../base/scroll/scroll'
import {DiscoveryPropsType} from "../PropsType";
import './radio.scss'

interface PropsType extends DiscoveryPropsType{
}

class Radio extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public render() {
        return (
            <div className={['radio-container', this.props.disNav === 'radio' ? '' : 'hidden'].join(' ')}>
                <Scroll content={'radio-content'}>
                    <div>
                        主播电台
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                        <p>推荐</p>
                    </div>
                </Scroll>
            </div>
        )
    }
}

export default Radio