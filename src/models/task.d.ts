import {IUser} from 'src/models/user';

export interface ITask {
  title: string;
  description: string;
  assigned_to: IUser;
  created_at: Date;
  updated_at: Date;
}
