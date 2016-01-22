import * as React from "react";
import ReactGridLayout = require('react-grid-layout');
import {Paper} from 'material-ui';

interface IProps {
}

export default class StoriesPage extends React.Component<any, any> {

  private itemStyle = {
    textAlign: 'center',
    background: "#333",
    height: "100px",
    width: "200px",
    cursor: "pointer"
  }

  getStories() {
    return [
      { text: "Story one", order: 1 },
      { text: "Story two", order: 2 },
      { text: "Story three", order: 4 },
      { text: "Story four", order: 3 }
    ];
  }

  generateStoriesDOM() {
    const layout = this.generateStoriesLayout();

    return layout.map((item) => {
      return <div style={this.itemStyle} key={item.i}>New1 {item.story.text}</div>
    });
  }


  generateStoriesLayout() {
    return this.getStories().map((story, index) => {
      return {
        i: index,
        x: 0,
        y: story.order,
        w: 1,
        h: 1,
        story: story
      }
    })
  }

  render() {
    const layout = this.generateStoriesLayout();

    return (
      <div>
        <ReactGridLayout layout={layout} cols={1} rowHeight={120}>
          {this.generateStoriesDOM()}
        </ReactGridLayout>
      </div>
    );
  }
}