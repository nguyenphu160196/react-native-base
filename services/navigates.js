import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation"

import Order from '../pages/order'
import Login from '../pages/login'
import Wait from '../pages/wait'


const AppStack = createStackNavigator({ Order });
const AuthStack = createStackNavigator({ Login });

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: Wait,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));