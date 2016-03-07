import * as React from "react";
import {connect} from 'react-redux';

interface IProps {
}

export class ProjectsPage extends React.Component<IProps, any> {
  render() {
    return (
      <h1>ProjectsPage</h1>
    );
  }
}

export const ConnectedProjectsPage = connect()(ProjectsPage);