import React from 'react'
import { YellowBox} from 'react-native'
import { Provider } from 'react-redux';
import {store} from './lib/creat-store'
import AppNavigator from './services/navigates'

YellowBox.ignoreWarnings(['Require cycle:']);

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
    );
  }
}