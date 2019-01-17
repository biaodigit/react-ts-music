import {
    SetPlayingState,
    SetSequenceList,
    SetPlayList,
    SetCurrentSongIndex,
    SetCurrentSong,
    SetPlayMode,
    SetFullScreen
} from "../actions/actionsType";
import {
    PLAY_LIST,
    PLAYING,
    SEQUENCE_LIST,
    CURRENT_SONG_INDEX,
    CURRENT_SONG,
    PLAY_MODE,
    FULL_SCREEN
} from "../constants";
import {playMode} from "../common/ts/config";

const initState = {
    playing: false,
    sequenceList: [],
    playList: [],
    currentSong: {},
    currentSongIndex: -1,
    mode: playMode.sequence,
    fullScreen: false
};

// 播放状态
export function playing(state = initState.playing, action: SetPlayingState): boolean {
    switch (action.type) {
        case PLAYING:
            return action.playing;
        default:
            return state
    }
}

// 序列列表
export function sequenceList(state = initState.sequenceList, action: SetSequenceList): any {
    switch (action.type) {
        case SEQUENCE_LIST:
            return action.sequenceList;
        default:
            return state
    }
}

// 播放列表
export function playList(state = initState.playList, action: SetPlayList): any {
    switch (action.type) {
        case PLAY_LIST:
            return action.playList;
        default:
            return state
    }
}

// 当前歌曲
export function currentSong(state = initState.currentSong, action: SetCurrentSong): any {
    switch (action.type) {
        case CURRENT_SONG:
            return action.currentSong;
        default:
            return state
    }
}

// 当前歌曲在播放列表索引
export function currentSongIndex(state = initState.currentSongIndex, action: SetCurrentSongIndex): number {
    switch (action.type) {
        case CURRENT_SONG_INDEX:
            return action.currentSongIndex;
        default:
            return state
    }
}

// 播放模式
export function mode(state = initState.mode, action: SetPlayMode): number {
    switch (action.type) {
        case PLAY_MODE:
            return action.mode;
        default:
            return state
    }
}

// 播放器全屏
export function fullScreen(state = initState.fullScreen, action: SetFullScreen): boolean {
    switch (action.type) {
        case FULL_SCREEN:
            return action.fullScreen;
        default:
            return state
    }
}

