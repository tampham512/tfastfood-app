import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import StarIcon from 'src/assets/Icons/star.png';
import LoveIcon from 'src/assets/Icons/love.png';
import {StyleSheet} from 'react-native';
import Constant from 'src/controller/Constant';
import {useNavigation} from '@react-navigation/core';
import {SITE_MAP} from 'src/utils/constants/Path';
import {numberWithCommas, starMedium} from 'src/utils/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addItemsFavorite} from 'src/redux/slices/favoriteSlice';

function ProductItem({item, isflastList}) {
  const navigation = useNavigation();
  const {userInfo} = useSelector(state => state.auth);

  item = isflastList ? item?.item : item;
  const dispatch = useDispatch();
  const onPressItem = slug => () => {
    navigation.navigate(SITE_MAP.DETAILS, {
      slug,
    });
  };
  const addFavorite = item => () => {
    const data = {
      idProduct: item?.id,
      slug: item?.slug,
      price: item?.selling_price,
      idUser: userInfo?.id,
      product: item,
    };
    dispatch(addItemsFavorite(data));
  };
  return (
    <View
      style={[
        styles.ListMon,
        {marginLeft: isflastList ? 5 : 30, marginRight: isflastList ? 20 : 30},
      ]}
      key={item.id}>
      <TouchableOpacity
        style={styles.buttonMon}
        onPress={onPressItem(item.slug)}>
        <View
          style={{
            backgroundColor: Constant.color.white,
            paddingHorizontal: 70,
            borderRadius: 20,
            borderColor: Constant.color.main,
            borderWidth: 1,
            borderBottomWidth: 8,
            height: 200,
          }}>
          <Image
            style={[styles.FaceLogoMon]}
            source={{uri: `${Constant.REACT_APP_API_URL}${item.img01}`}}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      {/* <View style={styles.IconYT}> */}
      <TouchableOpacity
        style={[styles.IconYT, {marginLeft: isflastList ? 270 : 300}]}
        onPress={addFavorite(item)}>
        <Ionicons name="heart" size={28} color={Constant.color.main} />
      </TouchableOpacity>
      {/* </View> */}

      <View style={[styles.textgia]}>
        <Text style={styles.gia}>{numberWithCommas(item.selling_price)}</Text>
      </View>
      <View style={[styles.textsao]}>
        <Text style={styles.sao}> {starMedium(item?.review)}</Text>
        <Image style={styles.sao} source={StarIcon} />
        <Text>(+{item?.review?.length || 0})</Text>
      </View>
      <View style={[styles.Tenmon]}>
        <Text style={styles.namemon}>{item.name}</Text>
      </View>
      {/* <View style={[styles.PL]}>
        <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
      </View> */}
    </View>
  );
}

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Constant.color.white,
  },
  ScrollView: {
    position: 'relative',
    marginBottom: 200,
  },
  Main: {
    marginTop: 30,
  },
  ListMon: {
    position: 'relative',

    marginBottom: 20,
    shadowColor: Constant.color.gray,
    borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 38,
    elevation: 5,
    backgroundColor: 'white',
  },
  FaceLogoMon: {
    height: 180,
    width: 180,
    marginBottom: 5,
    borderRadius: 20,
  },
  Tenmon: {
    marginTop: 10,
    marginBottom: 10,
  },
  FaceLogoback: {
    height: 60,
    width: 60,
    margin: 10,
  },

  fast: {
    color: '#272D2F',
    marginLeft: 30,
    fontSize: 44,
    fontWeight: 'bold',
  },
  food: {
    color: '#FE724C',
    marginLeft: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
  tyet: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 18,
  },
  tyett: {
    color: '#111719',
    marginLeft: 30,
    marginTop: 20,
    fontSize: 16,
  },
  ComboBox: {
    Color: '#FE724C',
    height: 100,
    marginLeft: 15,
    marginTop: 5,
    zIndex: 100,
  },

  namemon: {
    color: '#272D2F',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  phuluc: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 15,
  },
  textgia: {
    width: 100,
    height: 40,
    backgroundColor: Constant.color.main,
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    position: 'absolute',
    fontWeight: 'bold',
  },
  gia: {
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    textColor: Constant.color.white,
    color: Constant.color.white,
    fontWeight: 'bold',
  },
  IconYT: {
    position: 'absolute',
    // marginLeft: 300,
    margin: 10,

    height: 38,
    width: 38,
    borderRadius: 38,
    marginBottom: 10,
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
  },
  textsao: {
    width: 90,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 180,
    margin: 10,
    position: 'absolute',
    alignItems: 'center',
    shadowColor: Constant.color.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sao: {
    justifyContent: 'center',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 3,
    fontWeight: 'bold',
    color: '#272D2F',
  },
});
