import * as React from "react";

interface IProps extends React.Props<App> {
}

export default class App extends React.Component<IProps, any> {
	render() {
		const {children} = this.props;
		return (
			<div>
				<h1>Hello world</h1>
				<hr />
				{children}
			</div>
		);
	}
}