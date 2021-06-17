import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Landing from './screens/Landing';
export default class App extends React.Component {
  render(){ 
return (
<AppContainer/>

)
  }
}
const SwitchNavigator = createSwitchNavigator({
  Landing:{screen:Landing},
  Login:{screen:Login}
})
const AppContainer = createAppContainer(SwitchNavigator)