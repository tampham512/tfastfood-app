import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {Suspense, useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useMount from 'src/hooks/useMount';
import {isLoginIn, login, updateInfoUser} from 'src/redux/slices/authSlice';
import {useLazyGetUserQuery} from 'src/services/AuthAPI';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Index = () => {
  const {isLoading, userInfo, accessToken} = useSelector(state => state.auth);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ userInfo', userInfo);

  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', accessToken);

  const dispatch = useDispatch();

  useMount(async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const userInfo = await AsyncStorage.getItem('userInfo');
      console.log(accessToken);
      console.log(userInfo);
      if (accessToken && JSON.parse(userInfo)) {
        dispatch(updateInfoUser({userInfo: JSON.parse(userInfo)}));
        dispatch(login({accessToken}));
      }
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <NavigationContainer>
      {accessToken ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};
export default Index;
