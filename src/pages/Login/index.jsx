import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Dimensions,TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import RadioGroup from '../../components/RadioGroup';
// import {Link} from 'react-router-native';

import Logo from '../../assets/Icons/logo.png';
import AppleIcon from '../../assets/Icons/apple.png';

import FacebookIcon from '../../assets/Icons/facebook.png';
import GooglePlusIcon from '../../assets/Icons/google-plus.png';

import {SITE_MAP} from '../../utils/constants/Path';
import {useDispatch, useSelector} from 'react-redux';


import CONSTANT from '../../controller/Constant';
import { color } from 'native-base/lib/typescript/theme/styled-system';

import {login, isLoginIn, logout} from 'src/redux/slices/authSlice';



const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

// const options = [
//   {value: 0, key: 0, name: 'Cá Nhân', color: 'cyan.100'},
//   {value: 1, key: 1, name: 'Garage', color: 'cyan.100'},
// ];
// const listLogin = [
//   {type: 'GOOGLE', key: 'GOOGLE', icon: GooglePlusIcon},
//   {type: 'APPLE', key: 'APPLE', icon: AppleIcon},
//   {type: 'FACEBOOK', key: 'FACEBOOK', icon: FacebookIcon},
// ];
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

function Login({navigation}) {


  const [ isCanSeePassWord, setIsSeePassword] = useState(false);

  const handelSeePassWord = ()=>{
    setIsSeePassword(!isCanSeePassWord)
  }


  
  const dispatch = useDispatch();
  const {isLoading, userInfo, accessToken} = useSelector(state => state.auth);
  console.log('🚀 ~ file: index.jsx:20 ~ Index ~ userInfo', userInfo);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', isLoading);
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValue: {category: 0},
  });
  const onSubmit = data => {
    console.log('🚀 ~ file: index.js:48 ~ onSubmit ~ data', data);
    try {
      dispatch(login(data));
    } catch (error) {
      console.log(error);
    }
    alert(JSON.stringify(data));
  };
  // const handleRegister = () => alert('Regiter link');
  // const handlePressIconLogin = type => alert(type);
  console.log('login');
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={styles.imga}>
        <Image style={styles.ecl} source={CONSTANT.images.ecl} />
        <View style={styles.ecl2}>
          <Image style={styles.eclpink} source={CONSTANT.images.eclippink} />
        </View>
        <View style={styles.ecl3}>
          <Image
            style={styles.eclorange}
            source={CONSTANT.images.ecliporange}
          />
        </View>
      </View>
     
            <View style= {styles.skipButtonView}>
                <TouchableOpacity style={styles.buttonSkip} onPress={()=>navigation.navigate(SITE_MAP.INTRO)}>
                    <Image style={styles.preImage} source={CONSTANT.images.pre} />
                </TouchableOpacity>
            </View>
           
      <View style={[styles.container]}>
        <View style={styles.textLogin}>
          <Text style={styles.textconLogin}>Login</Text>
        </View>
        <View style={styles.enterInf}>
          <Text style={styles.textEM}> E-mail:</Text>
          <View style={[styles.passWordView,styles.input1 ]}>
          <TextInput
            placeholder="Your email or phone"
            keyboardType="email-address"
            returnKeyType='next'
            placeholderTextColor="gray"
          />
          </View>
          
        </View>
        <View style={styles.enterInf}>
          <Text style={styles.textEM} > Password:</Text>
          <View style={[styles.passWordView,styles.input1 ]}>
          <TextInput
            placeholder="Password"
            keyboardType="default"
            returnKeyType='done'
            secureTextEntry={isCanSeePassWord}
          />
          <TouchableOpacity onPress={handelSeePassWord}>
            {!isCanSeePassWord? <Image source={CONSTANT.images.eye} style={styles.icEye}/>:<Image source={CONSTANT.images.ic_eyeClose} style={styles.icEye}/>}
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.forgotView}>
           <Text style={styles.textForgot}>Forgot password?</Text>
        </View>
        <View style={styles.buttonLoginView}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textButtonLogin}> LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
        <View style={styles.textNavigation}>
                <Text style={styles.textAlready}>Don’t have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(SITE_MAP.REGISTER)}>
                <Text style={styles.textSingin}> Sign Up</Text>    
                </TouchableOpacity>    
            </View>
            <View style={styles.linetText}>
                <View style={styles.line2}></View>
                <Text style={styles.textsign}> Sign in with</Text>
                <View style={styles.line2}></View>
            </View>
            <View style={styles.buttonMain}>
                    <TouchableOpacity style={styles.contentSocial}>
                        <Image style={styles.tinyLogo} source={CONSTANT.images.ic_Facebook} />
                        <Text style={styles.textFace}> FACEBOOK</Text>
                    </TouchableOpacity>
            

                <TouchableOpacity style={styles.contentSocial}>
                <Image style={styles.tinyLogo} source={CONSTANT.images.ic_Google} />
                        <Text style={styles.textFace}> GOOGLE</Text>
                    </TouchableOpacity>
                
            </View>
            
            
        </View>



        
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  imga: {
    flexDirection: 'row',
  },
  ecl3: {
    marginLeft: 180,
  },
  ecl2: {
    marginLeft: -55,
  },

  ecl: {},
  containerCenter: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  
  textLogin:{
    marginTop:90
  },
  textconLogin:{
    width: SCREEN_WIDTH - 148,
    fontWeight: '600',
    fontSize: 37,
    lineHeight: 120,
    color: 'black'
  },
  textEM:{
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    marginBottom:5
   
  },

  enterInf: {
    width: SCREEN_WIDTH - 50,
    justifyContent: 'center',
    marginBottom:30
   
  },
  input1: {
    height: 65,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    borderWidth:1,
    padding:10,
    backgroundColor: 'white'

  },
  icEye:{
    height:12,
    width:17
  },
  passWordView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  textForgot:{
    color: '#FE724C',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14
  },
  textNavigation:{
    flexDirection:'row',
    marginTop: 30,
    marginBottom: 50,
    fontWeight: '400',
    justifyContent: 'center'
    
},
textAlready:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
    color: '#5B5B5E'
},
textSingin:{
    fontSize: 14,
    color: '#FE724C',
    fontWeight: '400',
    lineHeight: 14
},
contentSocial:{
  width: 150,
  flexDirection: 'row',
  borderRadius: 28,
  height: 54,
  backgroundColor: CONSTANT.color.background,
  justifyContent: 'center',
  margin: 20,
  alignItems: 'center',
  borderColor: 'white',
  borderWidth: 1,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.20,
shadowRadius: 4.11,
elevation: 6,

},
textFace:{
   textAlign: 'right',
   paddingLeft: 15,
   fontSize: 13,
   fontWeight: '400',
   color: CONSTANT.color.black
   
},
buttonMain:{
  flexDirection:'row'
},
linetText:{
  flexDirection: 'row',
  marginHorizontal: 44,
  justifyContent:'center',
  alignItems: 'center'
},
textsign:{
  paddingRight: 5,
  fontWeight: '500',
  fontSize: 14,
  
},
line2:{
  width: 89,
  height: 1,
  backgroundColor: '#B3B3B3'
},
buttonLoginView:{
 marginTop: 20
},
buttonLogin:{
  backgroundColor: '#FE724C',
  borderRadius: 28,
  width: 248,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center'
},
textButtonLogin:{
  color: CONSTANT.color.background,
  fontWeight: 'bold',
  fontSize: 15,
  lineHeight: 15
},
preImage:{
  
  height: 90,
  width: 90,
  
},
skipButtonView:{
 marginTop: -20,
  height: 50,
  width: 50
}



});
