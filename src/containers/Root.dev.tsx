import * as React from "react";
import {Provider} from "react-redux";
import DevTools from "./DevTools";
import {ReduxRouter} from "redux-router";

export default class Root extends React.Component<any, any> {
	render() {
		const { store } = this.props;

		return (
			<Provider store={store}>
				<div>
					<ReduxRouter />
					<DevTools />
				</div>
			</Provider>
		)
	}
}
