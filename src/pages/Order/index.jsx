import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Center, InputRightAddon} from 'native-base';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  useWindowDimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
// import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationContainer from '@react-navigation/native';
import Constant from 'src/controller/Constant';
import UpComing from 'src/components/Order/UpComing';
import History from 'src/components/Order/History';
import Utils from 'src/utils/utils';
import CurrentOrderItem from 'src/components/Order/CurrentOrderItem';
import LastedOrderItem from 'src/components/Order/LastedOrderItem';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UpComing"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="UpComing"
        component={UpComing}
        options={{tabBarLabel: 'UpComing'}}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{tabBarLabel: 'History'}}
      />
    </Tab.Navigator>
  );
}

const current_order_list = [
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-12 00:10',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Food on the way',
  },
];

const lasted_order_list = [
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
  {
    title: 'Red n hot pizza',
    time: '2023-01-11 10:30',
    price: 30000,
    image: Constant.images.pizza,
    total_item: 1,
    status: 'Order Delivered',
  },
];

const Order = () => {
  const [active, setActive] = React.useState(1);
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
          <Text style={styles.title_header}>My Orders</Text>
        </View>
        <TouchableOpacity style={styles.avatar_btn}>
          <Image style={styles.avatar} source={Constant.images.avatar} />
        </TouchableOpacity>
      </View>

      {/* <Tab.Navigator
    initialRouteName="UpComing"
    tabBarOptions={{
      activeTintColor: '#e91e63',
      labelStyle: {fontSize: 12},
      style: {backgroundColor: 'white'},
    }}>
    <Tab.Screen
      name="UpComing"
      component={UpComing}
      options={{tabBarLabel: 'UpComing'}}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{tabBarLabel: 'History'}}
    />
  </Tab.Navigator> */}

      <View style={styles.content_container}>
        <View style={styles.tab_container}>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={{
              backgroundColor:
                active == 1 ? Constant.color.main : Constant.color.background,
              width: '47.5%',
              height: '82%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: Constant.screen.width,
              position: 'absolute',
              left: (Constant.screen.width * 0.88 * 1) / 60,
            }}>
            <Text
              style={{
                color:
                  active == 1 ? Constant.color.background : Constant.color.main,
                fontSize: Constant.screen.width * 0.048 * 0.7,
              }}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(2)}
            style={{
              backgroundColor:
                active == 2 ? Constant.color.main : Constant.color.background,
              width: '47.5%',
              height: '82%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: Constant.screen.width,
              position: 'absolute',
              right: (Constant.screen.width * 0.88 * 1) / 60,
            }}>
            <Text
              style={{
                color:
                  active == 2 ? Constant.color.background : Constant.color.main,
                fontSize: Constant.screen.width * 0.048 * 0.7,
              }}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{
          // backgroundColor: 'red',
          height: '76%',
        }}>
          <View style={styles.list_container}>
            <View style={styles.current_order_list}>
              <FlatList
                style={styles.flat_list_item}
                data={current_order_list}
                renderItem={(item, index) => (
                  <CurrentOrderItem current_order_item={item} />
                )}
              />
            </View>

            <Text style={styles.lasted_order_title}>Lasted Orders</Text>

            <View style={styles.lasted_order_list}>
              <FlatList
                style={styles.flat_list_item}
                data={lasted_order_list}
                renderItem={(item, index) => (
                  <LastedOrderItem lasted_order_item={item} />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    width: Constant.screen.width,
    height: Constant.screen.height,
    backgroundColor: Constant.color.background,
    flexDirection: 'column',
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    width: Constant.screen.width * 0.88,
    height: Constant.screen.width * 0.1,
    // backgroundColor: 'red',
    marginTop: Constant.screen.width * 0.08,
    alignSelf: 'center',
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
    position: 'absolute',
    left: 0,
    elevation: 5,
    translationZ: 20,
    // backgroundColor: Constant.color.dropShadow,
  },
  title_header: {
    fontSize: Constant.screen.width * 0.048,
    fontWeight: 'bold',
    color: Constant.color.black,
  },
  avatar_btn: {
    width: Constant.screen.width * 0.1,
    height: Constant.screen.width * 0.1,
    // backgroundColor: 'yellow',
    position: 'absolute',
    right: 0,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: (Constant.screen.width * 10) / 375,
  },
  content_container: {
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'center',
    width: Constant.screen.width * 0.88,
    alignSelf: 'center',
    position: 'relative',
    top: Constant.screen.width * 0.08,
  },
  tab_container: {
    backgroundColor: Constant.color.background,
    height: (Constant.screen.width * 0.88 * 1) / 6,
    borderRadius: (Constant.screen.width * 0.88 * 6) / 33,
    borderWidth: 1,
    borderColor: Constant.color.border,
    marginBottom: Constant.screen.width * 0.08,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Constant.color.background,
    position: 'relative',
  },
  upcoming_tab_btn: {},
  history_tab_btn: {},

  list_container: {
    height: '100%',
    // position: 'absolute',
    // top: Constant.screen.width * 0.08 + (Constant.screen.width * 0.88 * 1) / 6,
  },

  current_order_list: {
    // backgroundColor: 'yellow',
    width: '100%',
    // height: (Constant.screen.width * 0.88 * 119) / 165,
    marginBottom: Constant.screen.width * 0.02,
  },

  lasted_order_title: {
    fontWeight: 'bold',
    fontSize: Constant.screen.width * 0.048,
    color: Constant.color.black,
    marginBottom: Constant.screen.width * 0.055,
  },

  lasted_order_list: {
    // backgroundColor: 'yellow',
    width: '100%',
    // height: (Constant.screen.width * 0.88 * 119) / 165,
  },
});
