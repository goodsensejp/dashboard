export enum UserType {ADMIN, STACK_HOLDER, DEVELOPER, DESIGNER}

export interface IUser {
  displayName: String;
  email: String;
  type: UserType;
  created_at: Date;
  updated_at: Date;
}
