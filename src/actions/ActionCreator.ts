import {Store} from 'redux';
import {Subject} from 'rx';

abstract class ActionCreator {

  protected observable: Subject<Object>;

  constructor(private getState) {
    this.observable = new Subject();
  }

  getObservable() {
    return this.observable;
  }

  protected onNext(action) {
    this.observable.onNext(action);
  }

  get state() { return this.getState() }

  abstract run(params): any;
}

export default ActionCreator;