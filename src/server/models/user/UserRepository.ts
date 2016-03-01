import {IUserDocument, IUserAttributes} from 'src/server/models/user/user.d';
import {Promise} from 'mongoose';
import {UserModel} from 'src/server/models/user/UserModel';

export class UserRepository {

  all() {
    return UserModel.find({}).exec();
  }

  findById(id) {
    return UserModel.findById(id).exec();
  }

  register({ displayName, email, password }) {
    const user = new UserModel(), promise = new Promise();

    user.displayName = displayName;
    user.email = email;
    user.hashPassword(password);

    user.save<IUserDocument>((err, user) => {
      if(err) {
        promise.reject(err)
      } else {
        promise.fulfill(user);
      }
    });

    return promise;
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