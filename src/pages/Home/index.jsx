import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from 'src/components/Header';
import Constant from 'src/controller/Constant';
function Index() {
  const navigation = useNavigation();
  const handleClickAvata = () => {
    console.log('oke');

    navigation.openDrawer();
  };
  return (
    <View style={{backgroundColor: Constant.color.white}}>
      <Header />
      <View style={{backgroundColor: Constant.color.white}}>
        <Text>Home</Text>
      </View>
    </View>
  );
}

export default Index;
