import {SprintRepository} from 'src/server/models/sprint/SprintRepository';
import {BaseController} from 'src/server/controllers/BaseController';
import {ValidationError, ModelNotFoundError} from 'src/server/errors';
import * as validator from "validator";

export class SprintController extends BaseController {
  
  constructor(private sprintRepository: SprintRepository) {
    super();
  }

  fetch(req, res, next, id) {
    this.sprintRepository.findById(id)
      .onFulfill((sprint) => {
        if(! sprint) {
          next(new ModelNotFoundError());
        }
        req.sprint = sprint;
        next();
      }).onReject(next);
  }

  index(req, res, next) {
    this.sprintRepository.all()
      .onFulfill((sprints) => {
        res.json(sprints);
      }).onReject(next);
  }

  get(req, res, next) {
    return res.json(req.sprint);
  }

  create(req, res, next) {

    this.sprintRepository.create(req.body)
      .onFulfill((sprint) => {
        res.json(sprint);
      }).onReject(next);
  }

  update(req, res, next) {
    this.sprintRepository.update(req.sprint, req.body)
      .onFulfill((sprint) => {
        res.json(sprint);
      }).onReject(next);
  }

  replace(req, res, next) {
    this.sprintRepository.replace(req.story, req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }
}