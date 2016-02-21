import ActionCreator from "../ActionCreator";
import {USER_ACTIONS} from "../../constants/ActionTypes";
import {Store} from "redux";
import IUserResource from "../../resources/users/IUserResource";

export default class FetchUserAction extends ActionCreator {

  constructor(getState) {
    super(getState);
  }

  getEntity() {
    return this.state.entities.get('stores');
  }

  getDocument() {
    return this.state.stories.get('allStories');
  }

  run() {
    if(this.getDocument().get('isFetching')) {
      return;
    }

    this.onNext({ status: "request", type: USER_ACTIONS.FETCH_ME });
  }
}