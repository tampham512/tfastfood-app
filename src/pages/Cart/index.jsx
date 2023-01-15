import {Center, ScrollView, useToast} from 'native-base';
import React, {useMemo, useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
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
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SITE_MAP} from 'src/utils/constants/Path';
import {
  useLazyGetDiscountsQuery,
  useOrderBillMutation,
} from 'src/services/OrderAPI';
import {useGetProvincesQuery} from 'src/services/ProvincesAPI';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonBack} from 'src/components/Button/ButtonBack';
import {updatePathHistory} from 'src/redux/slices/commonSlice';
import useUnmount from 'src/hooks/useUnmount';
import Alert from 'src/components/Alert';
import {clear} from 'src/redux/slices/cartSlice';

const DELIVERY = {
  48: 15000,
  49: 20000,
};

function Cart() {
  const [getDiscountLazy] = useLazyGetDiscountsQuery();
  const address = useSelector(state => state.address);
  const toast = useToast();
  console.log('🚀 ~ file: index.jsx:35 ~ Cart ~ address', address);

  const [discountString, setDiscountString] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');
  const [discountTotal, setDiscountTotal] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [orderBillProduct] = useOrderBillMutation();

  const dataCart = useSelector(state => state.cart);
  const {userInfo} = useSelector(state => state.auth);
  const {navigate, dispatch: dispatchNavi} = useNavigation();

  const subPrice = useMemo(() => {
    return (
      dataCart?.value?.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0,
      ) || 0
    );
  }, [dataCart]);
  const totalDelivery = useMemo(() => {
    if (address?.value?.ward?.code)
      return DELIVERY?.[address?.value?.state?.code] || 0;
    return 0;
  }, [address?.value]);

  const totalPrice = useMemo(
    () => subPrice - discountTotal + totalDelivery,
    [subPrice, discountTotal],
  );

  const handleGetDiscount = () => {
    setDiscountTotal(0);
    setDiscountMessage('');
    console.log(discountString);
    getDiscountLazy()
      .unwrap()
      .then(data => {
        const getDiscount = data?.discounts?.filter(
          item => item.idDiscount === discountString,
        );
        if (getDiscount.length > 0) {
          const time_start = new Date(getDiscount[0].time_start);
          const time_end = new Date(getDiscount[0].time_end);
          const date = new Date();

          if (getDiscount[0].time_start === null) {
            if (
              getDiscount[0].quatity <= getDiscount[0].quatity_used &&
              getDiscount[0].quatity !== 0
            ) {
              setDiscountError('Out of use');
            } else {
              if (getDiscount[0].unit === 0) {
                setDiscountTotal((getDiscount[0].value / 100) * totalPrice);
                setDiscountMessage(` (Discount ${getDiscount[0].value}%) `);
              } else {
                setDiscountTotal(getDiscount[0].value);
                setDiscountMessage(
                  ` (Discount ${numberWithCommasTotal(getDiscount[0].value)})`,
                );
              }
            }
          } else {
            if (time_start <= date && date <= time_end) {
              if (
                getDiscount[0].quatity <= getDiscount[0].quatity_used &&
                getDiscount[0].quatity !== 0
              ) {
                setDiscountError('Out of use!');
              } else {
                if (getDiscount[0].unit === 0) {
                  setDiscountTotal((getDiscount[0].value / 100) * totalPrice);
                  setDiscountMessage(`(Discount ${getDiscount[0].value}%) `);
                } else {
                  setDiscountTotal(getDiscount[0].value);
                  setDiscountMessage(
                    ` (Discount ${numberWithCommasTotal(
                      getDiscount[0].value,
                    )})`,
                  );
                }
              }
            } else {
              if (time_start > date) {
                setDiscountError('The discount code has not been opened');
              } else {
                setDiscountError('The discount code has expired');
              }
            }
          }
        } else {
          setDiscountError('The discount code does not exist!');
        }
      });
  };
  const handleGoToCheckOut = () => {
    if (!address?.value?.ward?.code) {
      toast.show({
        placement: 'top',
        render: () => (
          <Alert
            color="error"
            status="error"
            content="Please Choose Delivery Address"
          />
        ),
      });
      return;
    }
    if (dataCart?.value?.length > 0) {
      const data = {
        email: 'pttquangnam@gmail.com',
        full_name: 'Phạm Thanh Tâm',
        mobile_phone: '0339045945',
        id_user: userInfo?.id,
        product_list: dataCart?.value,
        total_price: totalPrice - discountTotal + totalDelivery,
        andress: `${address?.value?.street}, ${address?.value?.ward?.name}, ${address?.value?.district?.name}, ${address?.value?.state?.name}`,
      };
      orderBillProduct(data)
        .unwrap()
        .then(res => {
          dispatch(clear());
          toast.show({
            placement: 'top',
            render: () => (
              <Alert color="success" status="success" content="Order Success" />
            ),
          });
          const pushAction = DrawerActions.jumpTo(SITE_MAP.ORDER);
          dispatchNavi(pushAction);
        });
    }

    // navigate(SITE_MAP.ORDER);
  };
  const handleChangeAddress = () => {
    navigate(SITE_MAP.ADDRESS);
  };

  const route = useRoute();
  const dispatch = useDispatch();

  useUnmount(() => {
    dispatch(updatePathHistory({pathHistory: route.name}));
    console.log('v');
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <ButtonBack pathBack={SITE_MAP.INDEX} />
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Cart</Text>
          </View>

          <TouchableOpacity
            onPress={handleChangeAddress}
            style={{
              position: 'absolute',

              right: Constant.screen.width * 0.065,
              height: 38,
              width: 38,
              borderRadius: 38,
              backgroundColor: Constant.color.white,
              shadowColor: Constant.color.gray,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 38,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <Ionicons name="location" size={28} color={Constant.color.main} />
          </TouchableOpacity>
        </View>

        {/* <ScrollView style={styles.scroll_view}> */}
        {}
        <View style={styles.list_cart_item}>
          {dataCart?.value?.length > 0 ? (
            <FlatList
              style={styles.flat_list_item}
              data={dataCart?.value}
              renderItem={(item, index) => <CartItem cart_item={item} />}
            />
          ) : (
            <Text style={{textAlign: 'left', width: '100%', marginLeft: 60}}>
              No empty item.
            </Text>
          )}
        </View>
        {/* </ScrollView> */}

        <View style={styles.promotion_container}>
          <View style={styles.promotion}>
            <TextInput
              style={styles.promotion_input}
              placeholder="Promo Code"
              placeholderTextColor={Constant.color.grey}
              onChangeText={value => setDiscountString(value)}
              value={discountString}
            />
            <TouchableOpacity
              style={styles.promotion_btn}
              onPress={handleGetDiscount}>
              <Text style={styles.promotion_btn_text}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 40}}>
            {discountMessage && (
              <Text
                style={{
                  color: Constant.color.main,
                  textAlign: 'left',
                  marginLeft: 10,
                  width: '100%',
                }}>
                {discountMessage}
              </Text>
            )}
            {discountError && (
              <Text
                style={{
                  color: 'green',
                  textAlign: 'left',
                  marginLeft: 10,
                  width: '100%',
                }}>
                {discountError}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.expense_list}>
          <View style={styles.expense_item_container}>
            <View style={styles.expense_item}>
              <Text style={styles.expense_title}>Sub Total</Text>
              <View style={styles.expense_text}>
                <Text style={styles.expense_price}>
                  {Utils.formatPrice(totalPrice, '')}
                </Text>
                <Text style={styles.expense_unit}>đ</Text>
              </View>
            </View>
            <View style={styles.line}></View>
          </View>

          <View style={styles.expense_item_container}>
            <View style={styles.expense_item}>
              <Text style={styles.expense_title}>Discount</Text>
              <View style={styles.expense_text}>
                <Text style={styles.expense_price}>
                  {Utils.formatPrice(discountTotal, '')}
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
                  {Utils.formatPrice(totalDelivery, '')}
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
                {/* <Text style={styles.expense_subtotal}>{data.}items)</Text> */}
              </View>
              <View style={styles.expense_text}>
                <Text style={styles.expense_price}>
                  {Utils.formatPrice(totalPrice, '')}
                </Text>
                <Text style={styles.expense_unit}>đ</Text>
              </View>
            </View>
            <View style={styles.line}></View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkout_btn}
          onPress={handleGoToCheckOut}>
          <Text style={styles.checkout_text}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    justifyContent: 'space-between',
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
    textAlign: 'center',
    width: Constant.screen.width,
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
    // marginTop: 100,
    // position: 'absolute',
    // bottom: (Constant.screen.width * 1161) / 1750,
  },

  promotion: {
    width: Constant.screen.width * 0.88,
    height: (Constant.screen.width * 0.88 * 6) / 40,
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
    // position: 'absolute',
    // bottom: (Constant.screen.width * 0.88 * 5) / 25,
  },
  expense_item_container: {
    width: Constant.screen.width * 0.85,
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
    // position: 'absolute',
    // bottom: 50,
  },
  checkout_text: {
    textTransform: 'uppercase',
    color: Constant.color.background,
  },
});
