import { StackNavigator } from 'react-navigation';
import MobileInputScreen from '../screens/MobileInputScreen';
import CodeInputScreen from '../screens/CodeInputScreen';

export default StackNavigator({
  mobileInput: { screen: MobileInputScreen },
  codeInput: { screen: CodeInputScreen },
});
