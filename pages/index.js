import React from 'react'
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native'
import {connect} from "react-redux"
import {updateState} from '../store'

class Index extends React.Component {
  render() {
    let {test, dispatch} = this.props
    return (
        <View style={styles.container}>
          <Text>{test}</Text>
          <Button
            onPress={() => {
              dispatch(updateState("test", "Hehe"))
            }}
            title="Press Me"
          />
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

export default connect(store => store)(Index)

AppRegistry.registerComponent('ship-mobile', () => Index);