```typescript
export const moveFloatingButton = (x: number, y: number) => {
  const floatingButton = document.getElementById('floating-button');
  if (floatingButton) {
    floatingButton.style.left = `${x}px`;
    floatingButton.style.top = `${y}px`;
  }
};

export const switchView = (view: string) => {
  const viewSwitcher = document.getElementById('view-switcher');
  if (viewSwitcher) {
    viewSwitcher.dataset.view = view;
  }
};

export const switchLocale = (locale: string) => {
  const localeSwitcher = document.getElementById('locale-switcher');
  if (localeSwitcher) {
    localeSwitcher.dataset.locale = locale;
  }
};

export const toggleRandomLongStringMode = () => {
  const randomLongStringModeButton = document.getElementById('random-long-string-mode-button');
  if (randomLongStringModeButton) {
    randomLongStringModeButton.dataset.enabled = randomLongStringModeButton.dataset.enabled === 'true' ? 'false' : 'true';
  }
};

export const switchStyleSheet = (styleSheet: string) => {
  const styleSheetSwitcher = document.getElementById('style-sheet-switcher');
  if (styleSheetSwitcher) {
    styleSheetSwitcher.dataset.styleSheet = styleSheet;
  }
};

export const editStyleSheet = (styleSheet: string, url: string) => {
  const styleSheetEditor = document.getElementById('style-sheet-editor');
  if (styleSheetEditor) {
    styleSheetEditor.dataset.styleSheet = styleSheet;
    styleSheetEditor.dataset.url = url;
  }
};
```