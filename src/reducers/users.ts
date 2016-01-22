import {combineReducers} from 'redux-immutablejs';
import {Map} from 'immutable';
import {USER_ACTIONS} from "../constants/ActionTypes";

let initialState = Map({ isFetching: false, id: null });

export function me(state = initialState, action) {
  if (action.type === USER_ACTIONS.FETCH_ME) {
    switch (action.status) {
      case "request":
        console.log(action);
        return state.merge({ isFetching: true, id: null });

      case "success":
        return state.merge({ isFetching: false, id: action.id });

      case "failure":
        return state.merge({ isFetching: false, id: null });
    }
  }

  return state;
}

export function profile(state = initialState, action) {
  if (action.type === USER_ACTIONS.FETCH_PROFILE) {
    switch (action.status) {
      case "request":
        return state.merge({ isFetching: true, id: null });

      case "success":
        return state.merge({ isFetching: false, id: action.id });

      case "failure":
        return state.merge({ isFetching: false, id: null });
    }
  }

  return state;
}

export default combineReducers({
  me,
  profile
});