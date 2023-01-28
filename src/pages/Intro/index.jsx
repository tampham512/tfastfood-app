import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import CONSTANT from '../../controller/Constant';
import {color} from 'react-native-reanimated';
import {SITE_MAP} from '../../utils/constants/Path';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const index = ({navigation}) => {
  const handlePressLogin = () => {
    navigation.push(SITE_MAP.LOGIN);
  };
  const handlePressRigister = () => {
    navigation.push(SITE_MAP.REGISTER);
  };
  return (
    <ImageBackground
      source={CONSTANT.images.background_intro}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.top}>
        <View style={styles.skipButtonView}>
          <TouchableOpacity
            style={styles.buttonSkip}
            onPress={() => navigation.navigate(SITE_MAP.LOGIN)}>
            <Text style={styles.textSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainText}>
          <Text style={styles.textblack}>Welcome to</Text>
          <Text style={styles.textred}>FoodHub </Text>
        </View>
        <View style={styles.contextText}>
          <Text style={styles.textcontent}>
            Your favourite foods delivered fast at your door.
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.linetText}>
          <View style={styles.line1}></View>
          <Text style={styles.textsign}> Sign in with</Text>
          <View style={styles.line1}></View>
        </View>
        <View style={styles.buttonMain}>
          <TouchableOpacity style={styles.contentSocial}>
            <Image
              style={styles.tinyLogo}
              source={CONSTANT.images.ic_Facebook}
            />
            <Text style={styles.textFace}> FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contentSocial}>
            <Image style={styles.tinyLogo} source={CONSTANT.images.ic_Google} />
            <Text style={styles.textFace}> GOOGLE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStart}>
          <TouchableOpacity style={styles.btnstart} onPress={handlePressLogin}>
            <Text style={styles.textstart}> Start with email or phone</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textNavigation}>
          <Text style={styles.textAlready}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handlePressRigister}>
            <Text style={styles.textSingin}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  top: {
    // backgroundColor: 'red',

    height: SCREEN_HEIGHT / 2,
  },
  bottom: {
    // backgroundColor:'blue',
    height: SCREEN_HEIGHT / 2,
  },
  skipButtonView: {
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  buttonSkip: {
    width: 55,
    height: 32,
    borderRadius: 27.5,
    backgroundColor: CONSTANT.color.background,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,

    elevation: 24,
    marginRight: 10,
    marginTop: 10,
  },
  textSkip: {
    color: CONSTANT.color.organe,
    fontWeight: '800',
  },
  mainText: {
    fontWeight: '700',
    fontSize: 53,
    marginLeft: 30,
    marginTop: 50,
  },
  textblack: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 45,
    color: CONSTANT.color.textblack,
  },
  textred: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 45,
    color: CONSTANT.color.organe,
  },
  contextText: {
    width: SCREEN_WIDTH - 109,
    height: 54,
    marginLeft: 30,
  },
  textcontent: {
    color: CONSTANT.color.textgray,
    opacity: 0.87,
    lineHeight: 27,
    fontSize: 18,
  },
  buttonMain: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  linetText: {
    flexDirection: 'row',
    marginHorizontal: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textsign: {
    paddingRight: 5,
    fontWeight: '500',
    fontSize: 18,
    color: CONSTANT.color.background,
  },
  line1: {
    width: 89,
    backgroundColor: CONSTANT.color.background,
    height: 1,
  },
  contentSocial: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: CONSTANT.color.background,
    borderRadius: 28,
    height: 54,
    justifyContent: 'center',
    margin: 20,
    alignItems: 'center',
  },
  textFace: {
    textAlign: 'right',
    paddingLeft: 15,
    fontSize: 13,
    fontWeight: '400',
    color: CONSTANT.color.black,
  },
  buttonStart: {
    alignItems: 'center',
  },
  btnstart: {
    width: SCREEN_WIDTH - 60,
    height: 54,
    backgroundColor: '#6b6b6b',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstart: {
    color: CONSTANT.color.background,
    fontSize: 17,
    fontWeight: '500',
  },
  textNavigation: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  textAlready: {
    color: CONSTANT.color.background,
    fontSize: 16,
    fontWeight: '500',
  },
  textSingin: {
    color: CONSTANT.color.main,
    fontSize: 16,
    fontWeight: '500',
  },
});
