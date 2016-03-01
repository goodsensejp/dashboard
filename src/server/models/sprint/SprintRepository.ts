import {ISprintDocument, ISprintAttributes} from 'src/server/models/sprint/sprint.d';
import {Promise} from 'mongoose';
import {SprintModel} from 'src/server/models/sprint/SprintModel';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';

export class SprintRepository {

  all() {
    return SprintModel.find({}).exec();
  }

  findById(id) {
    return SprintModel.findById(id).exec();
  }

  create({ from_date, to_date, project }) {
    var sprint = new SprintModel();

    sprint.from_date = from_date;
    sprint.to_date = to_date;
    sprint.project = MongooseUtils.id(project);

    return sprint.promiseToSave();
  }

  update(sprint: ISprintDocument, attributes) {
    if(attributes.from_date) {
      sprint.from_date = attributes.from_date;
    }

    if(attributes.to_date) {
      sprint.to_date = attributes.to_date;
    }

    return sprint.promiseToSave();
  }
}