import * as React from 'react';
import {connect} from 'react-redux';
import {getSongListDetail} from "../../api/discovery";
import {createSongList} from "../../common/ts/list";
import MusicList from '../../components/music-list/music-list'
import Loading from '../../base/loading/loading'
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
        const {loadEnd} = this.state
        return (
            <div className='song-list-container'>
                {
                    loadEnd ? <MusicList history={this.props.history} data={this.state.playList}/>
                        : <Loading/>
                }
            </div>
        );
    }

    private getSongListDetail() {
        if (!this.props.songListId) {
            this.props.history.goBack();
            return;
        }

        getSongListDetail(this.props.songListId).then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    playList: createSongList(res.data.playlist),
                    loadEnd: true
                },() => {
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