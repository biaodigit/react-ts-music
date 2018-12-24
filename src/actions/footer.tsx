import * as constants from '../constants/index'

export interface SwitchFotNav {
    text: string
    type: constants.SWITCH_FOOTER_NAV
}

export function switchNav(text: string): SwitchFotNav {
    return {
        text,
        type: constants.SWITCH_FOOTER_NAV
    }
}