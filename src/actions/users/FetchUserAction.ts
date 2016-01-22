import ActionCreator from "../ActionCreator";
import {USER_ACTIONS} from "../../constants/ActionTypes";
import {Store} from "redux";
import IUserResource from "../../resources/users/IUserResource";

export default class FetchUserAction extends ActionCreator {

  constructor(getState, public userApi: IUserResource) {
    super(getState);
  }

  getType() {
    return USER_ACTIONS.FETCH_ME;
  }

  getEntity() {
    return this.state.entities.get('users');
  }

  getDocument() {
    return this.state.users.get('profile');
  }

  request(username) {
    this.onNext({ status: "request", id: username });
  }

  success(username) {
    this.onNext({ status: "success", id: username });
  }

  failure(error) {
    this.onNext({ status: "error", error: error.message || "Failed to load user!" });
  }

  run({ username }) {
    if(this.getDocument().get('isFetching')) {
      return;
    }

    if(this.getEntity().has(username)) {
      return this.success(username);
    }

    this.request(username);

    this.userApi.byUsername(username).then(
      (response) => this.success(username),
      (error)    => this.failure(error));
  }
}