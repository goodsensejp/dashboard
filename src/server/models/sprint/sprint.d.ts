import {BaseDocument, BaseAttributes} from 'src/server/models/base.d';
import {IProjectDocument} from 'src/server/models/project/project.d';

export interface ISprintAttributes extends BaseAttributes {
  // Public properities
  from_date: Date;
  to_date: Date;
  project: IProjectDocument;
}

export interface ISprintDocument extends BaseDocument<ISprintDocument>, ISprintAttributes {
  // Methods
}