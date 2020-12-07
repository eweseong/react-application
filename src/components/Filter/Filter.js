import React, { Component } from 'react';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  onChangeEventHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.filter(this.state.filter);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="filter" onChange={this.onChangeEventHandler} />{' '}
        &nbsp;
        <button type="submit">Filter</button>
      </form>
    );
  }
}
