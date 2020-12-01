import {STORE_SCORE} from "../actions/score";

export default function(state = {}, {type, payload = {}}) {
    switch (type) {
      case STORE_SCORE:
      return {...state, ...payload};
  }
  return state;
}