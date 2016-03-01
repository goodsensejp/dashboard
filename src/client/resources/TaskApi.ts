import {Api} from "src/client/resources/Api";
import {Schema, arrayOf} from 'normalizr';

export const taskSchema = new Schema('tasks');

export class TaskApi extends Api {
  all() {
    return this.get('task')
      .map((res) => this.normalize(res, arrayOf(taskSchema)));
  }

  findById(id) {
    return this.get(`task/${id}`)
      .map((res) => this.normalize(res, taskSchema));
  }

  update(id, attributes) {
    return this.put(`task/${id}`, attributes)
      .map((res) => this.normalize(res, taskSchema));
  }

  create(attributes) {
    return this.post(`task`, attributes)
      .map((res) => this.normalize(res, taskSchema));
  }
}
