import React from 'react';
import { View } from 'react-native';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import reducers from './reducers';
import RootNavigation from './navigation/RootNavigation';

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

const App = ({ dispatch, nav }) => (
  <RootNavigation
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => ({ nav: state.nav });

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <AppWithNavigation />
    </View>
  </Provider>
);
