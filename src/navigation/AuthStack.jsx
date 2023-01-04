import React, {lazy} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';
import {NavigationContainer} from '@react-navigation/native';

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
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SITE_MAP.LOGIN}>
      <Stack.Screen name={SITE_MAP.LOGIN} component={Login} />
      <Stack.Screen name={SITE_MAP.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;
