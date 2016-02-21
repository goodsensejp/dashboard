import {Api} from "src/client/resources/Api";
import {storySchema} from "src/client/resources/schemas";

export default class StoryApi extends Api {
  all() {
    return this.call("stories", storySchema);
  }
}