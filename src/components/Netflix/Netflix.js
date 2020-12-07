import React, { Component } from 'react';
import logo from '../../assets/netflix-logo.svg';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import Greeting from '../Greeting/Greeting';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import NavItem from '../NavItem/NavItem';
import './Netflix.css';

/**
 * Components let you split the UI into independent, reusable pieces, and think
 * about each piece in isolation. Conceptually, components are like JavaScript
 * functions. They accept arbitrary inputs (called “props”) and return React elements
 * describing what should appear on the screen.
 *
 * React required that all component name be start with a capital letter.
 */

// 01 - Class Components
// 03 - Composing component (Composition - has-a relationship)
export default class Netflix extends Component {
  state = {
    username: null,
    filter: '',
  };

  login = () => {
    this.setState({
      username: 'John',
    });
  };

  logout = () => {
    this.setState({
      username: null,
    });
  };

  filter = (value) => {
    console.log(value);
    this.setState({
      filter: value,
    });
  };

  filterByName = ({ name = '' }) => {
    return name.toLowerCase().includes(this.state.filter.toLowerCase());
  };

  render() {
    const button =
      this.state.username === null ? (
        <LoginButton login={this.login} />
      ) : (
        <LogoutButton logout={this.logout} />
      );

    return (
      <>
        <AppBar>
          <AppLogo logo={logo} />
          <NavItem path="/">Home</NavItem>
          <NavItem path="/myList">My List</NavItem>
          <div className="grow" />
          {button}
        </AppBar>
        <main>
          <Greeting username={this.state.username} />
        </main>
      </>
    );
  }
}
