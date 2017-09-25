import React from 'react';
import { View } from 'react-native';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk),
);

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppWithNavigationState />
      </View>
    </Provider>
  );
}

export default App;
