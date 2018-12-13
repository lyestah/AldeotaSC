//import liraries
import React, { Component } from 'react';
import { View,Dimensions, Text, Image,StyleSheet } from 'react-native';

// create a component
class Historia extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image  source={require('../img/aldeota.png')} style={styles.logo} />
               <Text style={styles.titulo} >ALDEOTA S. C. FUTSAL GRANJENSE</Text>
                <Text style={styles.txtdescription} >Histira dsd  dnsisj sjdisjsij   jsdjis sjdi sjdiis dsjisj ssijsidj ssjisjd sd sjdi
         sdpsppsdl s ksdosj dijs ijdsisijisjds  sdsidisd isjdisjd sdijsid sd isjdis isjisd sidsijd
         s disjisjdsid sijdiisjdijsijidjsdisjidj sidjwhdiwjrijetijreogjow werew rewrewrhuwhruiwehiuhrwer
         erwheruw r eyryewrywiehriowehrw ruwheruw ruiwrui wrhwerhiuweur w8e9qurewrjwihjweuhrew rewhruihoefuhweiufhewuihfiue
         efuhewiufhewufhiuweh uehiuhiehiewhf uiewf fh f f wefhuwehfuewhfiuwehfiuw we f f ewfhe few fwehfuewhfiuewhfiuwewe
         eiof weiofjewiojfewijf</Text>
         <Text style={styles.txtdescription} >Histira dsd  dnsisj sjdisjsij   jsdjis sjdi sjdiis dsjisj ssijsidj ssjisjd sd sjdi
         sdpsppsdl s ksdosj dijs ijdsisijisjds  sdsidisd isjdisjd sdijsid sd isjdis isjisd sidsijd
         s disjisjdsid sijdiisjdijsijidjsdisjidj sidjwhdiwjrijetijreogjow werew rewrewrhuwhruiwehiuhrwer
         erwheruw r eyryewrywiehriowehrw ruwheruw ruiwrui wrhwerhiuweur w8e9qurewrjwihjweuhrew rewhruihoefuhweiufhewuihfiue
         efuhewiufhewufhiuweh uehiuhiehiewhf uiewf fh f f wefhuwehfuewhfiuwehfiuw we f f ewfhe few fwehfuewhfiuewhfiuwewe
         eiof weiofjewiojfewijf</Text>
         <Text style={styles.txtdescription} >Histira dsd  dnsisj sjdisjsij   jsdjis sjdi sjdiis dsjisj ssijsidj ssjisjd sd sjdi
         sdpsppsdl s ksdosj dijs ijdsisijisjds  sdsidisd isjdisjd sdijsid sd isjdis isjisd sidsijd
         s disjisjdsid sijdiisjdijsijidjsdisjidj sidjwhdiwjrijetijreogjow werew rewrewrhuwhruiwehiuhrwer
         erwheruw r eyryewrywiehriowehrw ruwheruw ruiwrui wrhwerhiuweur w8e9qurewrjwihjweuhrew rewhruihoefuhweiufhewuihfiue
         efuhewiufhewufhiuweh uehiuhiehiewhf uiewf fh f f wefhuwehfuewhfiuwehfiuw we f f ewfhe few fwehfuewhfiuewhfiuwewe
         eiof weiofjewiojfewijf</Text>
            </View>
        );
    }
}
const Dim = Dimensions.get('window');
// define your styles
const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',
    backgroundColor: '#272727',
    },
    txtdescription: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'normal',
        width:Dim.width - 40,
        marginTop:10
    },
    logo:{
        marginTop:20,
        width:199,
        //   height:191,
          opacity:0.1,
          resizeMode:'contain'
    },
    titulo: {
        marginTop:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
});

//make this component available to the app
export default Historia;
