import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {Suspense, useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {updateInfoUser} from 'src/redux/slices/authSlice';
import {useLazyGetUserQuery} from 'src/services/AuthAPI';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Index = () => {
  // const [getUsers, data] = useLazyGetUserQuery();
  // console.log('🚀 ~ file: index.jsx:12 ~ Index ~ data', data);

  const {isLoading, userInfo, accessToken} = useSelector(state => state.auth);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ userInfo', userInfo);
  // console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', isLoading);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', accessToken);
  // const token = AsyncStorage.getItem('accessToken');
  // console.log('🚀 ~ file: index.jsx:14 ~ Index ~ token', token);
  // useEffect(() => {
  //   if (accessToken) {
  //     console.log(
  //       '🚀 ~ file: index.jsx:21 ~ useEffect ~ accessToken',
  //       accessToken,
  //     );

  //     getUsers()
  //       .unwrap()
  //       .then(resUser => {
  //         console.log('🚀 ~ file: index.jsx:30 ~ useEffect ~ resUser', resUser);
  //         // console.log('resUser', resUser);

  //         const payload = {
  //           userInfo: resUser.userInfo,
  //         };

  //         dispatch(updateInfoUser(payload));
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }, [accessToken]);

  return (
    <NavigationContainer>
      {accessToken && userInfo ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};
export default Index;
