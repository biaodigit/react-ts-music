import * as React from 'react';
import {connect} from 'react-redux';
import {getSongListDetail} from "../../api/discovery";
import './song-list.scss'

interface PropsType {
    history: any
    match: any
    songListId: number
}

interface StateType {
    playList: any
    loadEnd: boolean
}

class SongList extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)

        this.state = {
            playList: {},
            loadEnd: false
        }
    }

    public componentDidMount() {
        this.getSongListDetail()
    }

    public render() {
        const {
            coverImgUrl,
            name
        } = this.state.playList
        return (
            <div className='song-list-container'>
                <div className='song-list-header'>
                    <i onClick={() => this.props.history.goBack()} className="icon-back"/>
                    <h3 className='title'>歌单</h3>
                    <img className='player' src={require('../../assets/images/player.png')}/>
                </div>
                <div className='song-list-content'>
                    <div className='bg-image' style={{backgroundImage: `url(${coverImgUrl}?param=100y100)`}}/>
                    <div className='list-header-container'>
                        <div className='list-avatar'>
                            <img src={`${coverImgUrl}`} width='100' height='100'/>
                        </div>
                        <div className="list-creator">
                            <span className='name'>{name}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getSongListDetail() {
        if (!this.props.songListId) {
            this.props.history.goBack();
            return;
        }

        getSongListDetail(this.props.match.params.id).then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    playList: res.data.playlist
                }, () => {
                    console.log(this.state.playList)
                })
            }
        })
    }
}

export default connect(
    (state: any) => ({songListId: state.songListId}),
    null
)(SongList);