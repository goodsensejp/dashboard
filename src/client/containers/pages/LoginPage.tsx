import * as React from "react";
import {connect} from 'react-redux';

interface IProps {
}

export class LoginPage extends React.Component<IProps, any> {
	render() {
		return (
			<h1>Login page 2</h1>
		);
	}
}

export const ConnectedLoginPage = connect()(LoginPage);