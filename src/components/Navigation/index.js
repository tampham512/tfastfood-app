// import React from 'react';
// import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
// import {SITE_MAP} from '../../utils/constants/Path';

// import HomeIcon from 'src/assets/Icons/home.png';
// import {Box} from 'native-base';
// import {useNavigation} from '@react-navigation/core';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import * as S from './styled';
// function Navigation({children}) {
//   const navigation = useNavigation();
//   const menuList = [
//     {
//       title: 'Home',
//       icon: '',
//       menu: SITE_MAP.INDEX.menu,
//       name: SITE_MAP.INDEX.name,
//     },
//     {
//       title: 'Order',
//       icon: '',
//       menu: SITE_MAP.CONTACT.menu,
//       name: SITE_MAP.CONTACT.name,
//     },
//     {
//       title: 'Product',
//       icon: '',
//       menu: SITE_MAP.PRODUCT.name,
//       name: SITE_MAP.PRODUCT.menu,
//     },
//     {
//       title: 'Chat',
//       icon: '',
//       menu: SITE_MAP.INDEX.name,
//       name: SITE_MAP.INDEX.name,
//     },
//     {
//       title: 'Account',
//       icon: '',
//       menu: '',
//       name: SITE_MAP.LOGIN,
//     },
//   ];
//   const onPressItem = name => () => {
//     // console.log(name);
//     navigation.push(name);
//   };
//   return (
//     <View style={{flex: 1, height: '100%'}}>
//       <ScrollView style={{flex: 1}}>{children}</ScrollView>

//       <View style={styles.container}>
//         {menuList.map(({title, icon, menu, name}, index) => (
//           <View
//             style={styles.item}
//             onStartShouldSetResponder={onPressItem(name)}
//             on
//             key={index}>
//             <Image source={HomeIcon} style={styles.img} />
//             <Text>{title}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// export default Navigation;
// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   item: {
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     alignItems: 'center',
//   },
//   img: {
//     color: '#a23535',
//   },
// });
