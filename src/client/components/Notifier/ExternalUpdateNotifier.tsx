import * as React from "react";
import {Dialog, FlatButton, RaisedButton} from 'material-ui';

interface IProps {
	ignoreExternalUpdate?: Function;
	pullExternalUpdate: Function;
	open: boolean;
}

export class ExternalUpdateNotifier extends React.Component<IProps, any> {

	constructor(props: IProps) {
		super(props);
		this.setInitialState();
	}

	setInitialState() {
		this.state = {open: false};
	}

  ignoreExternalUpdate() {
    this.state.open = false;
    if(this.props.ignoreExternalUpdate) {
	    this.props.ignoreExternalUpdate();
    }
  }

  pullExternalUpdate() {
    this.state.open = false;
    this.props.pullExternalUpdate();
  }

  render() {
    const actions = [
      <FlatButton
        label="Ignore new data"
        secondary={true}
        onTouchTap={this.ignoreExternalUpdate} />,
      <FlatButton
        label="Update with new data"
        primary={true}
        onTouchTap={this.pullExternalUpdate} />,
    ];

    return (
      <Dialog
        title="External update"
        actions={actions}
        modal={false}
        open={this.state.open}>
        This story has been modified by another user
      </Dialog>
    );
  }
}