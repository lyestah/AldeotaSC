import React, { Component } from 'react'
import { Image, View,StyleSheet } from 'react-native'

export default class star extends Component {
  render() {
    return (
      <View>
       <Image source={require('../img/star.png')} style={styles.logo} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  logo:{
    width:15,
    height:15
  }
  
})