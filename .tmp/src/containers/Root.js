var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var DevTools_1 = require("./DevTools");
var helpers_1 = require("../helpers");
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        _super.apply(this, arguments);
    }
    Root.prototype.render = function () {
        var _a = this.props, store = _a.store, routes = _a.routes;
        return (React.createElement(react_redux_1.Provider, {"store": store}, React.createElement("div", null, routes, helpers_1.isDevEnv() && React.createElement(DevTools_1.default, null))));
    };
    return Root;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
