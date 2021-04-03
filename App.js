import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
