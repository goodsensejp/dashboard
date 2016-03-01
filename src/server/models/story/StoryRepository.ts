import {IStoryDocument, IStoryAttributes} from 'src/server/models/story/story.d';
import {Promise} from 'mongoose';
import {StoryModel} from 'src/server/models/story/StoryModel';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';

export class StoryRepository {

  all() {
    return StoryModel.find({}).exec();
  }

  findById(id) {
    return StoryModel.findById(id).exec();
  }

  create({ title, description, project, sprint }) {
    var story = new StoryModel();

    story.title = title;
    story.description = description;
    story.project = MongooseUtils.id(project);
    story.sprint = MongooseUtils.id(sprint);

    return story.promiseToSave();
  }

  update(story: IStoryDocument, attributes) {
    if(attributes.title) {
      story.title = attributes.title;
    }

    if(attributes.description) {
      story.description = attributes.description;
    }

    return story.promiseToSave();
  }
}