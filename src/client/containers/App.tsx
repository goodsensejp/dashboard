import * as React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { routeActions } from 'redux-simple-router'
import {LoginForm} from "src/client/components/User/LoginForm";
import {FetchUserAction} from "src/client/actions/users/FetchUserAction";
import {kernel} from "src/client/index";
import {AppBar, LeftNav, MenuItem, IconButton, Icons} from 'material-ui';

interface IState {
	openLeftNav: boolean;
}

export class App extends React.Component<any, IState> {

	componentWillMount() {
		this.setInitialState();
	}

	setInitialState() {
		this.setState({
			openLeftNav: false
		});
	}

	toggleLeftNav() {
		this.setState({openLeftNav: !this.state.openLeftNav})	
	}

	render() {
		const {children} = this.props;

		return (
			<div>
			  <AppBar
			    title="Goodsense Dashboard"
			    onLeftIconButtonTouchTap={this.toggleLeftNav.bind(this)} />
        <LeftNav 
        		open={this.state.openLeftNav} 
        		docked={false}
				    onRequestChange={(openLeftNav) => this.setState({ openLeftNav })}>
				  <AppBar
				    title="Menu"
				    iconElementLeft={<IconButton onClick={this.toggleLeftNav.bind(this)}><Icons.NavigationChevronLeft /></IconButton>} />
          <MenuItem>Stories</MenuItem>
          <MenuItem>Tasks</MenuItem>
          <MenuItem>Sprints</MenuItem>
          <MenuItem>Board</MenuItem>
        </LeftNav>
				{children}
			</div>
		);
	}
}