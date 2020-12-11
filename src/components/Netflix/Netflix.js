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
    username: null,
    profileImage: null,
    isLoggedIn: false,
  };

  login = () => {
    this.setState({
      username: 'johndoe',
      profileImage: 'profileImage',
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      username: null,
      profileImage: null,
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <LogoutButton logout={this.logout} />
    ) : (
      <LoginButton login={this.login} />
    );

    /**
     * By now, we have touch on how to handle data within a component.
     * But how about sharing data between different components?
     *
     * Typically there's few ways to go about sharing data in React, the first being
     * 1. `Props Drilling`
     * This steps involve "lifting the state (data) up" to a common parent and
     * pass the data down to relevant components as `props`.
     *
     * 2. `Context API` introduce react version 16.8
     * This steps involving creating a context object to hold and data and provide
     * to component that requires it
     *
     * 3. State Management Library (Redux)
     * Creates a global state object that is accessible anywhere
     */
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
              {/* the spread syntax above is equivalent to the syntax below */}
              {/* <HomeView username={null} profileImage={null} isLoggedIn={false} /> */}
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
