declare module ReduxImmutableJs {
  function combineReducers(...reducers: any[]): any;
}

declare module "redux-immutablejs" {
    export = ReduxImmutableJs;
}
