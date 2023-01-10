import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AvataUser from 'src/assets/Icons/logo_user.png';
import Constant from 'src/controller/Constant';
import {useDispatch} from 'react-redux';
import {logout} from 'src/redux/slices/authSlice';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const onPressLogout = () => {
    console.log('dispatch');
    dispatch(logout());
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Constant.color.main}}>
        <View style={{padding: 20}}>
          <Image
            source={AvataUser}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: Constant.color.white,
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: Constant.color.white,
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color={Constant.color.white} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: Constant.color.white,
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
