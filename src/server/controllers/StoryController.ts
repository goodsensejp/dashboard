import {StoryRepository} from 'src/server/models/story/StoryRepository';
import {BaseController} from 'src/server/controllers/BaseController';
import {ValidationError, ModelNotFoundError} from 'src/server/errors';
import * as validator from "validator";

export class StoryController extends BaseController {
  
  constructor(private storyRepository: StoryRepository) {
    super();
  }

  fetch(req, res, next, id) {
    this.storyRepository.findById(id)
      .onFulfill((story) => {
        if (!story) {
          next(new ModelNotFoundError(id));
        } else {
          req.story = story;
          next();
        }
      }).onReject(next);
  }

  index(req, res, next) {
    this.storyRepository.all()
      .onFulfill((stories) => {
        res.json(stories);
      }).onReject(next);
  }

  get(req, res, next) {
    return res.json(req.story);
  }

  create(req, res, next) {
    this.storyRepository.create(req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }

  update(req, res, next) {
    this.storyRepository.update(req.story, req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }

  replace(req, res, next) {
    this.storyRepository.replace(req.story, req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }

  remove(req, res, next) {
    this.storyRepository.remove(req.story)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }
}
