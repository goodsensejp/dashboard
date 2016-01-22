var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginForm_1 = require("../components/User/LoginForm");
var react_redux_1 = require("react-redux");
var user_1 = require("../actions/user");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", null, React.createElement("h1", null, "Hello aworld kareem"), React.createElement(LoginForm_1.default, {"me": this.props.me, "fetchMe": this.props.fetchMe}), React.createElement("hr", null), children));
    };
    return App;
})(React.Component);
function mapStateToProps(state) {
    return {
        me: state.user.get('me')
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, { fetchMe: user_1.fetchMe })(App);
