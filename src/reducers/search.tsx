import {ModifySearchState} from "../actions/search";
import {MODIFY_SEARCH_STATE} from "../constants";

export function searchState(state: boolean, action: ModifySearchState): boolean {
    switch (action.type) {
        case MODIFY_SEARCH_STATE:
            return !state;
        default:
            return false
    }
}

