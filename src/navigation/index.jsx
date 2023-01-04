import {NavigationContainer} from '@react-navigation/native';
import {Suspense} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Index = () => {
  const {isLoading, userInfo, accessToken} = useSelector(state => state.auth);
  console.log('🚀 ~ file: index.jsx:ấ9 ~ Index ~ userInfo', userInfo);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', isLoading);
  console.log('🚀 ~ file: index.jsx:9 ~ Index ~ isLoading', accessToken);

  return (
    <NavigationContainer>
      {/* {accessToken ? <AppStack /> : <AuthStack />} */}
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};
export default Index;
