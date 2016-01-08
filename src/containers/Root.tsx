import RootProd from './Root.prod';
import RootDev from './Root.dev';
import * as React from "react";
import {Store} from "redux";

interface IProps {
	store: Store;
	env: string;
}

export default class Root extends React.Component<IProps, any> {
	render() {
		if(this.props.env === 'production') {
			return <RootProd store={this.props.store} />
		} else {
			return <RootDev store={this.props.store} />
		}
	}
}