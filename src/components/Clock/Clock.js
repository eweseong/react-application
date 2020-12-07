import React, { Component } from 'react';

// class component - smart component
// functional component - dumb component
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      datetime: new Date(),
    };
  }

  // ONLY RUN ONCE when component is attached to browser
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        datetime: new Date(),
      });
      console.log(this.state.datetime);
    }, 1000);
  }

  // RUN EVERYTIME props, state and forceUpdate() is trigger
  componentDidUpdate() {}

  // ONLY RUN ONCE when component is removed from browser
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>{this.state.datetime.toLocaleTimeString()}</div>;
  }
}
