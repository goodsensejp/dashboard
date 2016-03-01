import {Api} from "src/client/resources/Api";
import {Schema, arrayOf} from 'normalizr';

export const userSchema = new Schema('users');

export class UserApi extends Api {
  register({displayName, email, password}) {
    return this.post('user/register', {displayName, email, password});
  }

  login({email, password}) {
    return this.post('user/login', {email, password});
  }

  me() {
    return this.get('me')
      .map((res) => this.normalize(res, userSchema));
  }

  all() {
    return this.get('user')
      .map((res) => this.normalize(res, arrayOf(userSchema)));
  }

  findById(id) {
    return this.get(`user/${id}`)
      .map((res) => this.normalize(res, userSchema));
  }
}
