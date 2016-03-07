import {Promise} from 'mongoose';
import {TaskModel, ITaskDocument} from 'src/server/models/task/TaskModel';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';

export class TaskRepository {

  all() {
    return TaskModel.find({}).exec();
  }

  findById(id) {
    return TaskModel.findById(id).exec();
  }

  create(attributes) {
    var task = new TaskModel();
    task.replaceAttributes(attributes);
    return task.promiseToSave();
  }

  update(task: ITaskDocument, attributes) {
    task.updateAttributes(attributes);
    return task.promiseToSave();
  }

  replace(task: ITaskDocument, attributes) {
    task.replaceAttributes(attributes);
    return task.promiseToSave();
  }
}