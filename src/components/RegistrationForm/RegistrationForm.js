import React, { useEffect, useState } from 'react';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [nickName, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setValidForm] = useState(false);

  // any changes to state or props would trigger side-effects
  useEffect(() => {
    console.log('validating username and password');
    setValidForm(username !== '' && password !== '');
    // the array ([]) below holds the dependencies that the use effect is watching on,
    // any changes to the values in the dependencies would cause the side effect to be executed
  }, [username, password]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      username,
      nickName,
      password,
    });
  };

  return (
    <form>
      <p>
        <label>
          Username <sup>*</sup>{' '}
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Nick Name{' '}
          <input
            type="text"
            name="nickName"
            placeholder="John"
            value={nickName}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Password <sup>*</sup>{' '}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
      </p>
      {isValidForm && (
        <button type="submit" onClick={onSubmit}>
          Register
        </button>
      )}
    </form>
  );
}
