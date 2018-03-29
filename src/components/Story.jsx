import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
    <div className="storyBoard">
        <div 
          className={(this.props.story.open) ? 'open story' : 'closed story'}
          id={this.props.story.id}>
          <div className="title">{this.props.story.title}</div>
          <div className="seats">{this.props.story.seats}</div>
          <div className="duration">{this.props.story.duration}</div>
          <div className="createdAt">{new Date(this.props.story.createdAt).toUTCString()}</div>
        </div>
    </div>
    );
  }
};

export default Story;

