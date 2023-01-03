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
    component: <Login />,
  },
  {
    path: SITE_MAP.REGISTER,
    component: <Register />,
  },
  {
    path: SITE_MAP.INDEX.path,
    component: <Home />,
  },
  {
    path: SITE_MAP.CONTACT.path,
    component: <Contacts />,
  },
];
const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        {navigatorList.map(({name, component}, index) => (
          <Stack.Navigator key={index}>
            <Stack.Screen name={name} component={component} />
          </Stack.Navigator>
        ))}
      </NavigationContainer>
    </Suspense>
  );
};
export default Index;
