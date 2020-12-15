import React, { useEffect, useState } from 'react';

export default function Canvas() {
  const [canvasSize, setCanvasSize] = useState(window.innerWidth);

  const onResize = () => {
    console.log('resizing');
    setCanvasSize(window.innerWidth);
  };

  // side-effects are trigger every time we change state or props value
  // componentDidMount() RUN once
  // componentDidUpdate() RUN when ever props or state changes
  useEffect(() => {
    window.addEventListener('resize', onResize);

    // componentWillUnmount()
    return function cleanup() {
      console.log('cleanup');
      window.removeEventListener('resize', onResize);
    };
  }, []); // equivalent componentDidMount(), only run ONCE

  return (
    <div>
      <p>Canvas ({canvasSize})</p>
      <canvas width={canvasSize} height={canvasSize}></canvas>
    </div>
  );
}
