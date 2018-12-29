import * as React from 'react';
import {Link} from 'react-router-dom'
import Scroll from '../../../base/scroll/scroll'
import Slider from '../../../base/slider/slider'
import TypeNav from '../../../component/type-nav/type-nav'
import Panel from '../../../component/panel/panel'
import List from '../../../component/list/list'
import Toast from '../../../base/toast/toast'
import {getBanner, getRecSongList} from '../../../api/discovery'
import './recommend.scss'

interface StateType {
    sliderData: object[],
    listData: object[]
}


class Recommend extends React.Component<any, StateType> {
    constructor(props: any, state: StateType) {
        super(props)

        this.state = {
            sliderData: [],
            listData: []
        }
    }

    public componentWillMount() {
        this.getRecBanner()
        this.getSongList()
    }

    public render() {
        return (
            <div className='recommend-container'>
                <Scroll pullDown={this.onPullDownRefresh}
                        pullup={true} className={'recommend-content'}>
                    <div className='slider-container'>
                        {
                            this.state.sliderData.length &&
                            <div className='slider-content'>
                                <Slider data={this.state.sliderData}/>
                            </div>
                        }
                    </div>
                    <TypeNav>
                        <div onClick={this.showToast} className="type-nav-item">
                            <div className='img-box'>
                                <img src={require('../images/private.png')}/>
                            </div>
                            <span className='text'>私人FM</span>
                        </div>
                        <div onClick={this.showToast} className="type-nav-item">
                            <div className='img-box'>
                                <img src={require('../images/date.png')}/>
                            </div>
                            <span className='text'>每日推荐</span>
                        </div>
                        <Link to='/allSongList' className="type-nav-item">
                                <span className='img-box'>
                                    <img src={require('../images/songlist.png')}/>
                                </span>
                            <span className='text'>歌单</span>
                        </Link>
                        <Link to='/rank' className="type-nav-item">
                            <div className='img-box'>
                                <img src={require('../images/rank.png')}/>
                            </div>
                            <span className='text'>排行榜</span>
                        </Link>
                    </TypeNav>
                    <Panel title={'推荐歌单'} className={'rec-song-list'}>
                        <List data={this.state.listData}/>
                    </Panel>
                </Scroll>
            </div>
        )
    }

    private onPullDownRefresh = () => {
        this.getRecBanner();
        this.getSongList();
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

    private getSongList = () => {
        getRecSongList().then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    listData: res.data.result.slice(0, 6)
                })
            }
        })
    }

    private showToast = () => {
        Toast.show('功能未开放', 2000)
    }
}

export default Recommend