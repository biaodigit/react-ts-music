import * as React from 'react'
import Header from '../../component/header/header'
import Slider from '../../base/slider/slider'
import SearchBox from '../../base/searct-box/search-box'
import {getBanner} from "../../api/discovery";
import './discovery.scss'

class Discovery extends React.Component {
    public componentWillMount() {
        this._getBanner()
    }

    public render() {
        return (
            <div className='discovery-wrapper'>
                <Header>
                    <div className='left-wrapper'>
                        {/*<img className='left-icon'/>*/}
                    </div>
                    <SearchBox {...this.props}/>
                    <div className='right-wrapper'>
                        <img src={require('./images/player.png')} className='right-icon'/>
                    </div>
                </Header>
                <Slider/>
            </div>
        )
    }

    private _getBanner(): void {
        getBanner().then((res) => {
            console.log(res)
        })
    }
}

export default Discovery;