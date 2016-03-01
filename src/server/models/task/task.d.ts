import {BaseDocument, BaseAttributes} from 'src/server/models/base.d';
import {IUserDocument} from 'src/server/models/user/user.d';

export interface ITaskAttributes extends BaseAttributes {
  // Public properities
  title: string;
  description: string;
  assigned_to: IUserDocument;
}

export interface ITaskDocument extends BaseDocument<ITaskDocument>, ITaskAttributes {
  // Methods
}