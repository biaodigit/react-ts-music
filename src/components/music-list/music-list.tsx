import * as React from 'react'
import Scroll from '../../base/scroll/scroll'
import {calCount} from "../../common/ts/util";
import './music-list.scss'

interface PropsType {
    history: any
    data: any
}

interface StateType {
    scrollY: number
}

class MusicList extends React.Component<PropsType, StateType> {
    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            scrollY: -1
        }
    }

    public render() {
        const {data} = this.props;
        return (
            <div className='music-list-container'>
                <div className='music-list-header'>
                    <i onClick={() => this.props.history.goBack()} className="icon-back"/>
                    <h3 className='title'>歌单</h3>
                    <img className='player' src={require('../../assets/images/player.png')}/>
                </div>
                <div className='head-blur-bgImage'>
                    <div className='bgImage' style={{backgroundImage: `url(${data.coverImg}?param=100y100)`}}/>
                </div>
                <Scroll onScroll={this.onScrollY} pullDownRefresh={false} className={'music-list-content'}>
                    <div className='music-list-info'>
                        <div className='bg-image' style={{backgroundImage: `url(${data.coverImg}?param=100y100)`}}/>
                        <div className='info-container'>
                            <div className='info-avatar'>
                                <div className='avatar' style={{backgroundImage: `url(${data.coverImg})`}}/>
                                <div className='play-count-container'>
                                    <img className='play-count-img'
                                         src={require('../../assets/images/headphone.png')}/>
                                    <span className='play-count-num'>{calCount(data.playCount)}</span>
                                </div>
                            </div>
                            <div className="info-content">
                                <h2 className='name'>{data.name}</h2>
                                <div className='creator'>
                                    <img className="creator-avatar" src={data.creatorAvatar}/>
                                    <p className='creator-name'>{data.creator}</p>
                                </div>
                            </div>
                        </div>
                        <div className='nav-container'>
                            <div className='nav-item'>
                                <img src={require('../../assets/images/comments.png')}/>
                                <p className='count'>{data.commentCount}</p>
                            </div>
                            <div className='nav-item'>
                                <img src={require('../../assets/images/share.png')}/>
                                <p className='count'>{data.shareCount}</p>
                            </div>
                            <div className='nav-item'>
                                <img src={require('../../assets/images/download.png')}/>
                                <p className='count'>下载</p>
                            </div>
                            <div className='nav-item'>
                                <img src={require('../../assets/images/comments.png')}/>
                                <p className='count'>多选</p>
                            </div>
                        </div>
                    </div>
                    <div className='music-list-detail'>
                        <div className='play-subscriber-container border-1px-bottom'>
                            <div className='play-btn-container'>
                                <i className='icon-play'/>
                                <span className='text'>播放全部</span>
                                <span className='count'>(共{data.trackCount}首)</span>
                            </div>
                            <div className='subscriber-container'>
                                <i className='icon-delete'/>
                                <span
                                    className='collect'>收藏({(data.subscribedCount + '').length > 5 ? calCount(data.subscribedCount) : data.subscribedCount})</span>
                            </div>
                        </div>
                        <ul className='list-detail'>
                            {
                                data.tracks.map((item: any, index: number) => (
                                    <li className="list-item" key={index}>
                                        <div className='rank'>{index + 1}</div>
                                        <div className='content border-1px-bottom'>
                                            <h2 className='name'>{item.name}</h2>
                                            <p className='desc'>{item.singer} - {item.desc}</p>
                                        </div>
                                        <div className='play-video border-1px-bottom'>
                                            <i className='play icon-play'/>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Scroll>
            </div>
        )
    }

    private onScrollY = (y: number) => {
        this.setState({
            scrollY:y
        },() => {
            console.log(this.state.scrollY)
        })
    }

}

export default MusicList