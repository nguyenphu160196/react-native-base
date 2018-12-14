import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'


export default class Order extends React.Component {

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
          <Text>Order Page!</Text>
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


AppRegistry.registerComponent('ship-mobile', () => Order);