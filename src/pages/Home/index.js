import React from 'react';
import {View, Text} from 'react-native';
import Navigation from '@/components/Navigation';
function Index({navigation}) {
  return (
    <Navigation navigation={navigation}>
      <Text>Home</Text>
    </Navigation>
  );
}

export default Index;
