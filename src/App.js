import React from 'react';

import {Provider} from 'react-redux';

import store from './redux';

import TabNavigator from './navigation/TabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
};

export default App;
