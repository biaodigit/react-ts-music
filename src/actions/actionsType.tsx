import * as constants from "../constants";

export interface SwitchFotNav {
    text: string
    type: constants.SWITCH_FOOTER_NAV
}

export interface SetPlayingState {
    type: constants.PLAYING
    playing: boolean
}

export interface SetPlayList {
    type: constants.PLAY_LIST
    playList: any
}

export interface SetSequenceList {
    type: constants.SEQUENCE_LIST
    sequenceList: any
}

export interface SetCurrentSong {
    type: constants.CURRENT_SONG
    currentSong: any
}

export interface SetCurrentSongIndex {
    type: constants.CURRENT_SONG_INDEX,
    currentSongIndex: number
}

export interface SetPlayMode {
    type: constants.PLAY_MODE
    mode: number
}

export interface SelectPlay {
    list: any
    index: number
}

export interface ShowSearch {
    type: constants.SHOW_SEARCH
}

export interface SetSongListId {
    songListId: number
    type: constants.SONG_LIST_ID
}

