import * as constants from '../constants/index';

export interface ModifySearchState {
    type: constants.MODIFY_SEARCH_STATE
}

export function modifySearch(): ModifySearchState {
    return {
        type: constants.MODIFY_SEARCH_STATE
    }
}