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
  const [getUsers] = useLazyGetUserQuery();

  const {isLoading, userInfo, accessToken} = useSelector(state => state.auth);
  console.log('🚀 ~ file: index.jsx:ấ9 ~ Index ~ userInfo', userInfo);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', isLoading);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', accessToken);
  // const token = await AsyncStorage.getItem('accessToken');
  // console.log('🚀 ~ file: index.jsx:14 ~ Index ~ token', token);
  // useEffect(() => {
  //   getUsers({})
  //     .unwrap()
  //     .then(resUser => {
  //       console.log('🚀 ~ file: index.jsx:98 ~ onSubmit ~ resUser', resUser);

  //       const payload = {
  //         userInfo: resUser.userInfo,
  //       };

  //       dispatch(updateInfoUser(payload));
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [accessToken]);

  return (
    <NavigationContainer>
      {/* {accessToken ? <AppStack /> : <AuthStack />} */}
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};
export default Index;
