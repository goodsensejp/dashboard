var ActionTypes_1 = require("../constants/ActionTypes");
function loadMeRequest() {
    return {
        type: ActionTypes_1.USER_ACTIONS.LOAD_ME_REQUEST
    };
}
exports.loadMeRequest = loadMeRequest;
function loadMeSuccess(user) {
    return {
        type: ActionTypes_1.USER_ACTIONS.LOAD_ME_SUCCESS,
        user: user
    };
}
exports.loadMeSuccess = loadMeSuccess;
function fetchMe() {
    return function (dispatch, getState) {
        dispatch(loadMeRequest());
        setTimeout(function () {
            dispatch(loadMeSuccess({
                id: 1,
                username: "kareem3d",
                email: "kareem3d.a@gmail.com"
            }));
        }, 2000);
    };
}
exports.fetchMe = fetchMe;
