import React, { useState } from 'react';
import { StyleSheet } from '../types/index';
import { editStyleSheet } from '../utils/index';

interface StyleSheetEditorProps {
  styleSheets: StyleSheet[];
  onEdit: (styleSheet: StyleSheet) => void;
}

const StyleSheetEditor: React.FC<StyleSheetEditorProps> = ({ styleSheets, onEdit }) => {
  const [selectedStyleSheet, setSelectedStyleSheet] = useState<StyleSheet | null>(null);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = styleSheets.find(ss => ss.name === e.target.value);
    setSelectedStyleSheet(selected || null);
    if (selected) {
      setUrl(selected.url);
      setName(selected.name);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    if (selectedStyleSheet) {
      const updatedStyleSheet = { ...selectedStyleSheet, url, name };
      editStyleSheet(updatedStyleSheet);
      onEdit(updatedStyleSheet);
    }
  };

  return (
    <div id="style-sheet-editor">
      <select onChange={handleSelect}>
        {styleSheets.map(ss => (
          <option key={ss.name} value={ss.name}>
            {ss.name}
          </option>
        ))}
      </select>
      <input type="text" value={url} onChange={handleUrlChange} />
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default StyleSheetEditor;