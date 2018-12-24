import {combineReducers} from "redux";
import {searchIsShow} from "./search";
import {footerNav} from "./footer";

export default combineReducers({
    footerNav,
    searchIsShow
})