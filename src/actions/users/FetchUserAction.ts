import ActionCreator from "../ActionCreator";
import {USER_ACTIONS} from "../../constants/ActionTypes";
import IUserResource from "../../resources/users/IUserResource";

export default class FetchUserAction extends ActionCreator {

  constructor(getState, public userApi: IUserResource) {
    super(getState);
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

  private getEntity() {
    return this.state.entities.get('users');
  }

  private getDocument() {
    return this.state.users.get('profile');
  }

  private request(username) {
    this.onNext({ 
      type: USER_ACTIONS.FETCH_PROFILE, 
      status: "request", 
      id: username 
    });
  }

  private success(username) {
    this.onNext({ 
      type: USER_ACTIONS.FETCH_PROFILE, 
      status: "success", 
      id: username 
    });
  }

  private failure(error) {
    this.onNext({ 
      type: USER_ACTIONS.FETCH_PROFILE, 
      status: "failure", 
      error: error.message || "Failed to load user!" 
    });
  }
}