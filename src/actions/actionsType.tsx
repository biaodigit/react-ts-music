import * as constants from "../constants";

// 设置底部导航
export interface SwitchFotNav {
    text: string
    type: constants.SWITCH_FOOTER_NAV
}

// 设置播放状态
export interface SetPlayingState {
    type: constants.PLAYING
    playing: boolean
}

// 设置播放列表
export interface SetPlayList {
    type: constants.PLAY_LIST
    playList: any
}

// 设置序列列表
export interface SetSequenceList {
    type: constants.SEQUENCE_LIST
    sequenceList: any
}

// 设置当前歌曲
export interface SetCurrentSong {
    type: constants.CURRENT_SONG
    currentSong: any
}

// 设置当前歌曲索引
export interface SetCurrentSongIndex {
    type: constants.CURRENT_SONG_INDEX,
    currentSongIndex: number
}

// 设置播放模式
export interface SetPlayMode {
    type: constants.PLAY_MODE
    mode: number
}

// 设置播放全屏
export interface SetFullScreen {
    type: constants.FULL_SCREEN
    fullScreen: boolean
}

// 选择播放
export interface SelectPlay {
    list: any
    index: number
}

// 显示搜索页面
export interface ShowSearch {
    type: constants.SHOW_SEARCH
}

// 设置当前歌单id
export interface SetSongListId {
    songListId: number
    type: constants.SONG_LIST_ID
}

