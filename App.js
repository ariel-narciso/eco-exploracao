import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/pages/Index';
import BarcodeScanner from './src/pages/BarcodeScanner';
import ScannerResponse from './src/pages/ScannerResponse';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: Index
  },
  'BarcodeScanner': {
    screen: BarcodeScanner
  },
  'ScannerResponse': {
    screen: ScannerResponse
  }
}, {
  defaultNavigationOptions: {
    title: 'Eco Exploração',
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: 'blue'
    },
    headerTitleStyle: {
      flexGrow: 1,
      textAlign: 'center',
      fontSize: 25
    }
  }
});

export default createAppContainer(StackNavigator);
