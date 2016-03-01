import {Schema, Model, Mongoose} from 'mongoose';
import {IStoryDocument} from 'src/server/models/story/story.d';
import {timestampsPlugin} from 'src/server/plugins/timestamps.plugin';
import {promisifyPlugin} from 'src/server/plugins/promisify.plugin';

export var StoryModel: Model<IStoryDocument>;

export function configureStoryModel(mongoose: Mongoose) {
  var storySchema = new Schema({
    title: String,
    description: String,
    project: {type: String, ref: 'Project'},
    sprint: {type: String, ref: 'Sprint'}
  });

  storySchema.plugin(timestampsPlugin);
  storySchema.plugin(promisifyPlugin);

  StoryModel = mongoose.model<IStoryDocument>('Story', storySchema); 
}