import React, { useState } from 'react';

interface RandomLongStringModeButtonProps {
  onToggle: () => void;
}

export const RandomLongStringModeButton: React.FC<RandomLongStringModeButtonProps> = ({ onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleClick = () => {
    setIsEnabled(!isEnabled);
    onToggle();
  };

  return (
    <button id="random-long-string-mode-button" onClick={handleClick}>
      {isEnabled ? 'Disable Random Long String Mode' : 'Enable Random Long String Mode'}
    </button>
  );
};