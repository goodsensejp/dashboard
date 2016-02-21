import UserApi from './resources/users/UserApi';
import FetchUserAction from "./actions/users/FetchUserAction";
import {Store} from 'redux';

export default function (store: Store) {
  // Bind apis
  const userApi = new UserApi();

  // Bind actions
  const fetchUserAction = new FetchUserAction(store.getState, userApi);

  return {
    store,

    // Bind apis used in our app
    apis: {userApi},
    
    // Bind actions used in our app
    actionCreators: {fetchUserAction}
  };
}
