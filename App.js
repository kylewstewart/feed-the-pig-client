import React from 'react';
import { StackNavigator } from 'react-navigation';

import LogInScreen from './screens/LogInScreen';
import CreateAcctScreen from './screens/CreateAcctScreen';

const MainNavigator = StackNavigator({
  LogIn: { screen: LogInScreen },
  createAcct: { screen: CreateAcctScreen },
});

function App() {
  return (
    <MainNavigator />
  );
}

export default App;
