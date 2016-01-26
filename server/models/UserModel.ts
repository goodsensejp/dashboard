import {Document, Schema} from 'mongoose';
import {mongoose} from '../bindings';

interface UserDocument extends Document {
  // Properities
  firstName: String;
  lastName: String;
  email: String;
  hashedPassword: String;

  // Methods
  hashPassword(password: String): void;
  checkPassword(password: String): Boolean;
}

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  hashedPassword: String
});

userSchema.method('hashPassword', function(password) {
  this.hashedPassword = password + 'hashed';
});

userSchema.method('checkPassword', function(password) {
  return this.hashedPassword === password + 'hashed';
})

export default mongoose.model<UserDocument>('User', userSchema);
