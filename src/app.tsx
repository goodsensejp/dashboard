import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./containers/Root";
import {createStore} from "redux";

const store = createStore((state, action) => state);

ReactDOM.render(
	<Root store={store} env={ENV} />,
	document.getElementById("root")
)