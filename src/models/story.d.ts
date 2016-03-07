import {IProject} from 'src/models/project';
import {ISprint} from 'src/models/sprint';

export interface IStory {
  title: string;
  description: string;
  project: IProject;
  sprint?: ISprint;
  created_at: Date;
  updated_at: Date;
}