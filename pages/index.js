import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import {connect} from "react-redux"


class Index extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    
  }

  render() {
    let {children} = this.props
    return (
      <View style={styles.container}>
          {children}
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

export default connect(store => store)(Index)

AppRegistry.registerComponent('ship-mobile', () => Index);