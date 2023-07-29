import React, { useState } from 'react';
import { switchView } from '../utils/index';

const ViewSwitcher: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('');

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    switchView(view);
  };

  return (
    <div id="view-switcher">
      <button onClick={() => handleViewChange('view1')}>View 1</button>
      <button onClick={() => handleViewChange('view2')}>View 2</button>
      <button onClick={() => handleViewChange('view3')}>View 3</button>
      <button onClick={() => handleViewChange('view4')}>View 4</button>
      <button onClick={() => handleViewChange('view5')}>View 5</button>
      <p>Current view: {currentView}</p>
    </div>
  );
};

export default ViewSwitcher;