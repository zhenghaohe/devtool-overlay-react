import React, { useState } from 'react';
import { StyleSheet } from '../types/index';
import { switchStyleSheet } from '../utils/index';

interface StyleSheetSwitcherProps {
  styleSheets: StyleSheet[];
}

const StyleSheetSwitcher: React.FC<StyleSheetSwitcherProps> = ({ styleSheets }) => {
  const [selectedStyleSheet, setSelectedStyleSheet] = useState<StyleSheet | null>(null);

  const handleStyleSheetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStyleSheet = styleSheets.find(styleSheet => styleSheet.name === event.target.value);
    setSelectedStyleSheet(selectedStyleSheet || null);
    if (selectedStyleSheet) {
      switchStyleSheet(selectedStyleSheet);
    }
  };

  return (
    <div id="style-sheet-switcher">
      <select value={selectedStyleSheet?.name || ''} onChange={handleStyleSheetChange}>
        <option value="">Select a style sheet...</option>
        {styleSheets.map(styleSheet => (
          <option key={styleSheet.name} value={styleSheet.name}>
            {styleSheet.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyleSheetSwitcher;