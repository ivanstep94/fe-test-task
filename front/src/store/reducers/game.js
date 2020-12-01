import { STORE_GAME, CHANGE_VIEW_TYPE, LOG_MOVE, FETCH_MOVE_SUCCEED } from '../actions/game';

export default function(state = {}, {type, payload = {}}) {
    switch (type) {
        case FETCH_MOVE_SUCCEED:
            return { ...state, ...payload };
        case STORE_GAME:
            return { ...payload };
        case  CHANGE_VIEW_TYPE:
            return { ...state, view: payload || 'game' };
        case  LOG_MOVE:
            return { ...state, log: [ ...state.log || [], ...payload ] };
    }
    return state;
}