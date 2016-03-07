import {TaskRepository} from 'src/server/models/task/TaskRepository';
import {BaseController} from 'src/server/controllers/BaseController';
import {ValidationError, ModelNotFoundError} from 'src/server/errors';
import * as validator from "validator";

export class TaskController extends BaseController {
  
  constructor(private taskRepository: TaskRepository) {
    super();
  }

  fetch(req, res, next, id) {
    this.taskRepository.findById(id)
      .onFulfill((task) => {
        if(! task) {
          next(new ModelNotFoundError());
        }
        req.task = task;
        next();
      }).onReject(next);
  }

  index(req, res, next) {
    this.taskRepository.all()
      .onFulfill((tasks) => {
        res.json(tasks);
      }).onReject(next);
  }

  get(req, res, next) {
    return res.json(req.task);
  }

  create(req, res, next) {

    this.taskRepository.create(req.body)
      .onFulfill((task) => {
        res.json(task);
      }).onReject(next);
  }

  update(req, res, next) {
    this.taskRepository.update(req.task, req.body)
      .onFulfill((task) => {
        res.json(task);
      }).onReject(next);
  }

  replace(req, res, next) {
    this.taskRepository.replace(req.story, req.body)
      .onFulfill((story) => {
        res.json(story);
      }).onReject(next);
  }
}