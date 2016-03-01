import {BaseDocument, BaseAttributes} from 'src/server/models/base.d';

export interface IProjectAttributes extends BaseAttributes {
  title: string;
  description: string;
}

export interface IProjectDocument extends BaseDocument<IProjectDocument>, IProjectAttributes {
  // Methods
}