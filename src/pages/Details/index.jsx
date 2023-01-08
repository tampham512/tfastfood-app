import React, {useState} from 'react';
import {Image, TouchableOpacity, View, ScrollView, Text} from 'react-native';
import Navigation from 'src/components/Navigation';
import {Radio, Center, NativeBaseProvider} from 'native-base';

const Details = () => {
  const [value, setValue] = React.useState('one');
  return (
    <Navigation>
      <View
        style={{
          position: 'relative',
          zIndex: 1,
          paddingHorizontal: 22,
          paddingVertical: 27,
        }}>
        <ScrollView>
          <View
            style={{
              marginBottom: 50,
              marginTop: 10,
              marginLeft: 8,
              backgroundColor: '#fff',
              width: 50,
              borderRadius: 12,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'red',
              position: 'absolute',
              zIndex: 9,
            }}>
            <TouchableOpacity>
              {/* <Image
                source={require('../../assets/Icons/back.png')}
                style={{height: 26, width: 26}}></Image> */}
            </TouchableOpacity>
          </View>
          <View>
            {/* <Image
              source={require('../../assets/card.png')}
              style={{
                height: 220,
                width: '100%',
              }}></Image> */}
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
            {/* <Image
              source={require('../../assets/Icons/star.png')}
              style={{height: 26, width: 26}}></Image> */}
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
            <Text style={{fontSize: 17, fontWeight: '500', color: '#FE724C'}}>
              $9.50
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <Image
                source={require('../../assets/Icons/minus.png')}
                style={{height: 24, width: 24}}></Image> */}
              <Text
                style={{
                  marginHorizontal: 10,
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                20
              </Text>
              {/* <Image
                source={require('../../assets/Icons/plus.png')}
                style={{height: 32, width: 32}}></Image> */}
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
                  {/* <Image
                    source={require('../../assets/Icons/card2.png')}
                    style={{height: 50, width: 50, marginRight: 10}}></Image> */}
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
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
                  {/* <Image
                    source={require('../../assets/Icons/card2.png')}
                    style={{height: 50, width: 50, marginRight: 10}}></Image> */}
                  <Text
                    style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>
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
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default Details;
