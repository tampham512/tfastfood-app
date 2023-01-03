import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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

const options = [
  {value: 0, key: 0, name: 'Cá Nhân', color: 'cyan.100'},
  {value: 1, key: 1, name: 'Garage', color: 'cyan.100'},
];
const listLogin = [
  {type: 'GOOGLE', key: 'GOOGLE', icon: GooglePlusIcon},
  {type: 'APPLE', key: 'APPLE', icon: AppleIcon},
  {type: 'FACEBOOK', key: 'FACEBOOK', icon: FacebookIcon},
];
const schema = yup.object({
  number_phone: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
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
  const onSubmit = data => alert(JSON.stringify(data));
  const handleRegister = () => alert('Regiter link');
  const handlePressIconLogin = type => alert(type);
  console.log('login');
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#d9463e', flex: 0.5}} />
      <View style={{backgroundColor: '#FFFFFF', flex: 0.5}} />
      <View style={[styles.container]}>
        <View style={styles.containerCenter}>
          <Image source={Logo} style={styles.img} resizeMode="contain" />
          <RadioGroup
            options={options}
            name="category"
            control={control}
            errors={errors}
            defaultValue={0}
          />
          <Input
            control={control}
            errors={errors}
            name="number_phone"
            label="Số điện thoại"
            keyboardType="phone-pad"
          />
          <Input
            control={control}
            errors={errors}
            name="password"
            label="Mật Khẩu"
            secureTextEntry
          />
          <Button title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
          <View style={styles.loginList}>
            {getValues('category') == 0 &&
              listLogin.map(({icon, key, type}) => (
                <View>
                  <Image
                    key={key}
                    source={icon}
                    style={styles.imgloginList}
                    resizeMode="contain"
                  />
                </View>
              ))}
          </View>
        </View>
        <View style={{marginTop: 10}}>
          {/* <Link to="/forgot">
            <Text style={{color: '#d9463e', fontSize: 15}}>Quên mật khẩu?</Text>
          </Link> */}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{marginRight: 10, fontSize: 15, color: '#000'}}>
          Bạn chưa có tài khoản?
        </Text>
        {/* <Link to={SITE_MAP.REGISTER}>
          <View style={{width: 100, marginBottom: 10}}>
            <Button
              title="Đăng ký"
              style={{paddingVertical: 8, borderRadius: 5}}
            />
          </View>
        </Link> */}
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  footer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 4,
  },
  loginList: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  imgloginList: {
    width: 50,
    transform: [{scale: 1.2}],
  },

  img: {
    width: '60%',
  },
});
