import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as footerActions from '../../actions/footer'
import Header from '../../components/header/header'
import SearchBox from '../../base/searct-box/search-box'
import Recommend from './recommend/recommend'
import Radio from './radio/radio'
import {DiscoveryPropsType} from "./PropsType";
import './discovery.scss'

interface PropsType extends DiscoveryPropsType {
    switchNav: (path: string) => void
    history: any
}

interface StateType {
    disNav: string
}

const path: string = '/discovery'

class Discovery extends React.Component<PropsType, StateType> {
    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            disNav: 'recommend'
        }
    }

    public componentDidMount() {
        this.props.switchNav(path)
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
                    this.state.disNav === 'recommend' ?
                        <Recommend select={(id: number) => this.selectItem(id)}/> :
                        <Radio/>
                }
            </div>
        )
    }

    private switchNav = (text: string) => {
        this.setState({
            disNav: text
        })
    }

    private selectItem = (id: number) => {
        this.props.history.push({pathname: `/songList/${id}`})
    }
}

export default connect(
    null,
    (dispatch) => bindActionCreators(footerActions, dispatch)
)(Discovery);