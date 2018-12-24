import * as React from 'react'
import Header from '../../component/header/header'
import SearchBox from '../../base/searct-box/search-box'
import Recommend from './recommend/recommend'
import Radio from './radio/radio'
import {DiscoveryPropsType} from "./PropsType";
import './discovery.scss'

interface PropsType extends DiscoveryPropsType {
    switchDisNav: (text: string) => void
}

interface StateType {
    disNav: string
}

class Discovery extends React.Component<PropsType, StateType> {
    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            disNav: 'recommend'
        }
    }

    public render() {
        return (
            <div className='discovery-container'>
                <Header>
                    <div className='left-container'>
                        {/*<img className='left-icon'/>*/}
                    </div>
                    <SearchBox/>
                    <div className='right-container'>
                        <img src={require('./images/player.png')} className='right-icon'/>
                    </div>
                </Header>
                <div className='nav-container'>
                    <div onClick={this.switchNav.bind(this, 'recommend')} className='nav-item'>
                        <span className='text'>个性推荐</span>
                        {this.state.disNav === 'recommend' && <span className='line'/>}
                    </div>
                    <div onClick={this.switchNav.bind(this, 'radio')} className='nav-item'>
                        <span className='text'>主播电台</span>
                        {this.state.disNav === 'radio' && <span className='line'/>}
                    </div>
                </div>
                {
                    this.state.disNav === 'recommend' ? <Recommend/> : <Radio/>
                }
            </div>
        )
    }

    private switchNav = (text: string) => {
        this.setState({
            disNav: text
        })
    }
}

export default Discovery

// export default connect(
//     (state: any) => ({disNav: state.disNav}),
//     (dispatch) => bindActionCreators(discoveryActions, dispatch)
// )(Discovery);