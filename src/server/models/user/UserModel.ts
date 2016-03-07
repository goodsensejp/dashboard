import {Schema, Model, Mongoose} from 'mongoose';
import * as crypto from "crypto";
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';
import {IUser} from 'src/models/user';
import {BaseDocument} from 'src/server/models/base.d';

export interface IUserDocument extends IUser, BaseDocument<IUserDocument> {
  replaceAttributes(attrs: IUser): void;
  updateAttributes(attrs: IUser): void;
  hashPassword(password: String): void;
  checkPassword(password: String): Boolean;
}

export var UserModel: Model<IUserDocument>;

export function configureUserModel(mongoose: Mongoose) {
  var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,

    type: Number
  });

  userSchema.plugin(timestampsPlugin);
  userSchema.plugin(promisifyPlugin);

  userSchema.method('replaceAttributes', function(attributes) {
    throw new Error("Not implemented");
  });

  userSchema.method('updateAttributes', function(attributes) {
    throw new Error("Not implemented");
  });

  userSchema.method('hashPassword', function(password) {
    this.hashedPassword = md5(password);
  });

  userSchema.method('checkPassword', function(password) {
    return this.hashedPassword === md5(password);
  });

  const md5 = (password) => crypto.createHash('md5').update('"'+password+'"').digest('hex');

  UserModel = mongoose.model<IUserDocument>('User', userSchema); 
}