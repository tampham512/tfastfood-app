import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Constant from 'src/controller/Constant';
import {removeItemFavorite} from 'src/redux/slices/favoriteSlice';
import Utils from 'src/utils/utils';

const FavoriteItem = ({item}) => {
  item = item.item;

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFavorite(item));
  };
  return (
    <View style={styles.cart_item}>
      <Image
        style={styles.item_image}
        source={{
          uri: `${Constant.REACT_APP_API_URL}${item?.product?.img01}`,
        }}
      />
      <View style={styles.item_info_container}>
        <View style={styles.item_info}>
          <Text style={styles.item_title}>{item?.product?.name}</Text>

          <Text style={styles.item_price}>
            {Utils.formatPrice(item?.price, 'đ')}
          </Text>
        </View>
        <View style={styles.item_action}>
          <TouchableOpacity style={styles.delete_btn} onPress={removeItem}>
            <Icon
              name="close-outline"
              size={24}
              color={Constant.color.main}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  cart_item: {
    width: Constant.screen.width * 0.92,
    height: Constant.screen.width * 0.88 * 0.25,
    marginBottom: Constant.screen.width * 0.066,
    flexDirection: 'row',
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 38,
    elevation: 5,
    backgroundColor: 'white',
    paddingRight: 10,
    // backgroundColor: '#ccc',
  },
  item_image: {
    width: '25%',
    aspectRatio: 1,
    borderRadius: 15,
    // resizeMode: 'contain',
    resizeMode: 'cover',
  },
  item_info_container: {
    flexDirection: 'row',
    width: '75%',
    height: '100%',
    position: 'relative',
    // backgroundColor: 'green',
  },
  item_info: {
    width: '70%',
    height: '100%',
    // backgroundColor: 'green',
  },
  item_title: {
    marginLeft: Constant.screen.width * 0.05,
    fontSize: Constant.screen.width * 0.048,
    fontWeight: 'bold',
    color: Constant.color.black,
    height: 64,
  },
  item_description: {
    marginLeft: Constant.screen.width * 0.05,
    marginTop: Constant.screen.width * 0.021,
    marginBottom: Constant.screen.width * 0.03,
    fontSize: Constant.screen.width * 0.048 * 0.7,
    color: Constant.color.grey,
  },
  item_price: {
    marginLeft: Constant.screen.width * 0.05,
    fontSize: Constant.screen.width * 0.048 * 0.89,
    fontWeight: 'bold',
    color: Constant.color.main,
  },
  item_action: {
    width: '30%',
    flexDirection: 'column',
    position: 'relative',
    // backgroundColor: 'yellow'
  },
  delete_btn: {
    position: 'absolute',
    right: 0,
  },
  item_quantity_action: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    // backgroundColor: 'red',
  },
  quantity_btn: {
    width: '30%',
    // width: 24,
    aspectRatio: 1,
    // height: 24,
    // width: 28,
    // height: 28,
    borderColor: Constant.color.main,
    borderWidth: 0.5,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  item_quantity_container: {
    width: '33%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  item_quantity: {
    color: Constant.color.black,
  },
});
