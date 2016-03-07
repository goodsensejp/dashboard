import {usersReducer} from 'src/client/reducers/users';
import {storiesReducer} from 'src/client/reducers/stories';
import {entitiesReducer} from 'src/client/reducers/entities';

export const reducers = {
  users: usersReducer,
  entities: entitiesReducer,
  stories: storiesReducer
}