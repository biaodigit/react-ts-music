import {SetSongListId} from "../actions/actionsType";;
import {SONG_LIST_ID} from "../constants";

export function songListId(state = 0, action: SetSongListId): number {
    switch (action.type) {
        case SONG_LIST_ID:
            return state = action.songListId;
        default:
            return state
    }
}