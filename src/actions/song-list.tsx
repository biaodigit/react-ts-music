import * as constants from '../constants/index'
import {SetSongListId} from './actionsType'

export function setSongListId(songListId: number): SetSongListId {
    return {
        type: constants.SONG_LIST_ID,
        songListId
    }
}