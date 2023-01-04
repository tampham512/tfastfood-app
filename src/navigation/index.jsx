import {NavigationContainer} from '@react-navigation/native';
import {Suspense} from 'react';
import {Text} from 'react-native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Index = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <AuthStack />
        <AppStack />
      </NavigationContainer>
    </Suspense>
  );
};
export default Index;
