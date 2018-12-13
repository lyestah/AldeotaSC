
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Image,Dimensions,
  View
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentDidMount(){
    setTimeout(()=>{
        const { navigate } = this.props.navigation;
        navigate('Home');
    },2000)
}

  render() {
    return (
    	 <View style={styles.container}>
    	<Image source={require('../img/aldeota.png')} style={styles.bg}  />
     
      <Text style={styles.fundacao} >Desde 1998</Text>
       </View>
    );
  }
}
// const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#272727',
  },
  fundacao: {
    fontSize: 12,
    textAlign: 'center',
    color:'#ccc'
  },
  bg:{
  	width:199,
  	height:291
  },
  copyPequeno:{
  	fontSize: 12,
    textAlign: 'center',
    color:'#fff'
  },
  copy:{
  	fontSize: 14,
    marginTop:310,
    textAlign: 'center',
    color:'#fff'
  }
});
