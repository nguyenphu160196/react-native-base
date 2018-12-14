import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'


export default class Login extends React.Component {
  static navigationOptions = {
    headerStyle: {
      // display: "none"
    }
  };

  constructor(props){
    super(props)
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
          <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('ship-mobile', () => Login);