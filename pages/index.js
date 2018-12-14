import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

export default class Index extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>React Native Redux kit!</Text>
        </View>
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

AppRegistry.registerComponent('ship-mobile', () => Index);