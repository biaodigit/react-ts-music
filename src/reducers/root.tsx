import {combineReducers} from "redux";
import {searchIsShow} from "./search";
import {footerNav} from "./footer";
import {songListId} from "./song-list"
import {playing, sequenceList, playList, currentSong, currentSongIndex,mode} from "./player";

export default combineReducers({
    footerNav,
    searchIsShow,
    songListId,
    playing,
    sequenceList,
    playList,
    currentSong,
    currentSongIndex,
    mode
})