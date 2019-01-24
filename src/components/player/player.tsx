import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as playerActions from '../../actions/player'
import {PlayerPropsType} from "./PropsType";
import ProgressBar from '../../base/progress-bar/progress-bar'
import './player.scss';

interface PropsType extends PlayerPropsType {
    playList: object[]
    currentSong: any
    mode: number
    fullScreen: boolean,
    setFullScreen: (full: boolean) => void
}

interface StateType {
    currentTime: number
}


class Player extends React.Component<PropsType, StateType> {
    private readonly cdWrapper: any;
    private readonly audio: any;

    constructor(props: PropsType, state: StateType) {
        super(props);

        this.cdWrapper = React.createRef();
        this.audio = React.createRef()

        this.state = {
            currentTime: 0
        }
    }

    public shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<StateType>, nextContext: any): boolean {
        return true
    }

    public componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any): void {

        if (prevProps.currentSong.id && this.props.currentSong.id === prevProps.currentSong.id) {
            return
        }
        this.audio.current.src = this.props.currentSong.url;
        this.audio.current.play();
    }

    public componentDidMount() {

    }

    public render() {
        const {currentTime} = this.state;
        const {playList, currentSong, fullScreen} = this.props;
        return (
            <div className='player-container' style={{display: playList.length ? 'block' : 'none'}}>
                <div className='normal-player' style={{display: fullScreen ? 'block' : 'none'}}>
                    <div className='background'>
                        <img width={'100%'} height={'100%'} src={currentSong.image}/>
                    </div>
                    <div className='player-header border-1px-bottom'>
                        <div onClick={this.back} className='back'>
                            <i className='icon-back'/>
                        </div>
                        <div className='title'>
                            <h1 className='song'>{currentSong.name}</h1>
                            <p className='singer'>{currentSong.singer}</p>
                        </div>
                        <div onClick={this.togglePlaying} className='forward'>
                            <img src={require('../../assets/images/share.png')}/>
                        </div>
                    </div>
                    <div className='player-middle'>
                        <div ref={this.cdWrapper} className='middle-cd'>
                            <div className='cd-needle'/>
                            <div className='cd-wrapper'>
                                <div className='cd-image'>
                                    <img className='image' src={currentSong.image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-bottom'>
                        <div className='progress-wrapper'>
                            <span className='time time-l'>{this.format(currentTime)}</span>
                            <div className='progress-bar-wrapper'>
                                <ProgressBar percent={this.percent()}/>
                            </div>
                            <span className='time time-r'>{this.format(currentSong.duration)}</span>
                        </div>
                        <div className='handle-wrapper'/>
                    </div>
                </div>
                <audio onTimeUpdate={this.updateTime} ref={this.audio}/>
            </div>
        );
    }

    private format = (time: number) => {
        time = time | 0;
        let minute = time / 60 | 0;
        let second = this.formatTime(time % 60 + '');
        return `${minute}:${second}`
    }

    private formatTime = (time: string) => {
        let len = (time + '').length;
        while (len < 2) {
            time = `0${time}`;
            len++
        }
        return time
    }

    private updateTime = (e: any) => {
        this.setState({
            currentTime: e.target.currentTime
        })
    }

    private back = () => {
        this.props.setFullScreen(!this.props.fullScreen)
    }

    private togglePlaying = () => {
        if (this.cdWrapper.current.classList.contains('pause')) {
            this.cdWrapper.current.classList.remove('pause')
            this.audio.current.play()
        } else {
            this.cdWrapper.current.classList.add('pause')
            this.audio.current.pause()
        }
    }

    private percent = () => {
        const {currentTime} = this.state;
        const {currentSong} = this.props;
        return currentTime / currentSong.duration
    }
}

export default connect(
    (state: any) => ({
        playList: state.playList,
        currentSong: state.currentSong,
        mode: state.mode,
        fullScreen: state.fullScreen
    }),
    (dispatch) => bindActionCreators(playerActions, dispatch)
)(Player)