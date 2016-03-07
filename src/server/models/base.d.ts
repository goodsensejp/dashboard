import {Document, Promise} from 'mongoose';

export interface BaseDocument<T> extends Document {
  promiseToSave(): Promise<T>;
  updateAttributes: (attrs: T) => void;
  replaceAttributes: (attrs: T) => void;
}