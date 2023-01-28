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
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AvataUser from 'src/assets/Icons/logo_user.png';
import Constant from 'src/controller/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from 'src/redux/slices/authSlice';
import {SITE_MAP} from 'src/utils/constants/Path';
import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';
import {clear} from 'src/redux/slices/cartSlice';
import {removeItemFavorite} from 'src/redux/slices/favoriteSlice';
import {removeItemsAddress} from 'src/redux/slices/addressSlice';
import {removePathHistory} from 'src/redux/slices/commonSlice';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.auth);
  const navigation = useNavigation();
  const onPressLogout = () => {
    dispatch(logout());
    dispatch(clear());
    dispatch(removeItemFavorite());
    dispatch(removeItemsAddress());
    dispatch(removePathHistory());
  };
  const goTo = name => () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate(name);
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
              textTransform: 'capitalize',
            }}>
            {userInfo?.username}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: Constant.color.white,
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              No Coins
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
          {/* <DrawerItemList {...props} /> */}
          <DrawerItem
            label="My Order"
            onPress={goTo(SITE_MAP.ORDER)}
            icon={({color}) => (
              <Ionicons
                name="cart"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
          <DrawerItem
            label="My Profile"
            onPress={goTo(SITE_MAP.PROFILE)}
            icon={({color}) => (
              <Ionicons
                name="person"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
          <DrawerItem
            label="My Favorite"
            onPress={goTo(SITE_MAP.FAVORITE)}
            icon={({color}) => (
              <Ionicons
                name="heart-circle"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
          <DrawerItem
            label="Delivery Address"
            onPress={goTo(SITE_MAP.ADDRESS)}
            icon={({color}) => (
              <Ionicons
                name="location"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
          <DrawerItem
            label="Contact Us"
            onPress={goTo(SITE_MAP.INDEX)}
            icon={({color}) => (
              <Ionicons
                name="mail-unread"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
          <DrawerItem
            label="Setting"
            onPress={goTo(SITE_MAP.INDEX)}
            icon={({color}) => (
              <Ionicons
                name="settings"
                size={22}
                color={color}
                style={{marginRight: -25}}
              />
            )}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={onPressLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color={Constant.color.main} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: Constant.color.main
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
