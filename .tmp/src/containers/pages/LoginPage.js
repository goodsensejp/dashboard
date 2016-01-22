var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        _super.apply(this, arguments);
    }
    LoginPage.prototype.render = function () {
        return (React.createElement("h1", null, "Login page"));
    };
    return LoginPage;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
