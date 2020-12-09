import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../../assets/netflix-logo.svg';
import HomeView from '../../routes/Home/Home';
import MyListView from '../../routes/MyList/MyList';
import ShowDetailView from '../../routes/ShowDetail/ShowDetail';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
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
    user: null,
    isLoggedIn: false,
  };

  login = () => {
    this.setState({
      username: 'johndoe',
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      username: null,
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <LogoutButton logout={this.logout} />
    ) : (
      <LoginButton login={this.login} />
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
          <Switch>
            <Route path="/" exact>
              <HomeView {...this.state} />
            </Route>
            <Route path="/myList" exact>
              <MyListView {...this.state} />
            </Route>
            <Route path="/shows/:id/:name?" exact>
              <ShowDetailView {...this.state} />
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}
