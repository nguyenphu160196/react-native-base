import React from 'react'
import { 
  ActivityIndicator, 
  StatusBar, 
  AppRegistry, 
  StyleSheet, 
  View 
} from 'react-native'
import Auth from '../services/auth'


export default class Wait extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    setTimeout(_ => {
      let auth = new Auth()
      this.props.navigation.navigate(auth.checkAuth() ? "App" : "Auth")
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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

AppRegistry.registerComponent('ship-mobile', () => Wait);