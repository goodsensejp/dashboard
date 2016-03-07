import {Promise} from 'mongoose';
import {UserModel} from 'src/server/models/user/UserModel';

export class UserRepository {

  all() {
    return UserModel.find({}).exec();
  }

  findById(id) {
    return UserModel.findById(id).exec();
  }
}