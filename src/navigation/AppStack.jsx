import React, {lazy, Suspense} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';
import Home from 'src/pages/Home';
import Contacts from 'src/pages/Contacts';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from 'src/components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';
import Details from 'src/pages/Details';
import Address from 'src/pages/Address';
import Profile from 'src/pages/Profile';
import Favorite from 'src/pages/Favorite';
import ProductsList from 'src/pages/ProductsList';
import Categories from 'src/pages/Categories';
import Reviews from 'src/pages/Reviews';
import Rating from 'src/pages/rating';
import RatingService from 'src/pages/RatingService';
import Order from 'src/pages/Order';
import Cart from 'src/pages/Cart';

const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Constant.color.main,
        drawerActiveTintColor: Constant.color.white,
        drawerInactiveTintColor: Constant.color.gray,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name={SITE_MAP.INDEX}
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.CONTACT}
        component={Contacts}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.LOGIN}
        component={Login}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.REGISTER}
        component={Register}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.DETAILS}
        component={Details}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.ADDRESS}
        component={Address}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.PROFILE}
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.FAVORITE}
        component={Favorite}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.PRODUCT_LIST}
        component={Categories}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rating"
        component={Rating}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.RATINGSERVICE}
        component={RatingService}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.REVIEWS}
        component={Reviews}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.ORDER}
        component={Order}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.CART}
        component={Cart}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default AppStack;
