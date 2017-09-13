import React from 'react';
import { View } from 'react-native';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

// const App = ({ dispatch, nav }) => (
//   <RootNavigation navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );
//
// const mapStateToProps = state => ({ nav: state.nav });
//
// const AppWithNavigation = connect(mapStateToProps)(App);

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
