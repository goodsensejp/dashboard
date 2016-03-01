import {ITaskDocument, ITaskAttributes} from 'src/server/models/task/task.d';
import {Promise} from 'mongoose';
import {TaskModel} from 'src/server/models/task/TaskModel';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';

export class TaskRepository {

  all() {
    return TaskModel.find({}).exec();
  }

  findById(id) {
    return TaskModel.findById(id).exec();
  }

  create({ title, description, assigned_to }) {
    var task = new TaskModel();

    task.title = title;
    task.description = description;
    task.assigned_to = MongooseUtils.id(assigned_to);

    return task.promiseToSave();
  }

  update(task: ITaskDocument, attributes) {
    if(attributes.title) {
      task.title = attributes.title;
    }

    if(attributes.description) {
      task.description = attributes.description;
    }

    if(attributes.assigned_to) {
      task.assigned_to = MongooseUtils.id(attributes.assigned_to);
    }

    return task.promiseToSave();
  }
}