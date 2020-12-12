import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withTracker from '../withTracker/withTracker';
import './NavItem.css';

class NavItem extends Component {
  render() {
    const { path, children, track } = this.props;
    return (
      <NavLink
        activeClassName="nav-item--active"
        className="nav-item"
        to={path}
        onClick={track}
        exact
      >
        {children}
      </NavLink>
    );
  }
}

export default withTracker(NavItem);
