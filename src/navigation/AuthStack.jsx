import React, {lazy} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SITE_MAP} from '../utils/constants/Path';
import {NavigationContainer} from '@react-navigation/native';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import Intro from 'src/pages/Intro';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SITE_MAP.INTRO}>
      <Stack.Screen name={SITE_MAP.INTRO} component={Intro} />
      <Stack.Screen name={SITE_MAP.LOGIN} component={Login} />
      <Stack.Screen name={SITE_MAP.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;
