import {UserApi} from 'src/client/resources/UserApi';
import {StoryApi} from 'src/client/resources/StoryApi';
import {FetchUserAction} from "src/client/actions/users/FetchUserAction";
import {CreateStoryAction} from "src/client/actions/stories/CreateStoryAction";
import {FetchStoryAction} from "src/client/actions/stories/FetchStoryAction";
import {FetchAllStoriesAction} from "src/client/actions/stories/FetchAllStoriesAction";
import {UpdateStoryAction} from "src/client/actions/stories/UpdateStoryAction";
import {Store} from 'redux';

export function configureKernel(store: Store) {
  // Bind apis
  const userApi = new UserApi();
  const storyApi = new StoryApi();

  // Bind user actions
  const fetchUserAction = new FetchUserAction(store.getState, userApi);

  // Bind story actions
  const createStoryAction = new CreateStoryAction(store.getState, storyApi);

  return {
    store,

    // Bind apis used in our app
    apis: {userApi},
    
    // Bind actions used in our app
    actionCreators: {fetchUserAction}
  };
}
