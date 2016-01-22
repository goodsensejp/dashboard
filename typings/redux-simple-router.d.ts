declare module ReduxSimpleRouter {
  function syncReduxAndRouter(history: any, state: any): any;
  function routeReducer(state: any, action: any): any;
  function syncHistory(history: any): any;
  const routeActions: {
    push: (path: string) => Object
  }
}

declare module "redux-simple-router" {
	export = ReduxSimpleRouter;
}
