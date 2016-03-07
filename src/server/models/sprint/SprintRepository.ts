import {Promise} from 'mongoose';
import {SprintModel, ISprintDocument} from 'src/server/models/sprint/SprintModel';
import {MongooseUtils} from 'src/server/utils/MongooseUtils';

export class SprintRepository {

  all() {
    return SprintModel.find({}).exec();
  }

  findById(id) {
    return SprintModel.findById(id).exec();
  }

  create(attributes) {
    var sprint = new SprintModel();
    sprint.replaceAttributes(attributes);
    return sprint.promiseToSave();
  }

  update(sprint: ISprintDocument, attributes) {
    sprint.updateAttributes(attributes);
    return sprint.promiseToSave();
  }

  replace(sprint: ISprintDocument, attributes) {
    sprint.replaceAttributes(attributes);
    return sprint.promiseToSave();
  }
}