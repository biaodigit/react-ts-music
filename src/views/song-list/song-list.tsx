import * as React from 'react';
import {connect} from 'react-redux';
import {getSongListDetail} from "../../api/song-list";
import {createSongList} from "../../common/ts/list";
import MusicList from '../../components/music-list/music-list'
import * as playerActions from '../../actions/player'
import {bindActionCreators} from "redux";
import {SelectPlay} from "../../actions/actionsType";
import './song-list.scss'

interface PropsType {
    history: any
    match: any
    songListId: number
    selectPlay: ({list, index}: SelectPlay) => void
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
        return (
            <div className='song-list-container'>
                <MusicList select={(index: number) => this.select(index)} history={this.props.history}
                           data={this.state.playList}/>
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
                }, () => {
                    console.log(this.state.playList)
                })
            }
        })
    }

    private select = (index: number) => {
        const list = this.state.playList.tracks;
        this.props.selectPlay({list, index});
    }
}

export default connect(
    (state: any) => ({songListId: state.songListId}),
    (dispatch) => bindActionCreators(playerActions, dispatch)
)(SongList);