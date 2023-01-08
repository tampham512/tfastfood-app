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
        name={SITE_MAP.INDEX.name}
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SITE_MAP.CONTACT.name}
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
    </Drawer.Navigator>
  );
};
export default AppStack;
