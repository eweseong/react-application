import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

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
export default function MyList() {
  return (
    <div className="my-list">
      My List <br />
      <br />
      <MyListContainer />
    </div>
  );
}

function MyListContainer() {
  return (
    <div className="my-list__container">
      <MyListBody />
    </div>
  );
}

function MyListBody() {
  return (
    <div className="my-list__body">
      <Avatar />
    </div>
  );
}

function Avatar() {
  const user = useContext(UserContext);
  const { username, profileImage: avatarImage } = user;
  return (
    <div className="avatar">
      {avatarImage && <img src={avatarImage} alt="profile" />}
      <p>{username && `(${username})`}</p>
    </div>
  );
}
