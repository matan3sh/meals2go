import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/providers/theme';
import { ResturantsScreen } from './src/features/resturantas/screens';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantsScreen />
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
