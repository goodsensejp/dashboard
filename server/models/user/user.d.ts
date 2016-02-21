import {Document} from 'mongoose';

export enum UserType {ADMIN, STACK_HOLDER, DEVELOPER, DESIGNER};

export interface IUserAttributes {
  // Public properities
  displayName: String;
  email: String;
  type: UserType;
}

export interface IUserDocument extends Document, IUserAttributes {
  // Methods
  hashPassword(password: String): void;
  checkPassword(password: String): Boolean;
}