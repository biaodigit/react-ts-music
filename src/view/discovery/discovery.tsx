import * as React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Header from '../../component/header/header'
import SearchBox from '../../base/searct-box/search-box'
import Recommend from './recommend/recommend'
import Radio from './radio/radio'
import {getBanner} from "../../api/discovery";
import * as discoveryActions from '../../actions/discovery'
import './discovery.scss'

interface Props {
    disNav: string,
    switchDisNav: (text: string) => void
}

class Discovery extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }

    public componentWillMount() {
        this._getBanner()
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
                        <span className={this.props.disNav === 'recommend' ? 'line' : ''}/>
                    </div>
                    <div onClick={this.switchNav.bind(this, 'radio')} className='nav-item'>
                        <span className='text'>主播电台</span>
                        <span className={this.props.disNav === 'radio' ? 'line' : ''}/>
                    </div>
                </div>
                <Recommend disNav={this.props.disNav}/>
                <Radio disNav={this.props.disNav}/>
            </div>
        )
    }

    private switchNav = (text: string) => {
        this.props.switchDisNav(text)
    }

    private _getBanner = () => {
        getBanner().then((res) => {
            console.log(res)
        })
    }
}


export default connect(
    (state: any) => ({disNav: state.disNav}),
    (dispatch) => bindActionCreators(discoveryActions, dispatch)
)(Discovery);