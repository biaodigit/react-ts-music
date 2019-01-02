import * as React from 'react';
import {Link} from 'react-router-dom'
import Scroll from '../../../base/scroll/scroll'
import Slider from '../../../base/slider/slider'
import TypeNav from '../../../components/type-nav/type-nav'
import Panel from '../../../components/panel/panel'
import List from '../../../components/list/list'
import Toast from '../../../base/toast/toast'
import {getBanner, getRecSongList, getFineSongList} from '../../../api/discovery'
import './recommend.scss'

interface StateType {
    sliderData: object[],
    listData: object[]
    fineSongData: object[]
}


class Recommend extends React.Component<any, StateType> {
    constructor(props: any, state: StateType) {
        super(props)

        this.state = {
            sliderData: [],
            listData: [],
            fineSongData: []
        }
    }

    public componentWillMount() {
        this.getRecBanner();
        this.getSongList();
        this.getFineSongs()
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
                        <List select={(id: number) => this.props.select(id)} data={this.state.listData}/>
                    </Panel>
                    <Panel title={'精品歌单'} className={'fine-song-list'}>
                        <List select={(id: number) => this.props.select(id)} data={this.state.fineSongData}/>
                    </Panel>
                </Scroll>
            </div>
        )
    }

    private onPullDownRefresh = () => {
        this.getRecBanner();
        this.getSongList();
        this.getFineSongs()
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

    private getFineSongs = () => {
        let data = [];
        getFineSongList().then((res) => {
            if (res.data.code === 200) {
                data = res.data.playlists.slice(0, 6);
                data.map((item: any) => {
                    item.picUrl = item.coverImgUrl
                });
                this.setState({
                    fineSongData: data
                })
            }
        })
    }

    private showToast = () => {
        Toast.show('功能未开放', 2000)
    }
}

export default Recommend