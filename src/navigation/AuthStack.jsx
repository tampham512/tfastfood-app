import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from 'src/pages/Intro';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import {SITE_MAP} from '../utils/constants/Path';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SITE_MAP.INTRO} component={Intro} />
      <Stack.Screen name={SITE_MAP.LOGIN} component={Login} />
      <Stack.Screen name={SITE_MAP.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;
