var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
    }
    LoginForm.prototype.render = function () {
        return (React.createElement("div", null, !!this.props.me.get('item') &&
            React.createElement("div", null, "Welcome ", this.props.me.get('item').get('username')), !!this.props.me.get('isFetching') &&
            React.createElement("div", null, "Loading"), !this.props.me.get('item') && !this.props.me.get('isFetching') &&
            React.createElement("div", null, "Not logged in") &&
            React.createElement("button", {"onClick": this.props.fetchMe}, "Click here to login")));
    };
    return LoginForm;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
