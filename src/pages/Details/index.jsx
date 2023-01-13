import React, {useState} from 'react';
import {Image, TouchableOpacity, View, ScrollView, Text} from 'react-native';
import Navigation from 'src/components/Navigation';
import {Radio, Center, NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = () => {
  const [value, setValue] = React.useState('one');
  return (
    <Navigation>
      <View
        style={{
          zIndex: 1,
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
              zIndex: 8,
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
          <View style={{paddingHorizontal: 22, paddingVertical: 27}}>
            <View>
              <Image
                source={require('../../assets/Icons/card.png')}
                style={{
                  height: 206,
                  width: '100%',
                  borderRadius: 15,
                }}></Image>
            </View>
            <Text
              style={{
                color: '323643',
                fontSize: 28,
                fontWeight: '600',
                marginTop: 22,
              }}>
              Ground Beef Tacos
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
              }}>
              <Ionicons name="star" size={22} color={'yellow'} />

              <Text
                style={{
                  color: '#111719',
                  fontSize: 14,
                  fontWeight: '600',
                  marginRight: 5,
                  marginLeft: 9,
                }}>
                4.5
              </Text>
              <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
                (30+)
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 24, fontWeight: '500', color: '#FE724C'}}>
                $9.50
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="remove-circle-sharp"
                  size={30}
                  color="#FE724C"
                />
                <Text
                  style={{
                    marginHorizontal: 10,
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  20
                </Text>
                <Ionicons name="add-circle-sharp" size={30} color="#FE724C" />
              </View>
            </View>
            <Text
              style={{
                color: '#858992',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 24,
                marginTop: 25,
              }}>
              Brown the beef better. Lean ground beef – I like to use 85% lean
              angus. Garlic – use fresh chopped. Spices – chili powder, cumin,
              onion powder.
            </Text>
            <View>
              <Text
                style={{
                  color: '#323643',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 22,
                }}>
                Choice of Add On
              </Text>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 12,
                    width: '100%',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../assets/Icons/card.png')}
                      style={{height: 50, width: 50, marginRight: 10}}></Image>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '400',
                      }}>
                      Pepper Julienned
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '400',
                        marginRight: 10,
                      }}>
                      +$2.30
                    </Text>
                    <Radio colorScheme="orange" value="one"></Radio>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 12,
                    width: '100%',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../assets/Icons/card.png')}
                      style={{height: 50, width: 50, marginRight: 10}}></Image>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '400',
                      }}>
                      Pepper Julienned
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 14,
                        fontWeight: '400',
                        marginRight: 10,
                      }}>
                      +$2.30
                    </Text>
                    <Radio colorScheme="orange" value="tow"></Radio>
                  </View>
                </View>
              </Radio.Group>
            </View>
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default Details;
