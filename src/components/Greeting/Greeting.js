import React, { Component } from 'react';
import withTracker from '../withTracker/withTracker';

class Greeting extends Component {
  render() {
    const { username = '', track } = this.props;
    return <p onMouseOver={track}>Welcome {username}!</p>;
  }
}

export default withTracker(Greeting);
