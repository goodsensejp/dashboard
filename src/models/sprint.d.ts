import {IProject} from 'src/models/project';

export interface ISprint {
  from_date: Date;
  to_date: Date;
  project: IProject;
  created_at: Date;
  updated_at: Date;
}