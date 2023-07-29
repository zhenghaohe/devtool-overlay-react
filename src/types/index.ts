```typescript
export interface Locale {
  id: string;
  name: string;
}

export interface StyleSheet {
  id: string;
  name: string;
  url: string;
}

export interface Widget {
  id: string;
  name: string;
}

export interface DevToolConfig {
  currentView: Widget;
  currentLocale: Locale;
  randomLongStringMode: boolean;
  currentStyleSheet: StyleSheet;
}
```