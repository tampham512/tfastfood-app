import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Constant from 'src/controller/Constant';
import {SITE_MAP} from 'src/utils/constants/Path';

export function ButtonBack({pathBack}) {
  const navigation = useNavigation();
  const {pathHistory} = useSelector(state => state.common);
  console.log(
    '🚀 ~ file: ButtonBack.js:10 ~ ButtonBack ~ pathHistory',
    pathHistory,
  );

  const onPressBack = () => {
    console.log(pathBack);
    if (pathBack) {
      navigation.navigate(pathBack);
    } else {
      navigation.navigate(pathHistory || SITE_MAP.INDEX);
    }
  };
  return (
    <View
      onStartShouldSetResponder={onPressBack}
      style={{
        position: 'absolute',
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        top: 35,
        left: 30,
        zIndex: 8,
        alignItems: 'center',
        shadowColor: Constant.color.gray,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      }}>
      <Ionicons name="chevron-back-outline" size={22} color={'black'} />
    </View>
  );
}
