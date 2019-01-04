import {combineReducers} from "redux";
import {searchIsShow} from "./search";
import {footerNav} from "./footer";
import {songListId} from "./song-list"

export default combineReducers({
    footerNav,
    searchIsShow,
    songListId
})