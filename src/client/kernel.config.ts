import {UserApi} from 'src/client/api/UserApi';
import {StoryApi} from 'src/client/api/StoryApi';
import {PushRouteAction} from "src/client/actions/routes/PushRouteAction";
import {ReplaceRouteAction} from "src/client/actions/routes/ReplaceRouteAction";
import {FetchUserAction} from "src/client/actions/users/FetchUserAction";
import {CreateStoryAction} from "src/client/actions/stories/CreateStoryAction";
import {FetchStoryAction} from "src/client/actions/stories/FetchStoryAction";
import {FetchStoriesAction} from "src/client/actions/stories/FetchStoriesAction";
import {ReplaceStoryAction} from "src/client/actions/stories/ReplaceStoryAction";
import {UpdateStoryAction} from "src/client/actions/stories/UpdateStoryAction";
import {RemoveStoryAction} from "src/client/actions/stories/RemoveStoryAction";
import {Store} from 'redux';

export function configureKernel(store: Store) {
  // Bind apis
  const userApi = new UserApi();
  const storyApi = new StoryApi();

  // Bind user actions
  const fetchUserAction = new FetchUserAction(store.getState, userApi);

  // Bind routes actions
  const pushRouteAction = new PushRouteAction(store.getState);
  const replaceRouteAction = new ReplaceRouteAction(store.getState);

  // Bind story actions
  const fetchStoryAction = new FetchStoryAction(store.getState, storyApi);
  const createStoryAction = new CreateStoryAction(store.getState, storyApi);
  const updateStoryAction = new UpdateStoryAction(store.getState, storyApi);
  const replaceStoryAction = new ReplaceStoryAction(store.getState, storyApi);
  const fetchStoriesAction = new FetchStoriesAction(store.getState, storyApi);
  const removeStoryAction = new RemoveStoryAction(store.getState, storyApi);

  return {
    store,

    // Bind apis used in our app
    apis: {userApi},
    
    // Bind actions used in our app
    actionCreators: {
      replaceRouteAction, pushRouteAction,
      fetchStoryAction, createStoryAction, updateStoryAction,
      replaceStoryAction, fetchStoriesAction, removeStoryAction
    }
  };
}
