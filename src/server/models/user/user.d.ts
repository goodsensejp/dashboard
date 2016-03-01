import {BaseDocument, BaseAttributes} from 'src/server/models/base.d';

export enum UserType {ADMIN, STACK_HOLDER, DEVELOPER, DESIGNER}

export interface IUserAttributes extends BaseAttributes {
  // Public properities
  displayName: String;
  email: String;
  type: UserType;
}

export interface IUserDocument extends BaseDocument<IUserDocument>, IUserAttributes {
  // Methods
  hashPassword(password: String): void;
  checkPassword(password: String): Boolean;
}