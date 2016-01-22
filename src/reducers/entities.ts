import {fromJS} from 'immutable';
import {ENTITIES_ACTIONS} from "../constants/ActionTypes";

let initialState = fromJS({
  users: {}
});

function entities(state = initialState, action) {
  if(action.type === ENTITIES_ACTIONS.SAVE) {
    return state.merge(action.entities);
  }

  return state;
}

export default entities;