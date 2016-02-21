import {Schema} from 'mongoose';
import {mongoose} from '../bindings';
import {IUserDocument} from './user.d';
import * as crypto from "crypto";

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

export var UserModel = mongoose.model<IUserDocument>('User', userSchema);
