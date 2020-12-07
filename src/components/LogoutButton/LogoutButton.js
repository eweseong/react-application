import React from 'react';
import './LogoutButton.css';

export default function LogoutButton(props) {
  return (
    <button className="btn logout-button" type="text" onClick={props.logout}>
      Logout
    </button>
  );
}
