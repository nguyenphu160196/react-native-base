import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux';
import Index from './pages/index'
import {store} from './lib/creat-store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Index />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
