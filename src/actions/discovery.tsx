import * as constants from '../constants/index';

export interface SwitchDisNav {
    type: constants.SWITCH_DISCOVERY_NAV,
    text: string
}

export function switchDisNav(text: string): SwitchDisNav {
    return {
        text,
        type: constants.SWITCH_DISCOVERY_NAV,
    }
}
