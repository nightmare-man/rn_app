import React from 'react';
import { View, Text, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Home1')}/>
      </View>
      
    );
  }
}
class HomeScreen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen1</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Home1: {
    screen: HomeScreen1,
  },
},{
  initialRouteName: 'Home',
}
);
const Container=createAppContainer(AppNavigator);
export default class App extends React.Component{
  render(){
    return(
      <Container/>
    );
  }
}