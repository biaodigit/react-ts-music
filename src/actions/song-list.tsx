import * as constants from '../constants/index'

export interface SetSongListId {
    songListId: number
    type: constants.SONG_LIST_ID
}

export function setSongListId(songListId: number): SetSongListId {
    return {
        type: constants.SONG_LIST_ID,
        songListId
    }
}