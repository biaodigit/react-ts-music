import * as constants from '../constants/index'
import {playMode} from "../common/ts/config";
import {shuffle, findIndex} from "../common/ts/util";
import {
    SetPlayingState,
    SelectPlay,
    SetSequenceList,
    SetPlayList,
    SetCurrentSong,
    SetCurrentSongIndex,
    SetPlayMode
} from "./actionsType";

export function setPlayingState(playing: boolean): SetPlayingState {
    return {
        type: constants.PLAYING,
        playing
    }
}

export function setSequenceList(sequenceList: any): SetSequenceList {
    return {
        type: constants.SEQUENCE_LIST,
        sequenceList
    }
}

export function setPlayList(playList: any): SetPlayList {
    return {
        type: constants.PLAY_LIST,
        playList
    }
}

export function setCurrentSong(currentSong: any): SetCurrentSong {
    return {
        type: constants.CURRENT_SONG,
        currentSong
    }
}

export function setCurrentSongIndex(currentSongIndex: number): SetCurrentSongIndex {
    return {
        type: constants.CURRENT_SONG_INDEX,
        currentSongIndex
    }
}

export function setPlayMode(mode: number): SetPlayMode {
    return {
        type: constants.PLAY_MODE,
        mode
    }
}

export function selectPlay({list, index}: SelectPlay) {
    return (dispatch: any, getState: any) => {
        const {mode} = getState();
        dispatch(setCurrentSong(list[index]));
        dispatch(setPlayingState(true));
        if (mode === playMode.random) {
            let randomList = shuffle(list);
            index = findIndex(randomList, list[index]);
            dispatch(setPlayList(randomList));
        } else {
            dispatch(setPlayList(list))
        }
        dispatch(setSequenceList(list));
        dispatch(setCurrentSongIndex(index))
    }
}