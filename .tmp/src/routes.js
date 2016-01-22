var React = require('react');
var react_router_1 = require('react-router');
var App_1 = require('./containers/App');
var LoginPage_1 = require('./containers/pages/LoginPage');
var RegisterPage_1 = require('./containers/pages/RegisterPage');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (history) { return (React.createElement(react_router_1.Router, {"history": history}, React.createElement(react_router_1.Route, {"path": "/", "component": App_1.default}, React.createElement(react_router_1.Route, {"path": "/register", "component": RegisterPage_1.default}), React.createElement(react_router_1.Route, {"path": "/login", "component": LoginPage_1.default})))); };
