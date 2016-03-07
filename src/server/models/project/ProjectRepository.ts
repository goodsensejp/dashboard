import {Promise} from 'mongoose';
import {ProjectModel, IProjectDocument} from 'src/server/models/project/ProjectModel';

export class ProjectRepository {

  all() {
    return ProjectModel.find({}).exec();
  }

  findById(id) {
    return ProjectModel.findById(id).exec();
  }

  create(attributes) {
    var project = new ProjectModel();
    project.replaceAttributes(attributes);
    return project.promiseToSave();
  }

  update(project: IProjectDocument, attributes) {
    project.updateAttributes(attributes);
    return project.promiseToSave();
  }

  replace(project: IProjectDocument, attributes) {
    project.replaceAttributes(attributes);
    return project.promiseToSave();
  }
}