import {Schema, Model, Mongoose} from 'mongoose';
import {ISprintDocument} from 'src/server/models/sprint/sprint.d';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';

export var SprintModel: Model<ISprintDocument>;

export function configureSprintModel(mongoose: Mongoose) {
  var sprintSchema = new Schema({
    from_date: Date,
    to_date: Date,
    project: {type: String, ref: 'Project'}
  });

  sprintSchema.plugin(timestampsPlugin);
  sprintSchema.plugin(promisifyPlugin);

  SprintModel = mongoose.model<ISprintDocument>('Sprint', sprintSchema); 
}