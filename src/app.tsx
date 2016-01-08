import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./containers/Root";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
	<Root store={store} env={ENV} />,
	document.getElementById("root")
)