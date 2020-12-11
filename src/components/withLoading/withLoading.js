import React, { Component } from 'react';
import './withLoading.css';

/**
 * High Order Component (HOC)
 *
 * HOC is a function that takes a component and returns a new component
 * with added functionality. In this particular HOC, we are adding the
 * capability of showing a loading indicator for any components that is
 * passed in.
 */
const EnhancedComponent = (OriginalComponent) => {
  return class NewComponent extends Component {
    state = {
      isLoading: true,
      data: [],
    };

    /**
     * Generally when making an asynchrounous process or fetching data
     * from APIs, it is done in this lifecycle method. As this ensures
     * that the component has been rendered with the bare minimum static
     * elements or loading indicator in the browser to provide some kind
     * of feedback to the user, so that user isn't staring at a blank screen.
     */
    componentDidMount() {
      this.props.load().then((data) => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            data,
          });
        }, 2000);
      });
    }

    render() {
      return this.state.isLoading ? (
        <div className="loading"></div>
      ) : (
        <OriginalComponent
          posters={this.state.data}
          {...this.props.otherProps}
        />
      );
    }
  };
};

export default EnhancedComponent;
