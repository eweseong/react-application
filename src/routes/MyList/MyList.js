import React from 'react';

/**
 * Props drilling could be tedious and ugly if it is going through multiple layers,
 * and most of these layer does not care about the props that they are passing on.
 * One alternative method to props drilling is component composition.
 *
 * My List (data received here)
 *  |
 *  | - MyListContainer
 *       |
 *       | - MyListBody
 *            |
 *            | - Avatar (data needed here)
 */
export default function MyList(props) {
  return (
    <div className="my-list">
      My List <br />
      <br />
      <MyListContainer
        username={props.username}
        avatarImage={props.avatarImage}
      />
    </div>
  );
}

function MyListContainer(props) {
  return (
    <div className="my-list__container">
      <MyListBody username={props.username} avatarImage={props.avatarImage} />
    </div>
  );
}

function MyListBody(props) {
  return (
    <div className="my-list__body">
      <Avatar username={props.username} avatarImage={props.avatarImage} />
    </div>
  );
}

function Avatar({ username, avatarImage }) {
  // fetch something from context (Context API)
  // fetch from global state (Global State)
  return (
    <div className="avatar">
      <img src={avatarImage} alt="profile" />
      <p>{username && `(${username})`}</p>
    </div>
  );
}
