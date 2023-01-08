import React from 'react';
import {View} from 'react-native';
import {Image, StyleSheet, Text} from 'react-native';

function MyCard() {
  return (
    <View style={styles.containerCenter}>
      {/* <Image
        // source={require('../../assets/Icons/Logo.png')}
        style={styles.img}
        resizeMode="contain"
      /> */}
      <View>
        <Text>Tam Pham</Text>
        <Text>My Card</Text>
      </View>
    </View>
  );
}

export default MyCard;

const styles = StyleSheet.create({
  containerCenter: {},
  h1: {
    // fontSize: 30,
    // color: constant.color.black,
    // fontWeight: 'bold',
  },
  img: {
    width: '60%',
  },
});
