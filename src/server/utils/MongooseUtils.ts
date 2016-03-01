import {Document} from 'mongoose';

export class MongooseUtils {
  static id(documentOrId) {
    if(typeof documentOrId === 'object') {
      return documentOrId._id;
    }

    return documentOrId;
  }
}