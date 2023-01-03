import React from 'react';

import {StyleSheet, TouchableHighlight, Text} from 'react-native';

function index({style, title, ...rest}) {
  return (
    <TouchableHighlight style={[styles.button, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

export default index;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#d9463e',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
