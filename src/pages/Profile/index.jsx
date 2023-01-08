import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Navigation from 'src/components/Navigation';
import {useNavigation} from '@react-navigation/core';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Navigation>
      <View style={{paddingBottom: 60, backgroundColor: '#fff'}}>
        <ScrollView>
          <View style={{position: 'absolute', top: 0, left: 0}}>
            <TouchableOpacity>
              {/* <Image source={require('../../assets/Icons/Group.png')}></Image> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            {/* <Image
              source={''}
              style={{height: 108, width: 108, borderRadius: 100}}></Image> */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000',
                marginTop: 13,
                marginBottom: 2,
              }}>
              kingbct
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: '#9796A1'}}
              // onPress={() => navigation.navigate('home')}
            >
              Edit Profile
            </Text>
          </View>
          {/* <View
            style={{
              marginBottom: 50,
              marginTop: 20,
              marginLeft: 20,
              backgroundColor: '#fff',
              width: 50,
              borderRadius: 12,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'red',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Icons/back.png')}
                style={{height: 26, width: 26}}></Image>
            </TouchableOpacity>
          </View> */}
          {/* <View
            style={{
              alignItems: 'center',
              marginBottom: 34,
            }}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={{height: 108, width: 108, borderRadius: 100}}></Image>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000',
                marginTop: 13,
                marginBottom: 2,
              }}>
              kingbct
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: '#9796A1'}}
              // onPress={() => navigation.navigate('home')}
            >
              Edit Profile
            </Text>
          </View>
          <View style={{paddingHorizontal: 18, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#9796A1',
                marginBottom: 12,
              }}>
              Full name
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
                kingbct
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 18, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#9796A1',
                marginBottom: 12,
              }}>
              E-mail
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
                prelookstudio@gmail.com
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 18, marginBottom: 30}}>
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
                +1 (783) 0986 8786
              </Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default Profile;
