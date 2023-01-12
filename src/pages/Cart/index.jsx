import {Center, ScrollView} from 'native-base';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Constant from 'src/controller/Constant';
import Utils from 'src/utils/utils';
import CartItem from 'src/components/Cart/CartItem';

const tax_and_fees = 5000;
const delivery = 15000;

const cart_list = [
  {
    title: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 30000,
    image: Constant.images.pizza,
    quantity: 1,
  },
  {
    title: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 30000,
    image: Constant.images.pizza,
    quantity: 1,
  },
  {
    title: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 30000,
    image: Constant.images.pizza,
    quantity: 1,
  },
  {
    title: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 30000,
    image: Constant.images.pizza,
    quantity: 1,
  },
  {
    title: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 30000,
    image: Constant.images.pizza,
    quantity: 1,
  },
];

function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back_btn}>
          <Icon
            name="chevron-back-sharp"
            size={24}
            color={Constant.color.black}></Icon>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Cart</Text>
        </View>
      </View>

      {/* <ScrollView style={styles.scroll_view}> */}
      <View style={styles.list_cart_item}>
        <FlatList
          style={styles.flat_list_item}
          data={cart_list}
          renderItem={(item, index) => <CartItem cart_item={item} />}
        />
      </View>
      {/* </ScrollView> */}

      <View style={styles.promotion_container}>
        <View style={styles.promotion}>
          <TextInput
            style={styles.promotion_input}
            placeholder="Promo Code"
            placeholderTextColor={Constant.color.grey}
          />
          <TouchableOpacity style={styles.promotion_btn}>
            <Text style={styles.promotion_btn_text}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.expense_list}>
        <View style={styles.expense_item_container}>
          <View style={styles.expense_item}>
            <Text style={styles.expense_title}>Sub Total</Text>
            <View style={styles.expense_text}>
              <Text style={styles.expense_price}>
                {Utils.formatPrice(30000, '')}
              </Text>
              <Text style={styles.expense_unit}>đ</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={styles.expense_item_container}>
          <View style={styles.expense_item}>
            <Text style={styles.expense_title}>Tax and Fees</Text>
            <View style={styles.expense_text}>
              <Text style={styles.expense_price}>
                {Utils.formatPrice(tax_and_fees, '')}
              </Text>
              <Text style={styles.expense_unit}>đ</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={styles.expense_item_container}>
          <View style={styles.expense_item}>
            <Text style={styles.expense_title}>Delivery</Text>
            <View style={styles.expense_text}>
              <Text style={styles.expense_price}>
                {Utils.formatPrice(delivery, '')}
              </Text>
              <Text style={styles.expense_unit}>đ</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={styles.expense_item_container}>
          <View style={styles.expense_item}>
            <View style={styles.expense_title_container}>
              <Text style={styles.expense_total}>Total</Text>
              <Text style={styles.expense_subtotal}>(2 items)</Text>
            </View>
            <View style={styles.expense_text}>
              <Text style={styles.expense_price}>
                {Utils.formatPrice(30000, '')}
              </Text>
              <Text style={styles.expense_unit}>đ</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      </View>

      <TouchableOpacity style={styles.checkout_btn}>
        <Text style={styles.checkout_text}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: Constant.screen.width,
    height: Constant.screen.height,
    backgroundColor: Constant.color.background,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: Constant.screen.width * 0.1,
    // backgroundColor: 'red',
    marginTop: Constant.screen.height * 0.045,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back_btn: {
    width: Constant.screen.width * 0.1,
    height: '100%',
    backgroundColor: Constant.color.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constant.screen.width * 0.1 * 0.25,
    // marginLeft: Constant.screen.width * 0.068,
    // backgroundColor: 'yellow',
    position: 'absolute',
    left: Constant.screen.width * 0.065,
    elevation: 5,
    translationZ: 20,
    // backgroundColor: Constant.color.dropShadow,
  },
  title: {
    fontSize: Constant.screen.width * 0.048,
    fontWeight: 'bold',
    color: Constant.color.black,
  },

  // scroll_view: {
  //   width: '100%',
  //   height: Constant.screen.width * 0.88 * 0.25,
  //   backgroundColor: 'yellow',
  // },
  list_cart_item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: Constant.screen.width * 0.08,
    // backgroundColor: 'yellow',
    height: Constant.screen.height * 0.32,
    // backgroundColor: 'yellow',
  },
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
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    // backgroundColor: 'red',
  },
  quantity_btn: {
    width: '33%',
    aspectRatio: 1,
    // width: 28,
    // height: 28,
    borderColor: Constant.color.main,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_quantity_container: {
    width: '34%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_quantity: {
    color: Constant.color.black,
  },

  promotion_container: {
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom: Constant.screen.width * 0.06,
    // backgroundColor: 'yellow',
    position: 'absolute',
    bottom: (Constant.screen.width * 1161) / 1750 + 80,
  },

  promotion: {
    width: Constant.screen.width * 0.88,
    height: (Constant.screen.width * 0.88 * 6) / 33,
    borderRadius: (Constant.screen.width * 0.88 * 6) / 33,
    borderWidth: 1,
    borderColor: Constant.color.border,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    // backgroundColor: '#ccc',
  },
  promotion_input: {
    // backgroundColor: 'yellow',
    width: '60%',
    height: '85%',
    borderRadius: 50,
    color: Constant.color.black,
    justifyContent: 'center',
    position: 'absolute',
    left: 14,
  },
  promotion_btn: {
    backgroundColor: Constant.color.main,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '85%',
    borderRadius: 50,
    position: 'absolute',
    right: (((Constant.screen.width * 0.88 * 6) / 33) * 15) / 100 / 2,
  },
  promotion_btn_text: {
    color: Constant.color.background,
  },
  expense_list: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 100 + (Constant.screen.width * 0.88 * 5) / 35,
  },
  expense_item_container: {
    width: Constant.screen.width * 0.8,
    height: (Constant.screen.width * 0.88 * 1) / 10,
    marginBottom: (Constant.screen.width * 0.88 * 1) / 40,
  },
  expense_item: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    // backgroundColor: 'yellow',
    position: 'relative',
  },
  expense_title: {
    fontSize: Constant.screen.width * 0.048 * 0.8,
    color: Constant.color.black,
    position: 'absolute',
    left: 0,
  },
  expense_title_container: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
  expense_total: {
    fontSize: Constant.screen.width * 0.048 * 0.8,
    fontWeight: 'bold',
    color: Constant.color.black,
    paddingRight: 5,
  },
  expense_subtotal: {
    fontSize: Constant.screen.width * 0.048 * 0.8,
    color: Constant.color.border,
  },
  expense_text: {
    // fontSize: Constant.screen.width * 0.048,
    // color: Constant.color.black,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  expense_price: {
    fontSize: Constant.screen.width * 0.048,
    color: Constant.color.black,
    paddingRight: 5,
    fontWeight: 'bold',
  },
  expense_unit: {
    fontSize: Constant.screen.width * 0.048,
    color: Constant.color.grey,
  },
  line: {
    height: 0,
    width: '100%',
    borderWidth: 0.2,
    borderColor: Constant.color.border,
    position: 'absolute',
    bottom: 0,
  },
  checkout_btn: {
    width: Constant.screen.width * 0.8,
    height: (Constant.screen.width * 0.88 * 5) / 35,
    backgroundColor: Constant.color.main,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ((Constant.screen.width * 0.88 * 5) / 35) * 0.5,
    position: 'absolute',
    bottom: 50,
  },
  checkout_text: {
    textTransform: 'uppercase',
    color: Constant.color.background,
  },
});
