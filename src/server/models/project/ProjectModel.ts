import {Schema, Model, Mongoose} from 'mongoose';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';
import {IProject} from 'src/models/project';
import {BaseDocument} from 'src/server/models/base.d';

export interface IProjectDocument extends IProject, BaseDocument<IProjectDocument> {
}

export var ProjectModel: Model<IProjectDocument>;

export function configureProjectModel(mongoose: Mongoose) {
  var projectSchema = new Schema({
    title: String,
    description: String
  });

  projectSchema.method('replaceAttributes', function(attributes) {
    this.title = attributes.title;
    this.description = attributes.description;
  });

  projectSchema.method('updateAttributes', function(attributes) {
    if(attributes.title) {
      this.title = attributes.title;
    }
    if(attributes.description) {
      this.description = attributes.description;
    }
  });

  projectSchema.plugin(timestampsPlugin);
  projectSchema.plugin(promisifyPlugin);

  ProjectModel = mongoose.model<IProjectDocument>('Project', projectSchema); 
}