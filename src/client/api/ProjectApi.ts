import {Api} from "src/client/api/Api";
import {Schema, arrayOf} from 'normalizr';

export const projectSchema = new Schema('projects');

export class ProjectApi extends Api {
  all() {
    return this.get('project')
      .map((res) => this.normalize(res, arrayOf(projectSchema)));
  }

  findById(id) {
    return this.get(`project/${id}`)
      .map((res) => this.normalize(res, projectSchema));
  }

  replace(id, attributes) {
    return this.put(`project/${id}`, attributes)
      .map((res) => this.normalize(res, projectSchema));
  }

  update(id, attributes) {
    return this.patch(`project/${id}`, attributes)
      .map((res) => this.normalize(res, projectSchema));
  }

  create(attributes) {
    return this.post(`project`, attributes)
      .map((res) => this.normalize(res, projectSchema));
  }
}
