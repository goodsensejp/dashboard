import {Mongoose} from 'mongoose';
import {configureUserModel} from 'src/server/models/user/UserModel';

export function configureModels(mongoose: Mongoose) {
  configureUserModel(mongoose);
}