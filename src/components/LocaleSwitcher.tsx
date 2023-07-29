import React, { useState, useEffect } from 'react';
import { Locale } from '../types/index';
import { switchLocale } from '../utils/index';

interface LocaleSwitcherProps {
  locales: Locale[];
  isRandomLongStringMode: boolean;
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ locales, isRandomLongStringMode }) => {
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (isRandomLongStringMode) {
      setSelectedLocale(null);
    }
  }, [isRandomLongStringMode]);

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = locales.find(l => l.code === event.target.value);
    if (locale) {
      setSelectedLocale(locale);
      switchLocale(locale);
    }
  };

  return (
    <div id="locale-switcher">
      <select 
        value={selectedLocale ? selectedLocale.code : ''} 
        onChange={handleLocaleChange} 
        disabled={isRandomLongStringMode}
      >
        {locales.map(locale => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;