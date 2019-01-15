import {
    SetPlayingState,
    SetSequenceList,
    SetPlayList,
    SetCurrentSongIndex,
    SetCurrentSong,
    SetPlayMode
} from "../actions/actionsType";
import {PLAY_LIST, PLAYING, SEQUENCE_LIST, CURRENT_SONG_INDEX, CURRENT_SONG, PLAY_MODE} from "../constants";
import {playMode} from "../common/ts/config";

const initState = {
    playing: false,
    sequenceList: [],
    playList: [],
    currentSong: {},
    currentSongIndex: -1,
    mode: playMode.sequence
};

export function playing(state = initState.playing, action: SetPlayingState): boolean {
    switch (action.type) {
        case PLAYING:
            return action.playing;
        default:
            return state
    }
}

export function sequenceList(state = initState.sequenceList, action: SetSequenceList): any {
    switch (action.type) {
        case SEQUENCE_LIST:
            return action.sequenceList;
        default:
            return state
    }
}

export function playList(state = initState.playList, action: SetPlayList): any {
    switch (action.type) {
        case PLAY_LIST:
            return action.playList;
        default:
            return state
    }
}

export function currentSong(state = initState.currentSong, action: SetCurrentSong): any {
    switch (action.type) {
        case CURRENT_SONG:
            return action.currentSong;
        default:
            return state
    }
}

export function currentSongIndex(state = initState.currentSongIndex, action: SetCurrentSongIndex): number {
    switch (action.type) {
        case CURRENT_SONG_INDEX:
            return action.currentSongIndex;
        default:
            return state
    }
}

export function mode(state = initState.mode, action: SetPlayMode): number {
    switch (action.type) {
        case PLAY_MODE:
            return action.mode;
        default:
            return state
    }
}

