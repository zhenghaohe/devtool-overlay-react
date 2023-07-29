import React, { useState } from 'react';
import { Overlay } from './Overlay';
import { moveFloatingButton } from '../utils';

export const FloatingButton: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  const handleMouseUp = () => {
    moveFloatingButton(position);
  };

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <button
        id="floating-button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px` }}
      >
        Config
      </button>
      {showOverlay && <Overlay />}
    </>
  );
};