import {BaseDocument, BaseAttributes} from 'src/server/models/base.d';
import {IProjectDocument} from 'src/server/models/project/project.d';
import {ISprintDocument} from 'src/server/models/sprint/sprint.d';

export interface IStoryAttributes extends BaseAttributes {
  title: string;
  description: string;
  project: IProjectDocument;
  sprint: ISprintDocument;
}

export interface IStoryDocument extends BaseDocument<IStoryDocument>, IStoryAttributes {
  // Methods
}