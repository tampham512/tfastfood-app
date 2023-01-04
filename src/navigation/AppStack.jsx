import React, {lazy} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const navigatorList = [
  {
    name: SITE_MAP.LOGIN,
    Component: Login,
  },
  {
    path: SITE_MAP.REGISTER,
    Component: Register,
  },
];
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {navigatorList.map(({name, Component}, index) => (
        <Stack.Screen name={name} component={Component} key={index} />
      ))}
    </Stack.Navigator>
  );
};
export default AppStack;
