import {ShowSearch} from "../actions/actionsType";;
import {SHOW_SEARCH} from "../constants";

export function searchIsShow(state: boolean, action: ShowSearch): boolean {
    switch (action.type) {
        case SHOW_SEARCH:
            return !state;
        default:
            return false
    }
}

