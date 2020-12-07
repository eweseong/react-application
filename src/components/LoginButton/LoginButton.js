import React from 'react';

export default function LoginButton(props) {
  return (
    <button className="btn" type="text" onClick={props.login}>
      Login
    </button>
  );
}
