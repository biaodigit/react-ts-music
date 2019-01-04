import {SetSongListId} from "../actions/song-list";
import {SONG_LIST_ID} from "../constants";

export function songListId(state: number, action: SetSongListId): number {
    switch (action.type) {
        case SONG_LIST_ID:
            return state = action.songListId;
        default:
            return 0;
    }
}