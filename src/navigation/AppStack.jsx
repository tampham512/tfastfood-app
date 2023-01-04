import React, {lazy, Suspense} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));

const navigatorList = [
  {
    path: SITE_MAP.INDEX.path,
    Component: Home,
  },
  {
    path: SITE_MAP.CONTACT.path,
    Component: Contacts,
  },
];
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SITE_MAP.INDEX.name}>
      <Stack.Screen name={SITE_MAP.INDEX.name} component={Home} />
      <Stack.Screen name={SITE_MAP.CONTACT.name} component={Contacts} />
    </Stack.Navigator>
  );
};
export default AppStack;
