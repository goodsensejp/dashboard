import Kernel from './kernel';
import UserApi from './resources/users/UserApi';
import FetchUserAction from "./actions/users/FetchUserAction";

export default (store): Kernel => {
  var kernel = new Kernel();

  // Bind store
  kernel.bind("store", store);

  // Bind apis
  kernel.bind("userApi", new UserApi())

  // Bind actions
  kernel.bind("fetchUserAction", 
    new FetchUserAction(store.getState, kernel.get("userApi")));

  return kernel;
}