import * as constants from '../constants/index';
import {ShowSearch} from "./actionsType";

export function showSearch(): ShowSearch {
    return {
        type: constants.SHOW_SEARCH
    }
}