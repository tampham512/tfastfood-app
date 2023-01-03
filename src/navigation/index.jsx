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
    name: SITE_MAP.LOGIN,
    Component: <Login />,
  },
  {
    path: SITE_MAP.REGISTER,
    Component: <Register />,
  },
  {
    path: SITE_MAP.INDEX.path,
    Component: <Home />,
  },
  {
    path: SITE_MAP.CONTACT.path,
    Component: <Contacts />,
  },
];
const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        {/* {navigatorList.map(({name, Component}, index) => (
          <Stack.Navigator key={index}>
            <Stack.Screen name={name} component={Component} />
          </Stack.Navigator>
        ))} */}
        <Stack.Navigator key={1}>
          <Stack.Screen name={'login'} component={Login} />
          <Stack.Screen name={'home'} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};
export default Index;
