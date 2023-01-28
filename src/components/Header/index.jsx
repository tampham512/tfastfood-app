import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import AvataUser from 'src/assets/Icons/logo_user.png';
import Constant from 'src/controller/Constant';
import {SITE_MAP} from 'src/utils/constants/Path';
function Index() {
  const navigation = useNavigation();
  const cartData = useSelector(state => state.cart);
  const favoriteData = useSelector(state => state.favorite);

  const handleShowSidebar = () => {
    console.log('hehe');
    navigation.openDrawer();
  };
  const handleTo = name => () => {
    navigation.navigate(name);
  };
  const handleToCart = () => {
    navigation.navigate(SITE_MAP.CART);
  };
  const handleToOrderHistory = () => {
    navigation.navigate(SITE_MAP.ORDER);
  };
  const handleToFavorite = () => {
    navigation.navigate(SITE_MAP.FAVORITE);
  };
  const handleToProfile = () => {
    navigation.navigate(SITE_MAP.FAVORITE);
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
          backgroundColor: Constant.color.main,
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
        <Ionicons name="reorder-three-outline" size={38} color={Constant.color.background} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            height: 38,
            width: 38,
            borderRadius: 5,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleTo(SITE_MAP.ORDER)}>
          <Ionicons
            name="file-tray-full-outline"
            size={28}
            color={Constant.color.main}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 38,
            width: 38,
            borderRadius: 5,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          onPress={handleTo(SITE_MAP.FAVORITE)}>
          <Ionicons
            name="heart-outline"
            size={28}
            color={Constant.color.main}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              width: 20,
              height: 16,
              left: '45%',
              backgroundColor: Constant.color.main,
              borderRadius: 100,
              shadowColor: Constant.color.gray,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
              color: Constant.color.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: Constant.color.white,
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: Constant.color.white,
                fontSize: 11,
              }}>
              {favoriteData?.value && favoriteData.value.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 38,
            width: 38,
            borderRadius: 5,
            marginBottom: 5,

            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}
          onPress={handleTo(SITE_MAP.CART)}>
          <Ionicons name="cart-outline" size={28} color={Constant.color.main} />
          <View
            style={{
              position: 'absolute',
              top: 0,
              width: 20,
              height: 16,
              left: '45%',
              backgroundColor: Constant.color.main,
              borderRadius: 100,
              shadowColor: Constant.color.gray,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
              color: Constant.color.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: Constant.color.white,
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: Constant.color.white,
                fontSize: 11,
              }}>
              {cartData?.value && cartData.value.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTo(SITE_MAP.PROFILE)}>
          <Image
            source={AvataUser}
            style={{height: 38, width: 38, borderRadius: 10, marginBottom: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Index;
