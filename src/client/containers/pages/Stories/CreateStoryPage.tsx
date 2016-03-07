import * as React from "react";
import {Map} from 'immutable';
import {connect} from 'react-redux';
import {CircularProgress} from 'material-ui';
import {kernel} from 'src/client/index';
import {FullErrorDialog} from 'src/client/components/Main/FullErrorDialog';
import {StoryForm} from 'src/client/components/Story/StoryForm';
import {CreateStoryAction} from 'src/client/actions/stories/CreateStoryAction';
import {PushRouteAction} from 'src/client/actions/routes/PushRouteAction';

interface IProps extends React.Props<CreateStoryPage> {
  error: any;
  createdStory: Map<string, any>;
  isUpdating: boolean;
  createStoryAction: CreateStoryAction;
  pushRouteAction: PushRouteAction;
}

export class CreateStoryPage extends React.Component<IProps, any> {

  componentWilLReceiveProps(nextProps: IProps) {
    if(this.props.createdStory.get('id')) {
      this.props.pushRouteAction.run(`/stories/update/${this.props.createdStory.get('id')}`);
    }
  }

  saveStory(data) {
    this.props.createStoryAction.run('created', data);
  }

  /**
   * In this page dave should be able to create stories
   */
  render() {
    let result;
    if(this.props.error) {
      result = <FullErrorDialog error={this.props.error} />
    } else if(this.props.isUpdating) {
      result = <CircularProgress />;
    } else {
      result = (
        <StoryForm
          onSave={(data) => this.saveStory(data)} />
      );
    }
    return (
      <div style={{padding: "20px 0px"}}>
        {result}
      </div>
    )
  }
}

function mapStateToProps({stories, entities}) {
  let createdStory = stories.get('instances').get('created', Map());

  let story = entities.get('stories').get(createdStory.get('result'), Map());

  return {
    createdStory: story,
    isUpdating: createdStory.get('isUpdating'),
    error: createdStory.get('error')
  }
}

function mapDispatchToProps() {
  const {
    fetchStoryAction,
    pushRouteAction
  } = kernel.actionCreators;

  return {
    fetchStoryAction,
    pushRouteAction
  }
}

export const ConnectedCreateStoryPage = connect(mapStateToProps, mapDispatchToProps)(CreateStoryPage);