import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./containers/Root";
import configureRoutes from "./routes";
import configureStore from "./store/configureStore";
import configureKernel from "./kernel.config";
import registerActions from "./actions/register";
import "./material.init";

const {store, history} = configureStore();
const routes = configureRoutes(history);
export const kernel = configureKernel(store);

registerActions(kernel);

ReactDOM.render(
  <Root store={store} routes={routes} />,
  document.getElementById("root")
)
