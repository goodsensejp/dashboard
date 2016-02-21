import {Schema, Model, Mongoose} from 'mongoose';
import {IUserDocument} from 'src/server/models/user/user.d';
import * as crypto from "crypto";

export var UserModel: Model<IUserDocument>;

export function configureUserModel(mongoose: Mongoose) {
  var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,

    type: Number
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