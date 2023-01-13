import {Center, ScrollView} from 'native-base';
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';
import Utils from 'src/utils/utils';

const CartItem = ({cart_item}) => {
  cart_item = cart_item.item;
  console.log(cart_item);
  const [quantity, setCount] = useState(cart_item.quantity);
  const handleIncreaseItem = () => setCount(prevCount => prevCount + 1);
  const handleDecreaseItem = () =>
    setCount(prevCount => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  return (
    <View style={styles.cart_item}>
      <Image style={styles.item_image} source={cart_item?.image} />
      <View style={styles.item_info_container}>
        <View style={styles.item_info}>
          <Text style={styles.item_title}>{cart_item?.title}</Text>
          <Text style={styles.item_description}>{cart_item?.description}</Text>
          <Text style={styles.item_price}>
            {Utils.formatPrice(cart_item?.price, 'đ')}
          </Text>
        </View>
        <View style={styles.item_action}>
          <TouchableOpacity style={styles.delete_btn}>
            <Icon
              name="close-outline"
              size={24}
              color={Constant.color.main}></Icon>
          </TouchableOpacity>
          <View style={styles.item_quantity_action}>
            <TouchableOpacity onPress={handleDecreaseItem}>
              <Icon
                name="remove-circle-outline"
                size={24}
                color={Constant.color.main}></Icon>
            </TouchableOpacity>
            <View style={styles.item_quantity_container}>
              <Text style={styles.item_quantity}>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={handleIncreaseItem}>
              <Icon
                name="add-circle"
                size={24}
                color={Constant.color.main}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cart_item: {
    width: Constant.screen.width * 0.88,
    height: Constant.screen.width * 0.88 * 0.25,
    marginBottom: Constant.screen.width * 0.066,
    flexDirection: 'row',
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
