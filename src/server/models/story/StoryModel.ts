import {Schema, Model, Mongoose} from 'mongoose';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';
import {IStory} from 'src/models/story';
import {BaseDocument} from 'src/server/models/base.d';

export interface IStoryDocument extends IStory, BaseDocument<IStoryDocument> {
  replaceAttributes(attrs: IStory): void;
  updateAttributes(attrs: IStory): void;
}

export var StoryModel: Model<IStoryDocument>;

export function configureStoryModel(mongoose: Mongoose) {
  var storySchema = new Schema({
    title: String,
    description: String,
    project: {type: String, ref: 'Project'},
    sprint: {type: String, ref: 'Sprint'}
  });

  storySchema.method('replaceAttributes', function(attributes) {
    this.title = attributes.title;
    this.description = attributes.description;
    this.project = MongooseUtils.id(attributes.project);
    this.sprint = MongooseUtils.id(attributes.sprint);
  });

  storySchema.method('updateAttributes', function(attributes) {
    if(attributes.title) {
      this.title = attributes.title;
    }

    if(attributes.description) {
      this.description = attributes.description;
    }
  });

  storySchema.plugin(timestampsPlugin);
  storySchema.plugin(promisifyPlugin);

  StoryModel = mongoose.model<IStoryDocument>('Story', storySchema); 
}