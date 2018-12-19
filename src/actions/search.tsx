import * as constants from '../constants/index';

export interface ShowSearch {
    type: constants.SHOW_SEARCH
}

export function showSearch(): ShowSearch {
    return {
        type: constants.SHOW_SEARCH
    }
}