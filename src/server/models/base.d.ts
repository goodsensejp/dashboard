import {Document, Promise} from 'mongoose';

export interface BaseAttributes {
  created_at: Date;
  updated_at: Date;
}
export interface BaseDocument<T> extends Document {
  promiseToSave(): Promise<T>;
}