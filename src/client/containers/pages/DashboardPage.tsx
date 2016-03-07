import * as React from "react";
import {List, ListItem, Avatar, IconButton, Divider} from 'material-ui';
import {connect} from 'react-redux';

interface IProps {
}

export class DashboardPage extends React.Component<IProps, any> {
  render() {
    return (
      <div>
        <List subheader="Online users">
        <ListItem
          primaryText="Kareem Mohamed"
          leftAvatar={<Avatar src="images/ok-128.jpg" />} />
        <ListItem
          primaryText="Eric Hoffman"
          leftAvatar={<Avatar src="images/kolage-128.jpg" />} />
        <ListItem
          primaryText="Grace Ng"
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />} />
        <ListItem
          primaryText="Kerem Suer"
          leftAvatar={<Avatar src="images/kerem-128.jpg" />} />
        <ListItem
          primaryText="Raquel Parrado"
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />} />
      </List>
      <Divider />
      <List subheader="Offline users">
        <ListItem
          primaryText="Chelsea Otakan"
          leftAvatar={<Avatar src="images/chexee-128.jpg" />} />
        <ListItem
          primaryText="James Anderson"
          leftAvatar={<Avatar src="images/jsa-128.jpg" />} />
      </List>
      </div>
    );
  }
}

export const ConnectedDashboardPage = connect()(DashboardPage);