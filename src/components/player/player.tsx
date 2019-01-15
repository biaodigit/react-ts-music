import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as playerActions from '../../actions/player'
import {PlayerPropsType} from "./PropsType";
import './player.scss';

interface PropsType extends PlayerPropsType {
    playList: object[]
    currentSong: any
    mode: number
}

interface StateType {
    fullScreen: true
}


class Player extends React.Component<PropsType, StateType> {
    constructor(props: PropsType, state: StateType) {
        super(props);

        this.state = {
            fullScreen: true
        }
    }

    public shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<StateType>, nextContext: any): boolean {
        if (nextProps.currentSong.getLyric) {
            nextProps.currentSong.getLyric().then((lyric:string) => {
                console.log(lyric)
            })
        }
        return true
    }

    public render() {
        const {fullScreen} = this.state;
        const {playList, currentSong} = this.props;
        return (
            <div className='player-container' style={{display: playList.length ? 'block' : 'none'}}>
                <div className='normal-player' style={{display: fullScreen ? 'block' : 'none'}}>
                    <div className='background'>
                        <img width={'100%'} height={'100%'} src={currentSong.image}/>
                        <div className='mask'/>
                    </div>
                    <div className='player-header'/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state: any) => ({
        playList: state.playList,
        currentSong: state.currentSong,
        mode: state.mode
    }),
    (dispatch) => bindActionCreators(playerActions, dispatch)
)(Player)