

import React, {Component} from 'react';
import {Image, StyleSheet, Text,Dimensions, View} from 'react-native';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {};
   
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.avatarInfo}>
      <Image source={require('../img/aldeota.png')} style={styles.avatar}/>
      <Text style={styles.titulo} >Campeonato Granjense 2018</Text>
      </View>
        
         <Image source={require('../img/imgFeed.png')} style={styles.imgFeed}/>
         <View style={styles.boxHistory}>
         <Text style={styles.txtdescription} >Histira dsd  dnsisj sjdisjsij   jsdjis sjdi sjdiis dsjisj ssijsidj ssjisjd sd sjdi
         sdpsppsdl s ksdosj dijs ijdsisijisjds  sdsidisd isjdisjd sdijsid sd isjdis isjisd sidsijd
         s disjisjdsid sijdiisjdijsijidjsdisjidj sidjwhdiwjrijetijreogjow werew rewrewrhuwhruiwehiuhrwer
         erwheruw r eyryewrywiehriowehrw ruwheruw ruiwrui wrhwerhiuweur w8e9qurewrjwihjweuhrew rewhruihoefuhweiufhewuihfiue
         efuhewiufhewufhiuweh uehiuhiehiewhf uiewf fh f f wefhuwehfuewhfiuwehfiuw we f f ewfhe few fwehfuewhfiuewhfiuwewe
         eiof weiofjewiojfewijf</Text>
        
         </View>
          <View style={styles.placar} >
         <Text style={styles.placarTitulo} >PLACAR</Text>
         <Text style={styles.placarTimes} >ALDEOTA 7 X PREMOLDADOS 4</Text>
         </View>
      </View>
    );
  }
}
const Dim = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
  },
  avatarInfo:{
    color:'#fff',
    flexDirection: 'row',
    marginTop:5,
    marginBottom: 5,
    alignItems: 'center',
    padding: 10,
  },
  avatar:{
      width:30,
      height:30,
      borderRadius: 15,
      padding: 2,
      marginRight: 10,
  },
  titulo:{
      color:'#fff'
  },
  imgFeed:{
  width:Dim.width
  },
  boxHistory:{
    marginTop:2,
    backgroundColor:'rgba(0,0,0,0.10)',
    padding:10
  },
  txtdescription:{
    fontSize:10,
    color:'#fff',
    fontWeight: 'normal'
  },
  placar:{
    backgroundColor: '#8D0707',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    padding: 5,
  },
  placarTitulo:{
    color:'#fff',
    fontSize:16,
    fontWeight: 'bold',
  },
  placarTimes:{
    color:'#fff',
    fontSize:12,
    fontWeight: 'bold',
  }

});
