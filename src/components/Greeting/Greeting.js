import React from 'react';

export default function Greeting({ username = '' }) {
  return <p>Welcome {username}!</p>;
}
