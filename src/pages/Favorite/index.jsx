import React, {useCallback} from 'react';
import ComboBox from 'react-native-combobox';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  useState,
  TouchableOpacity,
  View,
  radio_props,
  Alert,
  Button,
} from 'react-native';
import {FlatList} from 'native-base';
import {useSelector} from 'react-redux';
import CartItem from 'src/components/Cart/CartItem';
import FavoriteItem from 'src/components/Favorite/FavoriteItem';
import {ButtonBack} from 'src/components/Button/ButtonBack';
import {SITE_MAP} from 'src/utils/constants/Path';
const Favorite = () => {
  const dataFavorite = useSelector(state => state.favorite);
  return (
    <View style={styles.container}>
      <ButtonBack pathBack={SITE_MAP.INDEX} />
      <View
        style={[
          styles.header,
          {flexDirection: 'row', justifyContent: 'center'},
        ]}>
        <Text style={styles.fast}>Favorite</Text>
      </View>

      <View style={{marginTop: 40, marginLeft: 20}}>
        {dataFavorite?.value?.length > 0 ? (
          <FlatList
            style={styles.flat_list_item}
            data={dataFavorite?.value}
            renderItem={(item, index) => <FavoriteItem item={item} />}
          />
        ) : (
          <Text style={{textAlign: 'left', width: '100%'}}>No empty item.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  ScrollView: {
    position: 'relative',
  },
  Main: {
    marginTop: 30,
  },
  ListMon: {
    position: 'relative',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  FaceLogoMon: {
    height: 200,
    width: '100%',
    marginBottom: 5,
    borderRadius: 20,
  },
  Tenmon: {
    marginTop: 10,
  },
  FaceLogoback: {
    height: 60,
    width: 60,
    margin: 10,
  },
  FaceLogo: {
    height: 45,
    width: 45,
    margin: 20,
    marginLeft: 110,
  },

  fast: {
    color: '#272D2F',
    marginTop: 37,

    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
  },

  namemon: {
    color: '#272D2F',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  phuluc: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 15,
  },
  textgia: {
    width: 80,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    position: 'absolute',
  },
  gia: {
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
  IconYT: {
    position: 'absolute',
    marginLeft: 300,
    margin: 10,
  },
  textsao: {
    width: 60,
    height: 21,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 190,
    margin: 10,
    position: 'absolute',
  },
  sao: {
    justifyContent: 'center',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Favorite;
