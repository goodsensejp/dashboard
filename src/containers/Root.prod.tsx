import * as React from "react";
import {Provider} from "react-redux";
import {ReduxRouter} from "redux-router";
import {Store} from "redux";

interface IProps {
	store: Store;
}

export default class Root extends React.Component<IProps, any> {
	render() {
		const { store } = this.props;

		return (
			<Provider store={store}>
				<div>
					<ReduxRouter />
				</div>
			</Provider>
		)
	}
}
