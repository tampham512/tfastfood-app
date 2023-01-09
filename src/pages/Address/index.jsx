import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Navigation from 'src/components/Navigation';
import {useNavigation} from '@react-navigation/core';
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Button,
} from 'native-base';
import {auth} from 'src/redux/slices';
import {autoBatchEnhancer} from '@reduxjs/toolkit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';

const Address = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  return (
    <Navigation>
      <View
        style={{
          paddingBottom: 60,
          backgroundColor: '#fff',
          position: 'relative',
        }}>
        <ScrollView>
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
              shadowColor: 'red',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
            }}>
            <Ionicons name="chevron-back-outline" size={22} color={'black'} />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 18,
              color: '#111719',
              marginBottom: 44,
              marginTop: 47,
            }}>
            Add new address
          </Text>
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
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderColor: '#9796A1',
                width: '100%',
                borderRadius: 10,
                backgroundColor: '#fff',
                borderWidth: 1,
              }}>
              <TextInput
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#111719',
                }}
                placeholder="Arlene McCoy">
                Arlene McCoy
              </TextInput>
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
              Mobile number
            </Text>
            <View
              style={{
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderColor: '#9796A1',
                width: '100%',
                borderRadius: 10,
                backgroundColor: '#fff',
                borderWidth: 1,
              }}>
              <TextInput
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#111719',
                }}
                placeholder="018-49862746">
                018-49862746
              </TextInput>
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
              State
            </Text>
            <Select
              selectedValue={state}
              accessibilityLabel="Slect State"
              placeholder="Slect State"
              placeholderTextColor="#111719"
              height="58"
              _selectedItem={{
                endIcon: <CheckIcon size="5" />,
              }}
              borderColor="#9796A1"
              borderRadius={10}
              fontSize="17"
              onValueChange={itemValue => setState(itemValue)}>
              <Select.Item label="HAI CHAU" value="hc" />
            </Select>
          </View>
          <View style={{paddingHorizontal: 18, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#9796A1',
                marginBottom: 12,
              }}>
              City
            </Text>
            <Select
              selectedValue={city}
              accessibilityLabel="Select City"
              placeholder="Select City"
              height="58"
              placeholderTextColor="#111719"
              _selectedItem={{
                endIcon: <CheckIcon size="5" />,
              }}
              borderColor="#9796A1"
              borderRadius={10}
              fontSize="17"
              onValueChange={itemValue => setCity(itemValue)}>
              <Select.Item label="HAI CHAU" value="hc" />
            </Select>
          </View>
          <View style={{paddingHorizontal: 18, marginBottom: 30}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#9796A1',
                marginBottom: 12,
              }}>
              Street (Include house number)
            </Text>
            <View
              style={{
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderColor: '#9796A1',
                width: '100%',
                borderRadius: 10,
                backgroundColor: '#fff',
                borderWidth: 1,
              }}>
              <TextInput
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#111719',
                }}
                placeholder="Street"></TextInput>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              width={240}
              height="50"
              paddingX={50}
              backgroundColor="#FE724C"
              borderRadius={30}>
              <Text style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
                Save
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default Address;
