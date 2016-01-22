var redux_immutablejs_1 = require('redux-immutablejs');
var ActionTypes_1 = require("../constants/ActionTypes");
var immutable_1 = require('immutable');
var initialState = immutable_1.Map({
    isFetching: false,
    invalidate: false,
    item: null
});
function me(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes_1.USER_ACTIONS.LOAD_ME_REQUEST:
            return state.merge({
                isFetching: true,
                invalidate: false,
                item: null
            });
        case ActionTypes_1.USER_ACTIONS.LOAD_ME_SUCCESS:
            return state.merge({
                isFetching: false,
                invalidate: false,
                item: immutable_1.fromJS(action.user)
            });
        default:
            return state;
    }
}
exports.me = me;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_immutablejs_1.combineReducers({
    me: me
});
