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
    screen: BarcodeScanner,
    navigationOptions: {
      title: 'Leitura de QR Code',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  },
  /*'ScannerResponse': {
    screen: ScannerResponse,
    navigationOptions: ({navigation}) => {
      let {dificuldade} = navigation.state.params;
      let backgroundColor, color;
      if (dificuldade == 2) {
        backgroundColor = 'yellow',
        color = 'black';
      } else {
        color = 'white';
        if (dificuldade == 1) {
          backgroundColor = 'blue';
        } else {
          backgroundColor = 'red';
        }
      }
      return ({
        title: navigation.state.params.alternativa,
        headerTintColor: color,
        headerStyle: {
          backgroundColor: backgroundColor,
          borderBottomWidth: 2,
          borderBottomColor: color
        },
        headerTitleStyle: {
          fontSize: 25,
          color: color
        }
      })
    }
  }*/
}, {
  defaultNavigationOptions: {
    title: 'Eco Exploração',
    headerStyle: {
      backgroundColor: '#d6d6d6',
    },
    headerTitleStyle: {
      flexGrow: 1,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold'
    }
  }
});

export default createAppContainer(StackNavigator);
