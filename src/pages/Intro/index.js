import { StyleSheet, Text, View, ImageBackground, Dimensions,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import CONSTANT from '../../controller/Constant'

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const index = () => {
  return (
    <LinearGradient  colors={['black' ,'white']} 
    start={{x: 0.5, y: 1 }} 
    end={{x: 0.5, y: 0.7 }} 
    style={styles.linearGradient}>
     <ImageBackground source={CONSTANT.images.background_intro} resizeMode="cover" style={styles.image}>
        <View style={styles.top}>
            <View style= {styles.skipButtonView}>
                <TouchableOpacity style={styles.buttonSkip}>
                    <Text style={styles.textSkip}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainText}>
                
            </View>
            <View style={styles.contextText}>
                
            </View>
        </View>
       
        <View style={styles.bottom}>
            <View style={styles.contentText}>

            </View>
            <View style={styles.buttonMain}>
                
            </View>
            <View style={styles.buttonStart}>
                
            </View>
            <View style={styles.textNavigation}>
                
            </View>
        </View>
        </ImageBackground>
  </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({
    linearGradient:{
        flex:1
    },
    image:{
        flex:1,
        opacity:0.7,
    },
    top:{
        // backgroundColor: 'red',

        height: SCREEN_HEIGHT/2
    },
    bottom:{
        // backgroundColor:'blue',
        height: SCREEN_HEIGHT/2
    },
    skipButtonView:{
        textAlign:'right',
        alignItems:'flex-end',
       
    },
    buttonSkip:{
    width: 55,
    height: 32,
    borderRadius: 27.5,
    backgroundColor: CONSTANT.color.background,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    
    elevation: 24,
    marginRight:10,
    marginTop:10,
    },
    textSkip:{
        color: CONSTANT.color.organe,
        fontWeight:'800'
    }
})
