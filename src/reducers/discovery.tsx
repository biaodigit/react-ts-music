import {SwitchDisNav} from "../actions/discovery";
import {SWITCH_DISCOVERY_NAV} from "../constants";

export function disNav(state: string, action: SwitchDisNav): string {
    switch (action.type) {
        case SWITCH_DISCOVERY_NAV:
            return state = action.text;
        default:
            return 'recommend'
    }
}
