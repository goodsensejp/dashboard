import IStoryResource from "./IStoryResource";
import Api from "../Api";
import {storySchema} from "../schemas";

export default class StoryApi extends Api implements IStoryResource {
  all() {
    return this.call("stories", storySchema);
  }
}