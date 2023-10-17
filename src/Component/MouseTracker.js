import React, { useState, useEffect } from 'react';




const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleClearMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='div0'>
      <h1 className='hh '>Mouse Tracker</h1>
      <p className='mo'>Mouse X: {mousePosition.x}</p>
      <p className='mo'>Mouse Y: {mousePosition.y}</p>
      <button onClick={handleClearMousePosition} className='btn4'>Clear Mouse Position</button>
    </div>
  );
};

export default MouseTracker;