import * as React from "react";
import {kernel} from 'src/client/index';
import {connect} from 'react-redux';
import {FetchStoryAction} from 'src/client/actions/stories/FetchStoryAction';
import {CreateStoryAction} from 'src/client/actions/stories/CreateStoryAction';
import {UpdateStoryAction} from 'src/client/actions/stories/UpdateStoryAction';
import {Map} from 'immutable';

interface IProps {
  storyId: Number;
  story: Map<any, any>;
  storiesEntities: Map<any, any>;
  fetchStoryAction: FetchStoryAction;
  updateStoryAction: UpdateStoryAction;
  createStoryAction: CreateStoryAction;
}

export class StoriesPage extends React.Component<IProps, any> {

  public constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.storyId) {
      this.props.fetchStoryAction.run(this.props.storyId);
    }
  }

  public saveStory(story) {
    if(story.get('id')) {
      this.props.updateStoryAction.run(story.get('id'), story);
    } else {
      this.props.createStoryAction.run(story);
    }
  }

  public getStoryFromId(id) {
    return this.props.storiesEntities.get(id);
  }

  /**
   * In this page dave should be able to create stories
   */
  render() {
    if(this.props.story.get('isFetching')) {
      return <Loading />
    } else {
      const story = this.getStoryFromId(this.props.story.get('id'));
      return <StoriesForm onSave={this.saveStory} story={story} />
    }
  }
}

function mapStateToProps(state) {
  const {id} = state.router.params;
  const story = state.stories.get('story');
  const storiesEntities = state.entities.get('stories');

  return {
    storyId: id,
    story
  }
}

function mapDispatchToProps() {

  const {
    fetchStoryAction,
    createStoryAction,
    updateStoryAction
  } = kernel.actionCreators;

  return {
    fetchStoryAction,
    createStoryAction,
    updateStoryAction
  }
}

export default connect(mapStateToProps, mapDispatchToProps);