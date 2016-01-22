// I'm using combineReducers from redux and not redux-immutable because 
// routing middleware will not understand that
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {createHistory} from 'history'
import DevTools from '../containers/DevTools'
import { syncHistory, routeReducer } from 'redux-simple-router'
import reducers from '../reducers'
import { isDevEnv } from '../utils/helpers';
import { Map } from 'immutable';
// Middlewares
import * as thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'

export default function configureStore(initialState = {}) {

  const history = createHistory();

  const syncHistoryMiddleware = syncHistory(history);

  const middlewares = [thunkMiddleware, syncHistoryMiddleware];

  if (isDevEnv()) {
    // middlewares.push(createLogger);
  }

  const finalCreateStore = compose(
    applyMiddleware(...<any>middlewares),
    DevTools.instrument()
  )(createStore)

  reducers['routing'] = routeReducer;

  const rootReducer = combineReducers(reducers);

  const store = finalCreateStore(rootReducer, initialState);

  syncHistoryMiddleware.listenForReplays(store);

  if (isDevEnv() && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      console.log("new reducers");
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return { store, history }
}
