import React from 'react';
import {StyleSheet, Text} from 'react-native';
import constant from '../../controller/Constant';

export const H1 = ({children}) => {
  return <Text style={styles.h1}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: constant.color.black,
    fontWeight: 'bold',
  },
});
