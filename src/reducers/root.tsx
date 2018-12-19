import {combineReducers} from "redux";
import {searchIsShow} from "./search";
import {disNav} from "./discovery";

export default combineReducers({
    disNav,
    searchIsShow
})