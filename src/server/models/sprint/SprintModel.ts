import {Schema, Model, Mongoose} from 'mongoose';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';
import {ISprint} from 'src/models/sprint';
import {BaseDocument} from 'src/server/models/base.d';

export interface ISprintDocument extends ISprint, BaseDocument<ISprintDocument> {
}

export var SprintModel: Model<ISprintDocument>;

export function configureSprintModel(mongoose: Mongoose) {
  var sprintSchema = new Schema({
    from_date: Date,
    to_date: Date,
    project: {type: String, ref: 'Project'}
  });

  sprintSchema.method('replaceAttributes', function(attributes) {
    this.from_date = attributes.from_date;
    this.to_date = attributes.to_date;
    this.project = MongooseUtils.id(attributes.project);
  });

  sprintSchema.method('updateAttributes', function(attributes) {
    if(attributes.from_date) {
      this.from_date = attributes.from_date;
    }
    if(attributes.to_date) {
      this.to_date = attributes.to_date;
    }
    if(attributes.project) {
      this.project = MongooseUtils.id(attributes.project);
    }
  });

  sprintSchema.plugin(timestampsPlugin);
  sprintSchema.plugin(promisifyPlugin);

  SprintModel = mongoose.model<ISprintDocument>('Sprint', sprintSchema); 
}