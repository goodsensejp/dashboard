import {IUserDocument, IUserAttributes} from './user.d';
import {UserModel} from './UserModel';
import {Promise} from 'mongoose';

export default class UserRepository {
  register({ displayName, email, password }) {
    const user = new UserModel();

    user.displayName = displayName;
    user.email = email;
    user.hashPassword(password);

    return user.save<IUserDocument>();
  }

  login({email, password}) {
    return UserModel.findOne({email}).exec()
      .then(function(user) {
        if(user.checkPassword(password)) {
          return user;
        } else {
          return new Promise().reject("Wrong password");
        }
      });
  }
}