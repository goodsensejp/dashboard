var redux_1 = require('redux');
var history_1 = require('history');
var DevTools_1 = require('../containers/DevTools');
var redux_simple_router_1 = require('redux-simple-router');
var reducers_1 = require('../reducers');
var helpers_1 = require('../helpers');
var thunkMiddleware = require('redux-thunk');
function configureStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var history = history_1.createHistory();
    var syncHistoryMiddleware = redux_simple_router_1.syncHistory(history);
    var middlewares = [thunkMiddleware, syncHistoryMiddleware];
    if (helpers_1.isDevEnv()) {
    }
    var finalCreateStore = redux_1.compose(redux_1.applyMiddleware.apply(void 0, (middlewares)), DevTools_1.default.instrument())(redux_1.createStore);
    reducers_1.default['routing'] = redux_simple_router_1.routeReducer;
    var rootReducer = redux_1.combineReducers(reducers_1.default);
    var store = finalCreateStore(rootReducer, initialState);
    syncHistoryMiddleware.listenForReplays(store);
    if (helpers_1.isDevEnv() && module.hot) {
        module.hot.accept('../reducers', function () {
            console.log("new reducers");
            var nextRootReducer = rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }
    return { store: store, history: history };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
