var React = require("react");
var ReactDOM = require("react-dom");
var Root_1 = require("./containers/Root");
var routes_1 = require("./routes");
var configureStore_1 = require("./store/configureStore");
var _a = configureStore_1.default(), store = _a.store, history = _a.history;
var routes = routes_1.default(history);
ReactDOM.render(React.createElement(Root_1.default, {"store": store, "routes": routes}), document.getElementById("root"));
