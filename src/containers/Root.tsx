import * as React from "react";
import {Provider} from "react-redux";
import DevTools from "./DevTools";
import { isDevEnv } from "../utils/helpers";
import App from "./App";

interface IProps {
  store: any;
  routes: any;
}

export default class Root extends React.Component<IProps, any> {
	render() {
		const { store, routes } = this.props;

		return (
      <Provider store={store}>
        <div>
          {routes}
          {isDevEnv() && <DevTools />}
        </div>
      </Provider>
		)
	}
}
