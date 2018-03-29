import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Content from '../components/Content';
import * as type from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.stories.user,
});

const mapDispatchToProps = dispatch => ({
  addStory: story => {
    dispatch(type.addStory(story));
  }
});

class MainContainer extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Header user={this.props.user} />
            <Content items={this.props.storyList} addStory={this.props.addStory} />
        </div>
      </BrowserRouter>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
