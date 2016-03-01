import {Schema, Model, Mongoose} from 'mongoose';
import {ITaskDocument} from 'src/server/models/task/task.d';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';

export var TaskModel: Model<ITaskDocument>;

export function configureTaskModel(mongoose: Mongoose) {
  var taskSchema = new Schema({
    title: String,
    description: String,
    assigned_to: {type: String, ref: 'User'}
  });

  taskSchema.plugin(timestampsPlugin);
  taskSchema.plugin(promisifyPlugin);

  TaskModel = mongoose.model<ITaskDocument>('Task', taskSchema); 
}