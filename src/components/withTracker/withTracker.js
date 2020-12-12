import React, { Component } from 'react';

// higher order component bare scaffolding
const EnhancedComponent = (OriginalComponent) => {
  return class NewComponent extends Component {
    state = {
      counter: 0,
    };

    // common functionality shared between components
    onTracked = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
      console.log(`${OriginalComponent.name} (${this.state.counter})`);
    };

    render() {
      // props drilling so that OriginalComponent received all props intended
      return <OriginalComponent track={this.onTracked} {...this.props} />;
    }
  };
};

export default EnhancedComponent;
