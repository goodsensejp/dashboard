import {IProjectDocument, IProjectAttributes} from 'src/server/models/project/project.d';
import {Promise} from 'mongoose';
import {ProjectModel} from 'src/server/models/project/ProjectModel';

export class ProjectRepository {

  all() {
    return ProjectModel.find({}).exec();
  }

  findById(id) {
    return ProjectModel.findById(id).exec();
  }

  create({ title, description }) {
    var project = new ProjectModel();

    project.title = title;
    project.description = description;

    return project.promiseToSave();
  }

  update(project: IProjectDocument, attributes) {
    if(attributes.title) {
      project.title = attributes.title;
    }

    if(attributes.description) {
      project.description = attributes.description;
    }

    return project.promiseToSave();
  }
}