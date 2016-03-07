import {Api} from "src/client/api/Api";
import {Schema, arrayOf} from 'normalizr';

export const sprintSchema = new Schema('sprints');

export class SprintApi extends Api {
  all() {
    return this.get('sprint')
      .map((res) => this.normalize(res, arrayOf(sprintSchema)));
  }

  findById(id) {
    return this.get(`sprint/${id}`)
      .map((res) => this.normalize(res, sprintSchema));
  }

  replace(id, attributes) {
    return this.put(`sprint/${id}`, attributes)
      .map((res) => this.normalize(res, sprintSchema));
  }

  update(id, attributes) {
    return this.patch(`sprint/${id}`, attributes)
      .map((res) => this.normalize(res, sprintSchema));
  }

  create(attributes) {
    return this.post(`sprint`, attributes)
      .map((res) => this.normalize(res, sprintSchema));
  }
}
