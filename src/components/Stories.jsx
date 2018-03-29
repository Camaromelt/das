import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as type from '../actions/actions.js';
import Story from './Story.jsx';
import StoryForm from './StoryForm.js';

const mapStateToProps = store => ({
  storyList: store.stories.storyList,
});

const mapDispatchToProps = dispatch => ({
  addStory: story => {
    dispatch(type.addStory(story));
  },
  deleteStory: id => {
    dispatch(type.deleteStory(id));
  }
});

class Stories extends Component {
  render() {
    let stories = [];
    this.props.storyList.forEach((item, i) => {
      stories.push(<Story story={item} key={i} />)
    })
    return (
      <div>
       {stories}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stories);

