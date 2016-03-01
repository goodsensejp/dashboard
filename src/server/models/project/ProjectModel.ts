import {Schema, Model, Mongoose} from 'mongoose';
import {IProjectDocument} from 'src/server/models/project/project.d';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';

export var ProjectModel: Model<IProjectDocument>;

export function configureProjectModel(mongoose: Mongoose) {
  var projectSchema = new Schema({
    title: String,
    description: String
  });

  projectSchema.plugin(timestampsPlugin);
  projectSchema.plugin(promisifyPlugin);

  ProjectModel = mongoose.model<IProjectDocument>('Project', projectSchema); 
}