import {ProjectRepository} from 'src/server/models/project/ProjectRepository';
import {BaseController} from 'src/server/controllers/BaseController';
import {ValidationError, ModelNotFoundError} from 'src/server/errors';
import * as validator from "validator";

export class ProjectController extends BaseController {
  
  constructor(private projectRepository: ProjectRepository) {
    super();
  }

  fetch(req, res, next, id) {
    this.projectRepository.findById(id)
      .onFulfill((project) => {
        if(! project) {
          next(new ModelNotFoundError());
        }
        req.project = project;
        next();
      }).onReject(next);
  }

  index(req, res, next) {
    this.projectRepository.all()
      .onFulfill((projects) => {
        res.json(projects);
      }).onReject(next);
  }

  get(req, res, next) {
    return res.json(req.project);
  }

  create(req, res, next) {
    this.projectRepository.create(req.body)
      .onFulfill((project) => {
        res.json(project);
      }).onReject(next);
  }

  update(req, res, next) {
    this.projectRepository.update(req.project, req.body)
      .onFulfill((project) => {
        res.json(project);
      }).onReject(next);
  }

  replace(req, res, next) {
    this.projectRepository.replace(req.story, req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }
}