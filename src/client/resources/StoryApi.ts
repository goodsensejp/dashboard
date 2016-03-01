import {Api} from "src/client/resources/Api";
import {Schema, arrayOf} from 'normalizr';

export const storySchema = new Schema('stories');

export class StoryApi extends Api {
  all() {
    return this.get('story')
      .map((res) => this.normalize(res, arrayOf(storySchema)));
  }

  findById(id) {
    return this.get(`story/${id}`)
      .map((res) => this.normalize(res, storySchema));
  }

  update(id, attributes) {
    return this.put(`story/${id}`, attributes)
      .map((res) => this.normalize(res, storySchema));
  }

  create(attributes) {
    return this.post(`story`, attributes)
      .map((res) => this.normalize(res, storySchema));
  }
}
