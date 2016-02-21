import {UserApi} from 'src/client/resources/users/UserApi';
import {FetchUserAction} from "src/client/actions/users/FetchUserAction";
import {Store} from 'redux';

export function configureKernel(store: Store) {
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
