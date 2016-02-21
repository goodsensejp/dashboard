import FetchUserAction from './users/FetchUserAction';
import {Observable} from 'rx';
import {kernel} from '../app';

export default () => {

  let observables = [];

  for(let key in kernel.actionCreators) {
    observables.push(kernel.actionCreators[key].getObservable());
  }

  Observable.merge(observables)
    .subscribe((action) => {
      kernel.store.dispatch(action);
    });
}