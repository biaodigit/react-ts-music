import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as playerActions from "../../actions/player";
import Scroll from '../../base/scroll/scroll';
import Toast from '../../base/toast/toast'
import ListView from '../list-view/list-view';
import {calCount} from "../../common/ts/util";
import {prefixStyle} from "../../common/ts/dom";
import './music-list.scss'

interface PropsType {
    history: any
    data: any
    playList: object[]
    select: (index: number) => void
    setFullScreen: (full: boolean) => void
}

const transform = prefixStyle('transform');

class MusicList extends React.Component<PropsType, any> {
    private readonly headerContainer: any;
    private readonly infoContainer: any;
    private readonly subscriberContainer: any;
    private readonly list: any;
    private minTranslateY: number;

    constructor(props: PropsType) {
        super(props);


        this.headerContainer = React.createRef();
        this.infoContainer = React.createRef();
        this.subscriberContainer = React.createRef();
        this.list = React.createRef()

        this.state = {
            title: '歌单'
        }
    }

    public componentDidMount() {
        const headerHeight = this.headerContainer.current.clientHeight;
        const infoHeight = this.infoContainer.current.clientHeight;
        const subHeight = this.subscriberContainer.current.clientHeight;
        this.list.current.scrollContainer.current.style.top = `${headerHeight + infoHeight + subHeight}px`
        this.minTranslateY = -infoHeight
    }

    public render() {
        const {title} = this.state;
        const {data, select} = this.props;
        return (
            <div className='music-list-container'>
                <div ref={this.headerContainer} className='music-list-header'>
                    <i onClick={() => this.props.history.goBack()} className="icon-back"/>
                    <h3 className='title'>{title}</h3>
                    <img onClick={this.openPlayer} className='player' src={require('../../assets/images/player.png')}/>
                </div>
                <div className='head-blur-bgImage'>
                    <div className='bgImage' style={{backgroundImage: `url(${data.coverImg}?param=100y100)`}}/>
                </div>
                <div ref={this.infoContainer} className='music-list-info'>
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
                <div ref={this.subscriberContainer} className='play-subscriber-container border-1px-bottom'>
                    <div className='play-btn-container'>
                        <i className='icon-play'/>
                        <span className='text'>播放全部</span>
                        <span className='count'>(共{data.trackCount}首)</span>
                    </div>
                    <div className='subscriber-container'>
                        <i className='icon-delete'/>
                        <span className='collect'>收藏({this.calCollectCount(data.subscribedCount)})</span>
                    </div>
                </div>
                <Scroll listenScroll={true} probeType={3} onScroll={this.onScrollY} ref={this.list} data={data.tracks}
                        pullDownRefresh={false}
                        className={'music-list-content'}>
                    <ListView selectItem={(index: number) => select(index)} data={data.tracks}/>
                </Scroll>
            </div>
        )
    }

    private onScrollY = (pos: any) => {
        const {title} = this.state;
        const {name} = this.props.data
        let minY = Math.max(this.minTranslateY, pos.y);
        if (minY === this.minTranslateY && title === '歌单') {
            this.setState({
                title: name
            })
        } else if (minY > this.minTranslateY && title === name) {
            this.setState({
                title: '歌单'
            })
        }
        this.infoContainer.current.style[transform] = `translateY(${minY}px)`;
        this.subscriberContainer.current.style[transform] = `translateY(${minY}px)`
    }

    private calCollectCount = (count: number) => {
        return (count + '').length > 5 ? calCount(count) : count
    }

    private openPlayer = () => {
        const {playList, setFullScreen} = this.props;
        if (!playList.length) {
            Toast.info('点首歌吧～');
            return
        }
        setFullScreen(true)
    }


}

export default connect(
    (state: any) => ({playList: state.playList}),
    (dispatch) => bindActionCreators(playerActions, dispatch)
)(MusicList)