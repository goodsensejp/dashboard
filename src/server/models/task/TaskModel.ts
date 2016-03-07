import {Schema, Model, Mongoose} from 'mongoose';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';
import {ITask} from 'src/models/task';
import {BaseDocument} from 'src/server/models/base.d';

export interface ITaskDocument extends ITask, BaseDocument<ITaskDocument> {
  replaceAttributes(attrs: ITask): void;
  updateAttributes(attrs: ITask): void;
}

export var TaskModel: Model<ITaskDocument>;

export function configureTaskModel(mongoose: Mongoose) {
  var taskSchema = new Schema({
    title: String,
    description: String,
    assigned_to: {type: String, ref: 'User'}
  });

  taskSchema.method('replaceAttributes', function(attributes) {
    this.title = attributes.title;
    this.description = attributes.description;
    this.assigned_to = MongooseUtils.id(attributes.assigned_to);
  });

  taskSchema.method('updateAttributes', function(attributes) {
    if(attributes.title) {
      this.title = attributes.title;
    }
    if(attributes.description) {
      this.description = attributes.description;
    }
    if(attributes.assigned_to) {
      this.assigned_to = attributes.assigned_to;
    }
  });

  taskSchema.plugin(timestampsPlugin);
  taskSchema.plugin(promisifyPlugin);

  TaskModel = mongoose.model<ITaskDocument>('Task', taskSchema); 
}