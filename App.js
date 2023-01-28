import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from 'src/navigation';
import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';

import store from 'src/redux/store';
import {Provider} from 'react-redux';
import {useEffect} from 'react';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'#d9463e'}
          />
          <Navigation />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
