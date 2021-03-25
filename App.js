import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { ResturantsScreen } from './src/features/resturantas/screens';

export default function App() {
  return (
    <>
      <ResturantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}
