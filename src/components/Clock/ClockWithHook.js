import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  // componentDidMount() + componentDidUpdate(),
  // run every time a component render, "after-render"
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // componentWillUnmount()
    return function cleanup() {
      // optional return, if you provide this,
      // the hook will run this cleanup function
      clearInterval(timerId);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}
