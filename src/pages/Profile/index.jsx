import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Navigation from 'src/components/Navigation';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Constant from 'src/controller/Constant';
import {ButtonBack} from 'src/components/Button/ButtonBack';
import {SITE_MAP} from 'src/utils/constants/Path';

const Profile = () => {
  const navigation = useNavigation();
  const {userInfo} = useSelector(state => state.auth);
  return (
    <View style={{paddingBottom: 20, backgroundColor: 'white'}}>
      <ButtonBack pathBack={SITE_MAP.INDEX} />
      <ScrollView>
        <View style={{position: 'relative'}}>
          <TouchableOpacity>
            <Image
              style={{height: 240, width: '100%'}}
              source={require('../../assets/Icons/Group.png')}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: '16%',

            left: Constant.screen.width / 2 - 54,
            zIndex: 9,
            justifyContent: 'center',
            width: '100%',
          }}>
          <Image
            source={require('../../assets/Icons/logo_user.png')}
            style={{
              height: 108,
              width: 108,
              borderRadius: 100,
              borderWidth: 8,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
        <View style={{width: '100%', textAlign: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#000000',

              textAlign: 'center',
            }}>
            {userInfo?.full_name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#9796A1',
              textAlign: 'center',
            }}>
            Edit Profile
          </Text>
        </View>

        <View style={{paddingHorizontal: 18, marginBottom: 10, marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Full Name
          </Text>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <Text style={{fontSize: 17, fontWeight: '600', color: '#111719'}}>
              {userInfo.full_name || ''}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Email
          </Text>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <Text style={{fontSize: 17, fontWeight: '600', color: '#111719'}}>
              {userInfo.email || ''}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Phone Number
          </Text>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <Text style={{fontSize: 17, fontWeight: '600', color: '#111719'}}>
              {userInfo.phone_number || ''}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
