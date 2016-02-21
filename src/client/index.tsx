import * as React from "react";
import * as ReactDOM from "react-dom";
import {Root} from "src/client/containers/Root";
import {configureRoutes} from "src/client/routes";
import {configureStore} from "src/client/store/configureStore";
import {registerActionCreators} from "src/client/actions/register";
import {configureKernel} from "src/client/kernel.config";
import "src/client/material.init";

const {store, history} = configureStore();
const routes = configureRoutes(history);

export const kernel = configureKernel(store);

registerActionCreators();

ReactDOM.render(
  <Root store={store} routes={routes} />,
  document.getElementById("root")
)
