//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions, Image,StyleSheet } from 'react-native';

// create a component
class Campeonatos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxCampeonato} >
                    <Text style={styles.boxtitulo} >Campeonato Granjense 1998</Text>
                    <View style={styles.boxShow} >
                    <Image source={require('../img/aldeota.png')} style={styles.trofeu} />
                    <Text style={styles.boxdescription} >sada sdasddf dfdf rt trtr etre fgfdghdfhghgfjg hghfghfgh fghghf ghfghfg   gfhfghfgh
                    ghfhgfhgfhfgh fghfgh fghfg gfhfghgfhrt etergsdgregreg reregerg g ger gre gre ger gerg 
                    regegerg ergerger ergregerg ergerg ergerg regergregerg er gergergrgerg
                    ergerggrgreg rre ergergergergghg errger  gregregergre regregerg erg erger g erger
                    ergergerg   gregeg erg ergerggerer g er g ergregerger </Text>
                    </View>
                </View>
                 <View style={styles.boxCampeonato} >
                    <Text style={styles.boxtitulo} >Campeonato Granjense 1999</Text>
                    <View style={styles.boxShow} >
                    <Image source={require('../img/aldeota.png')} style={styles.trofeu} />
                    <Text style={styles.boxdescription} >sada sdasddf dfdf rt trtr etre fgfdghdfhghgfjg hghfghfgh fghghf ghfghfg   gfhfghfgh
                    ghfhgfhgfhfgh fghfgh fghfg gfhfghgfhrt etergsdgregreg reregerg g ger gre gre ger gerg 
                    regegerg ergerger ergregerg ergerg ergerg regergregerg er gergergrgerg
                    ergerggrgreg rre ergergergergghg errger  gregregergre regregerg erg erger g erger
                    ergergerg   gregeg erg ergerggerer g er g ergregerger </Text>
                    </View>
                </View>
                 <View style={styles.boxCampeonato} >
                    <Text style={styles.boxtitulo} >Campeonato Granjense 2000</Text>
                    <View style={styles.boxShow} >
                    <Image source={require('../img/aldeota.png')} style={styles.trofeu} />
                    <Text style={styles.boxdescription} >sada sdasddf dfdf rt trtr etre fgfdghdfhghgfjg hghfghfgh fghghf ghfghfg   gfhfghfgh
                    ghfhgfhgfhfgh fghfgh fghfg gfhfghgfhrt etergsdgregreg reregerg g ger gre gre ger gerg 
                    regegerg ergerger ergregerg ergerg ergerg regergregerg er gergergrgerg
                    ergerggrgreg rre ergergergergghg errger  gregregergre regregerg erg erger g erger
                    ergergerg   gregeg erg ergerggerer g er g ergregerger </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const Dim = Dimensions.get('window');
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        alignItems: 'center',
        
    },
    boxCampeonato:{
        width:Dim.width - 10,
        
    },
    boxtitulo:{
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
    },
    boxdescription:{
        fontSize: 10,
            color: '#fff',
            fontWeight: 'normal',
            marginTop: 10,
            alignContent: 'center',
    },
    trofeu:{
        width:50,
        height:50
    },
    boxShow:{
        flexDirection: 'row',
        alignItems: 'center',
        padding:4,
        
        backgroundColor:'rgba(250,250,250,0.03)'
        
        
    }
});

//make this component available to the app
export default Campeonatos;
