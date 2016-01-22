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

  onNext(action) {
    action.type = this.getType();

    this.observable.onNext(action);
  }

  get state() { return this.getState() }

  abstract getType(): string;
  abstract run(params): any;
}

export default ActionCreator;