import * as constants from '../constants/index'
import {SwitchFotNav} from "./actionsType";

export function switchNav(text: string): SwitchFotNav {
    return {
        text,
        type: constants.SWITCH_FOOTER_NAV
    }
}