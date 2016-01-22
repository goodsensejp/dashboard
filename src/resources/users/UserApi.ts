import Api from "../Api";
import {userSchema} from "../schemas";
import IUserResource from "./IUserResource";

export default class UserApi extends Api implements IUserResource  {
  byUsername(username) {
    return this.call('users/' + username, userSchema);
  }
}
