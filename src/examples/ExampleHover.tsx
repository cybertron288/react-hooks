import React from 'react';
import useHover from '../hooks/useHover';

const ExampleHover = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div
        ref={hoverRef}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isHovered ? 'lightblue' : 'lightgray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {isHovered ? 'Hovered!' : 'Hover over me!'}
      </div>
    </div>
  );
};

export default ExampleHover;
