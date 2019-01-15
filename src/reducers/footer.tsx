import {SwitchFotNav} from "../actions/actionsType";
import {SWITCH_FOOTER_NAV} from "../constants";

export function footerNav(state: string, action: SwitchFotNav): string {
    switch (action.type) {
        case SWITCH_FOOTER_NAV:
            return state = action.text;
        default:
            return '/discovery'
    }
}