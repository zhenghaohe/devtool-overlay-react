```tsx
import React, { useState } from 'react';
import { FloatingButton } from './components/FloatingButton';
import { Overlay } from './components/Overlay';
import { ViewSwitcher } from './components/ViewSwitcher';
import { LocaleSwitcher } from './components/LocaleSwitcher';
import { RandomLongStringModeButton } from './components/RandomLongStringModeButton';
import { StyleSheetSwitcher } from './components/StyleSheetSwitcher';
import { StyleSheetEditor } from './components/StyleSheetEditor';

const App: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('');
  const [selectedLocale, setSelectedLocale] = useState('');
  const [isRandomLongStringMode, setIsRandomLongStringMode] = useState(false);
  const [selectedStyleSheet, setSelectedStyleSheet] = useState('');

  const handleOpenOverlay = () => setIsOverlayOpen(true);
  const handleCloseOverlay = () => setIsOverlayOpen(false);

  const handleViewChange = (view: string) => setSelectedView(view);
  const handleLocaleChange = (locale: string) => setSelectedLocale(locale);
  const handleRandomLongStringModeToggle = () => setIsRandomLongStringMode(!isRandomLongStringMode);
  const handleStyleSheetChange = (styleSheet: string) => setSelectedStyleSheet(styleSheet);

  return (
    <div className="App">
      <FloatingButton onClick={handleOpenOverlay} />
      {isOverlayOpen && (
        <Overlay onClose={handleCloseOverlay}>
          <ViewSwitcher onChange={handleViewChange} selectedView={selectedView} />
          <LocaleSwitcher onChange={handleLocaleChange} selectedLocale={selectedLocale} disabled={isRandomLongStringMode} />
          <RandomLongStringModeButton isActive={isRandomLongStringMode} onToggle={handleRandomLongStringModeToggle} />
          <StyleSheetSwitcher onChange={handleStyleSheetChange} selectedStyleSheet={selectedStyleSheet} />
          <StyleSheetEditor styleSheet={selectedStyleSheet} />
        </Overlay>
      )}
    </div>
  );
};

export default App;
```