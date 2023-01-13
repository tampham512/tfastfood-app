import {Center, ScrollView} from 'native-base';
import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';
import Utils from 'src/utils/utils';

const LastedOrderItem = ({lasted_order_item}) => {
  lasted_order_item = lasted_order_item.item;
  // console.log(lasted_order_item);
  return (
    <View style={styles.current_order_item}>
      <View style={styles.current_order_item_container}>
        <View style={styles.current_item_info}>
          <Image style={styles.item_image} source={lasted_order_item?.image} />
          <View style={styles.item_info_container}>
            <View style={styles.time_quantity_container}>
              <Text style={styles.item_quantity}>
                {Utils.format_date_time(lasted_order_item?.time)}
              </Text>
              <Icon
                name="ellipse"
                size={8}
                color={Constant.color.grey}
                style={{marginLeft: 5, marginRight: 5}}></Icon>
              <Text style={styles.item_quantity}>
                {lasted_order_item?.total_item + ' items'}
              </Text>
            </View>
            <View style={styles.item_title_container}>
              <Text style={styles.item_title}>{lasted_order_item?.title}</Text>
              <Icon
                name="checkmark-circle"
                size={14}
                color={Constant.color.green_tick}></Icon>
            </View>
            <View style={styles.delivery_status_container}>
              <Icon
                name="ellipse"
                size={14}
                color={Constant.color.green_point}
                style={{marginRight: 5}}></Icon>
              <Text style={styles.lasted_item_quantity}>
                {lasted_order_item?.status}
              </Text>
            </View>
          </View>
          <Text style={styles.order_id}>
            {Utils.formatPrice(lasted_order_item?.price, 'đ')}
          </Text>
        </View>

        <View style={styles.all_btn_container}>
          <View style={styles.btn_container}>
            <TouchableOpacity style={styles.cancel_btn}>
              <Text style={styles.text_cancel_btn}>Rate</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn_container}>
            <TouchableOpacity style={styles.order_btn}>
              <Text style={styles.text_order_btn}>Re-Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LastedOrderItem;

const styles = StyleSheet.create({
  current_order_item: {
    width: '100%',
    borderRadius: Constant.screen.width * 0.04,
    backgroundColor: Constant.color.background,
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: Constant.color.border,
    marginBottom: Constant.screen.width * 0.05,
    // backgroundColor: 'red',
    // elevation: 25,
    // translationZ: 20,
  },

  current_order_item_container: {
    width: '100%',
    padding: Constant.screen.width * 0.04,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
  },

  current_item_info: {
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    position: 'relative',
  },

  item_image: {
    width: '20%',
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: Constant.color.dropShadow,
    // elevation: 5,
    // translationZ: 20,
  },

  item_info_container: {
    marginLeft: Constant.screen.width * 0.04,
    marginTop: Constant.screen.width * 0.03,
    // backgroundColor: 'yellow',
  },
  item_quantity: {
    color: Constant.color.grey,
    fontSize: Constant.screen.width * 0.048 * 0.7,
  },

  item_title_container: {
    flexDirection: 'row',
    marginTop: Constant.screen.width * 0.01,
    marginBottom: Constant.screen.width * 0.01,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  item_title: {
    fontSize: Constant.screen.width * 0.048 * 0.8,
    color: Constant.color.black,
    fontWeight: 'bold',
    marginRight: Constant.screen.width * 0.01,
  },
  order_id: {
    color: Constant.color.main,
    fontSize: Constant.screen.width * 0.048 * 0.8,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  current_time_delivery: {
    width: '100%',
    height: (Constant.screen.width * 0.88 * 1) / 6,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    marginTop: Constant.screen.width * 0.04,
  },
  current_item_time: {
    // backgroundColor: 'yellow',
    position: 'absolute',
    left: 0,
  },

  arrive_time_title: {
    fontSize: Constant.screen.width * 0.048 * 0.7,
    color: Constant.color.grey,
  },
  current_time_container: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
  },
  arrive_time: {
    fontSize: Constant.screen.width * 0.075,
    color: Constant.color.black,
    marginRight: Constant.screen.width * 0.05 * 0.5,
    // backgroundColor: Constant.color.green_tick,
    alignSelf: 'flex-end',
  },
  avatar_time_unit: {
    fontSize: Constant.screen.width * 0.05 * 0.8,
    color: Constant.color.black,
    // backgroundColor: 'red',
    // alignSelf: 'flex-start',
    marginBottom: 4,
  },

  current_item_delivery: {
    position: 'absolute',
    right: 0,
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
  },
  delivery: {
    fontSize: Constant.screen.width * 0.048 * 0.7,
    color: Constant.color.grey,
  },
  delivery_status: {
    fontSize: Constant.screen.width * 0.05 * 0.8,
    color: Constant.color.black,
  },
  all_btn_container: {
    width: '100%',
    height: Constant.screen.width * 0.11,
    marginTop: Constant.screen.width * 0.06,
    flexDirection: 'row',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },

  btn_container: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancel_btn: {
    backgroundColor: Constant.color.background,
    width: '95%',
    height: '100%',
    borderRadius: Constant.screen.width,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: Constant.color.border,
  },
  text_cancel_btn: {
    color: Constant.color.black,
    fontSize: Constant.screen.width * 0.048 * 0.7,
  },
  order_btn: {
    backgroundColor: Constant.color.main,
    width: '95%',
    height: '100%',
    borderRadius: Constant.screen.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_order_btn: {
    color: Constant.color.background,
    fontSize: Constant.screen.width * 0.048 * 0.7,
  },
  time_quantity_container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  delivery_status_container: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  lasted_item_quantity: {
    color: Constant.color.green_point,
    fontSize: Constant.screen.width * 0.048 * 0.7,
  },
});
