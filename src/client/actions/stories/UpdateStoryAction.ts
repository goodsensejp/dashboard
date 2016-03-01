import {ActionCreator} from "src/client/actions/ActionCreator";
import {STORY_ACTIONS} from "src/client/constants/ActionTypes";
import {StoryApi} from "src/client/resources/StoryApi";

export class UpdateStoryAction extends ActionCreator {

  constructor(getState, public storyApi: StoryApi) {
    super(getState);
  }

  run(id, attributes) {
    if(this.state.stories.get('editStory').get('isUpdating')) {
      return;
    }

    this.request(id);

    this.storyApi.update(id, attributes)
      .subscribe((res) => {
        this.saveEntity(res.entities);
        this.success(res.result);
      }, (error) => this.failure(error));
  }

  private request(id) {
    this.onNext({
      type: STORY_ACTIONS.UPDATE,
      status: "request",
      id
    });
  }

  private success(id) {
    this.onNext({
      type: STORY_ACTIONS.UPDATE,
      status: "success",
      id
    });
  }

  private failure(error) {
    this.onNext({
      type: STORY_ACTIONS.UPDATE,
      status: "failure",
      error: error.message || "Failed to load story!" 
    });
  }
}