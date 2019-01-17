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
    fullScreen: boolean,
    setFullScreen: (full: boolean) => void
}

interface StateType {

}


class Player extends React.Component<PropsType, StateType> {
    private readonly cdWrapper: any;
    private readonly audio:any;

    constructor(props: PropsType, state: StateType) {
        super(props);

        this.cdWrapper = React.createRef();
        this.audio = React.createRef()
    }

    public shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<StateType>, nextContext: any): boolean {
        return true
    }
    public componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any): void {
        if(prevProps.currentSong.id && this.props.currentSong.id === prevProps.currentSong.id){
            return
        }
        this.audio.current.src = this.props.currentSong.url;
        // this.audio.current.play();
    }

    public componentDidMount() {

    }

    public render() {
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
                        <div onClick={this.pause} className='forward'>
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
                </div>
                <audio ref={this.audio}/>
            </div>
        );
    }

    private back = () => {
        this.props.setFullScreen(!this.props.fullScreen)
    }

    private pause = () => {
        if (this.cdWrapper.current.classList.contains('pause')) {
            this.cdWrapper.current.classList.remove('pause')
        } else {
            this.cdWrapper.current.classList.add('pause')
        }
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