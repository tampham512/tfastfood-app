import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvataUser from 'src/assets/Icons/logo_user.png';
import Constant from 'src/controller/Constant';
function Index() {
  const navigation = useNavigation();

  const handleShowSidebar = () => {
    console.log('hehe');
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        // height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Constant.color.white,
      }}>
      <TouchableOpacity
        style={{
          height: 38,
          width: 38,
          borderRadius: 5,
          marginBottom: 10,
          backgroundColor: Constant.color.white,
          shadowColor: Constant.color.gray,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5,
        }}
        onPress={handleShowSidebar}>
        <Ionicons name="reorder-three-outline" size={38} />
      </TouchableOpacity>

      <Image
        source={AvataUser}
        style={{height: 38, width: 38, borderRadius: 10, marginBottom: 10}}
      />
    </View>
  );
}

export default Index;
