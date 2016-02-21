import * as React from "react";
import {Map} from "immutable";

interface IProps extends React.Props<LoginForm> {
  fetchMe: any;
  me: Map<any, any>;
  users: Map<any, any>;
}

export class LoginForm extends React.Component<IProps, any> {


  private renderLoading() {
    return <div>Loading</div>;
  }

  private renderWelcome(me) {
    return <div>Welcome {me.get('login') }</div>;
  }

  private renderLogin() {
    return (
      <div>
        <div>Not logged in</div>
        <button onClick={this.props.fetchMe}>Click here to login</button>
      </div>
    );
  }

  render() {
    const { users, me } = this.props;

    if(me.get('isFetching')) {
      return this.renderLoading();
    }

    if(!me.get('id')) {
      return this.renderLogin();
    }

    return this.renderWelcome(users.get(me.get('id')));
  }
}