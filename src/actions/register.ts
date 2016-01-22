import FetchUserAction from './users/FetchUserAction';
import {Observable} from 'rx';

export default (kernel) => {

  Observable.merge([
    kernel.get("fetchUserAction").getObservable()
  ])
  .subscribe((action) => {
    kernel.get("store").dispatch(action);
  });
}