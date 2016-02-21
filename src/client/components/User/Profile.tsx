import * as React from "react";
import {Map} from "immutable";

interface IProps extends React.Props<Profile> {
  profileUser: Map<any, any>;
  users: Map<any, any>;
  me: Map<any, any>
}

export class Profile extends React.Component<IProps, any> {

  renderUserProfile(profileUser, me) {
    return <div>Welcome {profileUser.get('login')} from {me.get('login')}</div>
  }

  render() {
    const {users, profileUser, me} = this.props;

    if(profileUser.get('isFetching') || me.get('isFetching')) {
      return <div>Loading please wait</div>;
    }

    let profileUserData = users.get(profileUser.get('id'));
    let meData          = users.get(me.get('id'));

    return this.renderUserProfile(profileUser, me);
  }
}