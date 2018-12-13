

import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Image,Text, View} from 'react-native'
import { createDrawerNavigator, createAppContainer,DrawerItems} from 'react-navigation'
import Home from './assets/pages/Home'
import Splash from './assets/pages/Splash'
import Historia from './assets/pages/Historia'
import Campeonatos from './assets/pages/Campeonatos'
import { ScrollView } from 'react-native-gesture-handler'
import Star from './assets/complementos/star'


export default  class App extends React.Component{
  render(){
    return(
      <MyApp/>
    );
  }
}
const CustomDrawerComponent =(props)=>(
  <SafeAreaView style={{flex:1}} >
  <View style={{height:150,backgroundColor:'#8D0707',alignItems:'center',justifyContent:'center'}}>
  <Text style={styles.titulo} >ALDEOTA S.C</Text>
  <View style={styles.star}>
  <Star/><Star/><Star/><Star/><Star/><Star/>
   </View>
  <Text style={styles.titulopequeno} >Aldeota Futsal Granjense</Text>
  </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)
const Navegador = createDrawerNavigator({
  Splash:{screen:Splash,
  navigationOptions:{
    drawerLabel:()=>null
  }},
  Home:Home,
  Historia:Historia,
  Campeonatos:Campeonatos
},{
  initialRouteName:'Splash',
  contentComponent:CustomDrawerComponent,
  drawerWidth:300,
  drawerBackgroundColor: '#8D0707',
  contentOptions:{
    activeTintColor:'#fff',
    inactiveTintColor:'#fff'
  },
  labelStyle:{
    
  }
})

const MyApp = createAppContainer(Navegador);

const styles = StyleSheet.create({
  logo:{
    width:15,
    height:15
  },
  star:{
    flexDirection: 'row',
  },
  titulo:{
    fontSize: 27,
    fontWeight: 'bold',
    color:'#ffffff'
  },
  titulopequeno:{
     fontSize: 16,
       fontWeight: '200',
       color: '#ffffff'
  }
  
})
