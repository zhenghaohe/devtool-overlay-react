import React from 'react';
import ViewSwitcher from './ViewSwitcher';
import LocaleSwitcher from './LocaleSwitcher';
import RandomLongStringModeButton from './RandomLongStringModeButton';
import StyleSheetSwitcher from './StyleSheetSwitcher';
import StyleSheetEditor from './StyleSheetEditor';

const Overlay: React.FC = () => {
  return (
    <div id="overlay">
      <ViewSwitcher />
      <LocaleSwitcher />
      <RandomLongStringModeButton />
      <StyleSheetSwitcher />
      <StyleSheetEditor />
    </div>
  );
};

export default Overlay;