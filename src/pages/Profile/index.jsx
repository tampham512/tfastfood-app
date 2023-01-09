import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Navigation from 'src/components/Navigation';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Navigation>
      <View style={{paddingBottom: 20, backgroundColor: 'white'}}>
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
              left: '36%',
              zIndex: 9,
            }}>
            <Image
              source={require('../../assets/Icons/logo_user.png')}
              style={{
                height: 108,
                width: 108,
                borderRadius: 100,
                borderWidth: 8,
                borderColor: 'white',
              }}></Image>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#000000',
                  marginTop: 6,
                }}>
                Eljad Eendaz
              </Text>
              <Text
                style={{fontSize: 14, fontWeight: '400', color: '#9796A1'}}
                // onPress={() => navigation.navigate('home')}
              >
                Edit Profile
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              width: 38,
              height: 38,
              borderRadius: 12,
              backgroundColor: 'white',
              justifyContent: 'center',
              top: 37,
              left: 32,
              alignItems: 'center',
            }}>
            <Ionicons name="chevron-back-outline" size={22} color={'black'} />
          </View>
          <View
            style={{paddingHorizontal: 18, marginBottom: 30, marginTop: 90}}>
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
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default Profile;
