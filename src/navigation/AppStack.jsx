import React, {lazy, Suspense} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';
import Home from 'src/pages/Home';
import Contacts from 'src/pages/Contacts';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';

// const navigatorList = [
//   {
//     path: SITE_MAP.INDEX.path,
//     Component: Home,
//   },
//   {
//     path: SITE_MAP.CONTACT.path,
//     Component: Contacts,
//   },
// ];
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SITE_MAP.INDEX.name} component={Home} />
      <Stack.Screen name={SITE_MAP.CONTACT.name} component={Contacts} />
      <Stack.Screen name={SITE_MAP.LOGIN} component={Login} />
      <Stack.Screen name={SITE_MAP.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
export default AppStack;
