import {IconButton as MaterialIconButton} from "material-ui";
import * as React from "react";

export default class IconButton extends React.Component<any, any> {
  render() {
    return (
      <MaterialIconButton iconClassName="material-icons">{this.props.iconName}</MaterialIconButton>
    );
  }
}