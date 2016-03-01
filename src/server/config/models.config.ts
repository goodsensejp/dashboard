import {Mongoose} from 'mongoose';
import {configureUserModel} from 'src/server/models/user/UserModel';
import {configureStoryModel} from 'src/server/models/story/StoryModel';
import {configureProjectModel} from 'src/server/models/project/ProjectModel';
import {configureSprintModel} from 'src/server/models/sprint/SprintModel';
import {configureTaskModel} from 'src/server/models/task/TaskModel';

export function configureModels(mongoose: Mongoose) {
  configureUserModel(mongoose);
  configureStoryModel(mongoose);
  configureProjectModel(mongoose);
  configureSprintModel(mongoose);
  configureTaskModel(mongoose);
}