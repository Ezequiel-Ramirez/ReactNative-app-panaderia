/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppNavigation from './src/navigation/index';
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store/index';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};



export default App;